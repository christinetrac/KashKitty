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
        name: 'leafy',
        percent: 0.1,
        type: TYPE.necessities,
        file: require('../Cats/leafy.png')
    },
    {
        name: 'oreo',
        percent: 0.2,
        type: TYPE.necessities,
        file: require('../Cats/oreo.png')
    },
    {
        name: 'meanie',
        percent: 0.3,
        type: TYPE.necessities,
        file: require('../Cats/meanie.png')
    },
    {
        name: 'froggy',
        percent: 0.4,
        type: TYPE.personal,
        file: require('../Cats/froggy.png')
    },
    {
        name: 'floaty',
        percent: 0.5,
        type: TYPE.personal,
        file: require('../Cats/floaty.png')
    },
    {
        name: 'creamsicle',
        percent: 0.6,
        type: TYPE.personal,
        file: require('../Cats/creamsicle.png')
    },
    {
        name: 'raymond',
        percent: 0.7,
        type: TYPE.personal,
        file: require('../Cats/raymond.png')
    },
    {
        name: 'duck',
        percent: 0.8,
        type: TYPE.entertainment,
        file: require('../Cats/duck.png')
    },
    {
        name: 'cocoa',
        percent: 0.9,
        type: TYPE.entertainment,
        file: require('../Cats/cocoa.png')
    }
];

export { TYPE, LEVEL, CATS };
