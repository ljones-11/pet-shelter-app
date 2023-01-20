use shelter;
db.dropDatabase();

const cats = [
    {
    name: 'Tom',
    breed: 'Persian',
    age: 8,
    about: 'Mouse botherer'
    },

    {
    name: 'Kirby',
    breed: 'Manx',
    age: 6,
    about: 'Awww his little face'
    }
];

const dogs = [
    {
    name : 'Sparky',
    breed: 'Crested Chinese',
    age: 4,
    about: 'He zoomin'
    },

    {
    name: 'Cara',
    breed: 'Afghan Hound',
    age: 3,
    about: 'Model bitch'
    }
];

db.cats.insertMany(cats);
db.dogs.insertMany(dogs);


