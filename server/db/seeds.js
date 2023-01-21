use shelter;
db.dropDatabase();

const cats = [
    {
    name: 'Tom',
    breed: 'Persian',
    age: 8,
    about: 'Mouse botherer',
    adopted: false
    },

    {
    name: 'Kirby',
    breed: 'Manx',
    age: 6,
    about: 'Awww his little face',
    adopted: false
    },

    {
        name: 'Angus',
        breed: 'Russian Blue',
        age: 3,
        about: 'Hungry',
        adopted: true
        }
];

const dogs = [
    {
    name : 'Sparky',
    breed: 'Crested Chinese',
    age: 4,
    about: 'He zoomin',
    adopted: false
    },

    {
    name: 'Cara',
    breed: 'Afghan Hound',
    age: 3,
    about: 'Model bitch',
    adopted: false
    },

    {
        name: 'Charlie',
        breed: 'Greyhound',
        age: 2,
        about: 'Drama Queen and escape artist',
        adopted: true
        }
];

const adoptions = [
    {
    firstName: 'William',
    lastName: 'Billiam',
    phone: '09384925847',
    chosenAnimal: 'Sparky',
    personalStatement: 'I love dogs'
    },
    {
    firstName: 'Jimothy',
    lastName: 'Harrow',
    phone: '09393486393',
    chosenAnimal: 'Tom',
    personalStatement: 'I love cats'
    }
];

db.cats.insertMany(cats);
db.dogs.insertMany(dogs);
db.adoptions.insertMany(adoptions);



