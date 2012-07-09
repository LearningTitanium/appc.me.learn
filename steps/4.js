/*
 Windows take a single argument: a dictionary.
 */

var dictionary = {

};

var win = Ti.UI.createWindow(dictionary);

/*
 Notice how we only use our "dictionary" in one place?

 Let's make our code easier to understand by reducing it to the following:
 */

var win = Ti.UI.createWindow({

});