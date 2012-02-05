/**
 * A simple list that uses {@link Example.view.KittensListItem} to show records from
 * the {@link Example.store.Kittens} store.
 */
Ext.define('Example.view.KittensList', {
    extend: 'Ext.dataview.DataView',
    xtype: 'kittenlist',

    /**
     * We need to require the {@link Example.view.KittensListItem} class so we can
     * use it as the {@link #defaultType} below
     */
    requires: [
        'Example.view.KittensListItem'
    ],

    config: {
        /**
         * Tell the dataview to use components for each item
         */
        useComponents: true,

        /**
         * Give is a cls so we can style it
         */
        cls: 'kitten-list',

        /**
         * Use the {@link Example.store.Kittens} store as it's data source.
         *
         * Note: we can use 'Kittens' because we have defined the store as a store in
         * our {@link Example.controller.Application} controller
         */
        store: 'Kittens',

        /**
         * Set the default item for this component list to be the {@link Example.view.KittensListItem}
         * class.
         */
        defaultType: 'kittenslistitem'
    }
});
