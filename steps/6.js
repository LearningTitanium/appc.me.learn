/*
 A window by itself is boring.
 */
var win = Ti.UI.createWindow({
    backgroundColor: 'white'
});

/*
 But we can add Views to it!
 */
var view = Ti.UI.createView({
    backgroundColor: 'red',
    width: 100, height: 100
});
win.add(view);

/*
 Views are an empty drawing surface or container. It's the base type of all
 visible elements in Titanium.

 http://docs.appcelerator.com/titanium/2.1/index.html#!/api/Titanium.UI.View
 */

/*
 Don't forget to open the window!
 */
win.open();