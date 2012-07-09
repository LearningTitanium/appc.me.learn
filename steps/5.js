/*
 That dictionary can contain any of the properties for Windows defined in the
 documentation:

 http://docs.appcelerator.com/titanium/2.1/index.html#!/api/Titanium.UI.Window
 */
var win = Ti.UI.createWindow({
    backgroundColor: 'purple'
});

/*
 When we're ready for our window to be visible, we call its "open" method.
 */
win.open();