/*
 A Button is a type of view. It lets you display... a button.

 http://docs.appcelerator.com/titanium/2.1/index.html#!/api/Titanium.UI.Button
 */
var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var button = Ti.UI.createButton({
    title: 'Please Click Me!', textAlign: 'center',
    color: '#000'
});
win.add(button);

/*
 Buttons are meant to be clicked.
 In Titanium, you add an event listener to a view to run code when that happens.
 */
button.addEventListener('click', function (evt) {
    /*
     Some standard JavaScript utilities, like "alert", can be used too!
     */
    alert('The button was clicked!');
});


/*
 It's not just buttons that can have click listeners; any view can!
 */
var view = Ti.UI.createView({
    right: 10, bottom: 10,
    width: 20, height: 20,
    backgroundColor: 'red'
});
view.addEventListener('click', function (evt) {
    alert('You clicked the view!');
});
win.add(view);

win.open();