# Component Based Ext.dataview.DataView Example Application

This is a sample application written using Sencha Touch 2 to show the awesomeness of the component version of [Ext.dataview.DataView](http://docs.sencha.com/touch/2-0/#!/api/Ext.dataview.DataView).

## Demo

You can run this example by simply cloning this repository and opening `index.html`. This works even though I have not included the Sencha Touch 2 framework. This is because I have built my MVC application into the `all-classes.js` file.

![Screenshot](http://src.sencha.io/636/http://img1.sencha.com/files/misc/KittensListItem.png)

## Setup

I have not included Sencha Touch in this repository. The steps to include it are

1. Download Sencha Touch 2 from the [Sencha Website](http://www.sencha.com/products/touch/download/)
2. Unpack the SDK and move it to the `lib/touch2` directory (so you should have a `lib/touch2/sencha-touch-debug.js` file).
3. Open `index-debug.html`

At the time of writing this, Sencha Touch 2 is on its first beta release. This example should work with the GA release of Sencha Touch 2, but no promises. :)

## Building the application

If you want to build the application and run the production version (`index.html`), you must use the SDK Tools and do some fanciness.

1. Download the SDK Tools 2.0 beta from [here](http://www.sencha.com/products/sdk-tools/) (bottom of the page)
2. Install
3. Run the following command within this directory: `sencha build -p app.jsb3 -d .`
4. Done

## Building the SASS/Theme

You'll need [SASS](http://sass-lang.com/) and [Compass](http://compass-style.org/) installed to do this.

1. `sudo gem install compass` (if not installed)
2. Run the following command within this directory: `compass compile resources/sass`
3. Done.
