/**
 * This is our main application controller. It basically handles including our Kittens store
 * and KittensList view, and then listens to events in the cuteness slider.
 */
Ext.define('Example.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        /**
         * Set the control configuration so we can use ComponentQuery to listen to component events
         * in any of our defined views above.
         */
        control: {
            /**
             * Listen to the change event in the slider component, inside any kittenslistitem
             * component in our view.
             */
            'kittenslistitem slider': {
                change: 'onCutenessChange'
            }
        }
    },

    /**
     * Called when the value changes in the cuteness slider.
     */
    onCutenessChange: function(slider, thumb, value) {
        //we should do something here
        console.log('onCutenessChange', value);
    }
});
