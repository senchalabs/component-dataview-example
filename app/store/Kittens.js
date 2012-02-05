/**
 * A simple store that has predefined data. It uses the {@link Example.model.Kitten}
 * model for it's fields definition.
 */
Ext.define('Example.store.Kittens', {
    extend: 'Ext.data.Store',
    requires: ['Example.model.Kitten'],

    config: {
        model: 'Example.model.Kitten',

        data: [
            { name: 'Running kitten', image: 'data/images/kitten1.jpg', cuteness: 70 },
            { name: 'Sitting kitten', image: 'data/images/kitten2.jpg', cuteness: 90 },
            { name: 'Happy kitten', image: 'data/images/kitten3.jpg', cuteness: 70 },
            { name: 'Ginger kitten', image: 'data/images/kitten4.jpg', cuteness: 80 },
            { name: 'Kitten friends', image: 'data/images/kitten5.jpg', cuteness: 20 },
            { name: 'Milk kitten', image: 'data/images/kitten6.jpg', cuteness: 50 }
        ]
    }
});
