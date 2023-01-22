use shelter;
db.dropDatabase();

const cats = [
    {
    name: 'Tom',
    breed: 'Persian',
    age: 8,
    about: 'Mouse botherer',
    image: 'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    adopted: false
    },

    {
    name: 'Kirby',
    breed: 'Manx',
    age: 6,
    about: 'Awww his little face',
    image: 'https://images.pexels.com/photos/4734723/pexels-photo-4734723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    adopted: true
    },

    {
        name: 'Angus',
        breed: 'Russian Blue',
        age: 3,
        about: 'Hungry',
        image: 'https://images.pexels.com/photos/590490/pexels-photo-590490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        adopted: false
        },
        {
            name: 'Ray',
            breed: 'Sphinx',
            age: 7,
            about: 'Needs warmth and attention',
            image: 'https://images.pexels.chttps://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2om/photos/590490/pexels-photo-590490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            adopted: false
            }
];

const dogs = [
    {
    name : 'Sparky',
    breed: 'Crested Chinese',
    age: 4,
    about: 'He zoomin',
    image: "https://images.pexels.com/photos/53261/pexels-photo-53261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    adopted: false
    },

    {
    name: 'Cara',
    breed: 'Afghan Hound',
    age: 3,
    about: 'Model bitch',
    image: 'https://images.pexels.com/photos/663573/pexels-photo-663573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    adopted: false
    },

    {
        name: 'Charlie',
        breed: 'Greyhound',
        age: 2,
        about: 'Drama Queen and escape artist',
        image: 'https://images.pexels.com/photos/11608986/pexels-photo-11608986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        adopted: true
        },
        {
            name: 'Fred',
            breed: 'Greyhound',
            age: 4,
            about: 'Loves other dogs',
            image: 'https://https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.pexels.com/photos/11608986/pexels-photo-11608986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            adopted: false
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



