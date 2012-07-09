/*
 Views can be positioned a couple of ways.
 */

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

/*
 By "Pinning" it to a side with the platform's default unit:
 */
win.add(Ti.UI.createView({
    backgroundColor: 'red',
    width: 20, height: 20,
    top: 10, left: 10
}));

/*
 Using percents:
 */
win.add(Ti.UI.createView({
    backgroundColor: 'green',
    width: 20, height: 20,
    right: '20%', top: 20
}));

/*
 Or by explicitly defining the unit:
 */
win.add(Ti.UI.createView({
    backgroundColor: 'blue',
    width: 20, height: 20,
    bottom: '1in'
}));

/*
 All these dimensions are relative to the parent view's dimensions.

 Check out the documentation to learn more about units and coordinates:

 http://docs.appcelerator.com/titanium/2.1/index.html#!/api/Titanium.UI.View
 */

win.open();