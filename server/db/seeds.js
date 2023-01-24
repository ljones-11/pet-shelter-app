use shelter;
db.dropDatabase();

const cats = [
    {
    name: 'Tom',
    breed: 'Persian',
    age: 8,
    about: 'Mouse botherer',
    image: 'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // adopted: false
    },

    {
    name: 'Kirby',
    breed: 'Manx',
    age: 6,
    about: 'Awww his little face',
    image: 'https://images.pexels.com/photos/4734723/pexels-photo-4734723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // adopted: true
    },

    {
        name: 'Angus',
        breed: 'Russian Blue',
        age: 3,
        about: 'Hungry',
        image: 'https://images.pexels.com/photos/590490/pexels-photo-590490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        // adopted: false
        },
        {
            name: 'Ray',
            breed: 'Sphinx',
            age: 7,
            about: 'Needs warmth and attention',
            image: 'https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg',
            // adopted: false
            },

        {
            name: 'Tam',
            breed: 'Balinese',
            age: 3,
            about: 'Laserchaser',
            image:'https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name: 'Zsa Zsa',
            breed: 'Ragdoll',
            age: 6,
            about: 'No touch! Only pet!',
            image: 'https://images.pexels.com/photos/13304876/pexels-photo-13304876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }

];

const dogs = [
    {
    name : 'Sparky',
    breed: 'Boxer',
    age: 4,
    about: 'He zoomin',
    image: "https://images.pexels.com/photos/53261/pexels-photo-53261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // adopted: false
    },

    {
    name: 'Cara',
    breed: 'Collie',
    age: 3,
    about: 'Model bitch',
    image: 'https://images.pexels.com/photos/663573/pexels-photo-663573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // adopted: false
    },

    {
        name: 'Charlie',
        breed: 'Greyhound',
        age: 2,
        about: 'Drama Queen and escape artist',
        image: 'https://images.pexels.com/photos/11608986/pexels-photo-11608986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        // adopted: false
        },
        {
            name: 'Fred',
            breed: 'Shiba/Jack mix',
            age: 4,
            about: 'Loves other dogs',
            image: 'https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            // adopted: false
            },
            {
                name: 'Barkimedes',
                breed:'Lhasa Apso',
                age: 9,
                about: 'Some sort of wizard',
                image: 'https://images.pexels.com/photos/12800452/pexels-photo-12800452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                name: 'Fuzzy Osbourne',
                breed:'Jack Russell',
                age: 10,
                about: 'Bat eater',
                image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg'
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



