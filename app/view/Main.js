/**
 * The main view in our application. Used as a 'Viewport' to show the {@link Example.view.KittensList}
 * list in our application. 
 */
Ext.define('Example.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    /**
     * Require the {@link Example.view.KittensList} class as we want to display it in here.
     */
    requires: [
        'Example.view.KittensList'
    ],

    config: {
        /**
         * Give it a fit layout so the list stretches to the size of this container
         */
        layout: 'fit',

        /**
         * Include the {@link Example.view.KittensList} class as it's only item.
         */
        items: [
            { xclass: 'Example.view.KittensList' }
        ]
    }
});