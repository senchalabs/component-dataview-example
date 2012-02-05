/**
 * A simple list item to show a picture, name and cuteness value of a kitten, from the
 * {@link Example.store.Kittens} store.
 */
Ext.define('Example.view.KittensListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'kittenslistitem',

    /**
     * we are including both Ext.Img component for the image, and the Ext.slider.Slider
     * component for the cuteness slider.
     */
    requires: [
        'Ext.Img',
        'Ext.slider.Slider'
    ],

    config: {
        /**
         * A custom cls for each item
         */
        cls: 'kitten-list-item',

        /**
         * setup the dataMap. each property is a method in 'this' class, and then
         * inside that config, it will call the method you pass with the value you
         * want, form the record
         */
        dataMap: {
            //this will call: this.getImage()
            getImage: {
                //and then this will call: this.getImage().setSrc() with the
                //'image' field value form the record
                setSrc: 'image'
            },

            getName: {
                setHtml: 'name'
            },

            getSlider: {
                setValue: 'cuteness'
            }
        },

        /**
         * @cfg {Boolean/Object/Ext.Img} image
         * The config for the image component used in this dataitem.
         * In this case, we just pass true, because we just want it to create
         * a new Ext.Img.
         */
        image: true,

        /**
         * @cfg {Boolean/Object/Ext.Component} name
         * The component used to show an image. It is an Ext.Component, so we
         * just want to add a cls so we can style it, and add some flex so it
         * looks good.
         */
        name: {
            cls: 'x-name',
            flex: 1
        },

        /**
         * @cfg {Boolean/Object/Ext.slider.Slider} slider
         * The slider component to show the cuteness of the kitten. We just want to
         * add some flex to make it look good.
         */
        slider: {
            flex: 2
        },

        /**
         * We give it a hbox layout so the items are horizontally displayed, and then
         * give it an align of center so they are vertically centered.
         */
        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    /**
     * Called when you set the {@link #image} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     */
    applyImage: function(config) {
        return Ext.factory(config, Ext.Img, this.getImage());
    },

    /**
     * Called when you set the {@link #image} configuration, and is passed both the new value
     * (from applyImage) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     * @private
     */
    updateImage: function(newImage, oldImage) {
        if (newImage) {
            this.add(newImage);
        }

        if (oldImage) {
            this.remove(oldImage);
        }
    },

    /**
     * Called when you set the {@link #name} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    /**
     * Called when you set the {@link #name} configuration, and is passed both the new value
     * (from applyName) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

    /**
     * Called when you set the {@link #slider} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setSlider}.
     * @private
     */
    applySlider: function(config) {
        return Ext.factory(config, Ext.slider.Slider, this.getSlider());
    },

    /**
     * Called when you set the {@link #slider} configuration, and is passed both the new value
     * (from applySlider) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setSlider}.
     * @private
     */
    updateSlider: function(newSlider, oldSlider) {
        if (newSlider) {
            this.add(newSlider);
        }

        if (oldSlider) {
            this.remove(oldSlider);
        }
    }
});
