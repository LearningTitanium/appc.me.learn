/*
 Welcome to Learning Titanium!

 My name is Dawson. I'm going to teach you the basics of Titanium.

 Together, we're going to make and understand the app to the right.

 (Hit Next!)
 */

var win = Ti.UI.createWindow({
    backgroundColor: '#000'
});

var container = Ti.UI.createView({
    layout: 'vertical'
});

var username = Ti.UI.createTextField({
    backgroundImage: 'images/textfield.png',
    color: '#000',
    width: 271, height: 30,
    hintText: 'Username',
    backgroundColor: 'transparent',
    clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE, borderWidth: 0,
    autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
    autocorrect: false,
    returnKeyType: Ti.UI.RETURNKEY_NEXT,
    top: 20
});
container.add(username);

var password = Ti.UI.createTextField({
    backgroundImage: 'images/textfield.png',
    width: 271, height: 30,
    hintText: 'Password',
    backgroundColor: 'transparent',
    clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE, borderWidth: 0,
    passwordMask: true,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    top: 10
});
container.add(password);

var button = Ti.UI.createView({
    backgroundImage: 'images/button.png',
    width: 271, height: 41,
    top: 20, bottom: 20
});
button.add(Ti.UI.createLabel({
    text: 'Login', textAlign: 'center',
    font: { fontSize: 20, fontWeight: 'bold' },
    color: '#fff',
    shadowColor: '#262b2f', shadowOffset: { x: 0, y: -1 }
}));
container.add(button);

var fields = [ username, password ];
var fieldWrappers = [ username, password ];

function highlight(control) {
    var stage1 = Ti.UI.createAnimation({
        opacity: 0.8,
        duration: 100
    });
    var stage2 = Ti.UI.createAnimation({
        opacity: 1,
        duration: 100
    });
    var steps = 3;
    stage1.addEventListener('complete', function (evt) {
        control.animate(stage2);
    });
    stage2.addEventListener('complete', function (evt) {
        if (--steps > 0) {
            control.animate(stage1);
        }
    });
    control.animate(stage1);
}

function submitForm() {
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value.length) {
            fields[i].focus();
            highlight(fieldWrappers[i]);
            return;
        }
        fields[i].blur();
    }
    button.hide();

    alert('Logged in ' + username.value + '!');
}

button.addEventListener('click', submitForm);
for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener('return', submitForm);
}

win.add(container);

win.addEventListener('open', function (evt) {
    username.focus();
});

win.open();