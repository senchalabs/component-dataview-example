/**
 * Enable the Ext.Loader and set the path for the Ext.* namespace to where our touch2 SDK
 * is placed.
 */
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext', 'lib/touch2/src');

/**
 * Define our application.
 */
Ext.application({
    /**
     * Give it a name. This is what our namespace is. So any views, stores or models we create
     * should be under the Example.store.*, Example.view.*, Example.model.* namespace.
     */
    name: 'Example',

    /**
     * Include our controllers. This is a simple example so there is only one controller.
     */
    controllers: ['Application'],

    /**
     * Include the application views. We only have one, normally you should only have one, with the
     * rest of your views inside your controller.
     */
    views: ['Main', 'KittensList'],

    /**
     * Include the stores that our application use.
     */
    stores: ['Kittens'],

    /**
     * When the application launches, we want to add the main view (defined above) into the Ext.Viewport
     * instance.
     */
    launch: function() {
        Ext.Viewport.add({
            xclass: 'Example.view.Main'
        });
    }
});
