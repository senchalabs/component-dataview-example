/**
 * The model used by {@link Examples.store.Kittens}.
 */
Ext.define('Example.model.Kitten', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            "name",
            "image",
            { name: "cuteness", type: 'int' }
        ]
    }
});
