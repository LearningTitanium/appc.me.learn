(function (context) {
    var totalSteps = 11;
    var lastStep = 0;

    var hash = window.location.hash;
    if (hash) {
        if (hash.indexOf('code=') >= 0) {
            loadCode(Base64.decode(hash.substr(hash.indexOf('code=') + 5)));
        }
        else if (hash.indexOf('step=') >= 0) {
            loadStep(getCurrentStep());
        }
    }
    else {
        loadStep(1);
    }

    var editor = context.ace.edit('code');
    var JavaScriptMode = require("ace/mode/javascript").Mode;
    editor.getSession().setMode(new JavaScriptMode());
    editor.setTheme("ace/theme/twilight");
    editor.setShowFoldWidgets(false);
    editor.setFontSize(16);

    $('#app').hide();

    var _executor, _cleaner;

    function loadStep(step) {
        lastStep = step;
        $.ajax({
            url: 'steps/' + step + '.js',
            success: function (data) {
                if (lastStep === step) {
                    loadCode(data);
                }
            },
            dataType: 'html'
        });
    }

    function loadCode(content) {
        editor.getSession().setValue(content);
        executeCode();
    }

    function executeCode() {
        _cleaner();
        _executor(editor.getSession().getValue() || $('#code').val());
    }

    function saveCode() {
        window.location.hash = 'code=' + Base64.encode(editor.getSession().getValue() || $('#code').val());
        alert('Saved! Bookmark or share this page\'s URL.');
    }

    function getCurrentStep(adjust) {
        var hash = window.location.hash;
        var step = parseInt(hash.substr(hash.indexOf('step=') + 5).split('&')[0] || 1, 10);
        if (step === NaN || step <= 0) {
            step = lastStep;
        }
        return Math.max(Math.min(step + (adjust || 0), totalSteps), 1);
    }

    function next() {
        var goTo = getCurrentStep(1);
        window.location.hash = 'step=' + goTo;
        loadStep(goTo);
    }

    function previous() {
        var goTo = getCurrentStep(-1);
        window.location.hash = 'step=' + goTo;
        loadStep(goTo);
    }

    context.appLoaded = function (executor, cleaner) {
        $('#app').fadeIn();
        _executor = executor;
        _cleaner = cleaner;
        executeCode();
    };

    editor.commands.addCommand({
        name: 'Run',
        bindKey: {win: 'Ctrl-R', mac: 'Command-R'},
        exec: executeCode
    });
    editor.commands.addCommand({
        name: 'Save',
        bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
        exec: saveCode
    });
    editor.commands.addCommand({
        name: 'Previous',
        bindKey: {win: 'Ctrl-Left', mac: 'Command-Left'},
        exec: previous
    });
    editor.commands.addCommand({
        name: 'Next',
        bindKey: {win: 'Ctrl-Right', mac: 'Command-Right'},
        exec: next
    });

    $(document)
        .bind('keydown', 'ctrl+r', executeCode)
        .bind('keydown', 'ctrl+s', saveCode)
        .bind('keydown', 'ctrl+left', previous)
        .bind('keydown', 'ctrl+right', next)
    ;

    $('#run').click(executeCode);
    $('#save').click(saveCode);
    $('#next').click(next);
    $('#previous').click(previous);
})(this);