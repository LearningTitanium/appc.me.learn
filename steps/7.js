var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var outerView = Ti.UI.createView({
    backgroundColor: 'red',
    width: 100, height: 100
});

/*
 Views can contain other views.
 */
var innerView = Ti.UI.createView({
    backgroundColor: 'white',
    width: 20, height: 20
});
outerView.add(innerView);
win.add(outerView);

win.open();