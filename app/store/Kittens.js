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
            { name: 'Yawning kitten', image: 'data/images/kitten1.jpeg', cuteness: 70 },
            { name: 'Sitting kitten', image: 'data/images/kitten2.jpeg', cuteness: 90 },
            { name: 'Evil kitten', image: 'data/images/kitten3.jpeg', cuteness: 40 },
            { name: 'Ginger kitten', image: 'data/images/kitten4.jpeg', cuteness: 80 },
            { name: 'Kitten friends', image: 'data/images/kitten5.jpeg', cuteness: 20 },
            { name: 'Milk kitten', image: 'data/images/kitten6.jpeg', cuteness: 50 }
        ]
    }
});
