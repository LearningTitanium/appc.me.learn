/*
 A Label is a type of view. It lets you display text.

 http://docs.appcelerator.com/titanium/2.1/index.html#!/api/Titanium.UI.Label
 */
var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

win.add(Ti.UI.createLabel({
    text: 'Hello, world!', textAlign: 'center',
    color: '#000'
}));

win.open();