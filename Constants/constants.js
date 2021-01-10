const TYPE = {
    necessities: 'Necessities',
    personal: 'Personal',
    entertainment: 'Entertainment'
};

const LEVEL = {
    light: 'Light',
    moderate: 'Moderate',
    heavy: 'Heavy'
};

const CATS = [
    {
        name: 'cat1',
        percent: 0.1,
        type: TYPE.necessities,
        file: require('../Cats/cat1.png')
    },
    {
        name: 'cat2',
        percent: 0.2,
        type: TYPE.necessities,
        file: require('../Cats/cat2.png')
    },
    {
        name: 'cat3',
        percent: 0.3,
        type: TYPE.necessities,
        file: require('../Cats/cat3.png')
    },
    {
        name: 'cat4',
        percent: 0.4,
        type: TYPE.personal,
        file: require('../Cats/cat4.png')
    },
    {
        name: 'cat5',
        percent: 0.5,
        type: TYPE.personal,
        file: require('../Cats/cat5.png')
    },
    {
        name: 'cat6',
        percent: 0.6,
        type: TYPE.personal,
        file: require('../Cats/cat6.png')
    },
    {
        name: 'cat7',
        percent: 0.7,
        type: TYPE.personal,
        file: require('../Cats/cat7.png')
    },
    {
        name: 'cat8',
        percent: 0.8,
        type: TYPE.entertainment,
        file: require('../Cats/cat8.png')
    },
    {
        name: 'cat9',
        percent: 0.9,
        type: TYPE.entertainment,
        file: require('../Cats/cat9.png')
    },
    {
        name: 'cat10',
        percent: 1,
        type: TYPE.entertainment,
        file: require('../Cats/cat10.png')
    },
];

export { TYPE, LEVEL, CATS };
