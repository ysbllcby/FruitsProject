const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry no name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Peach",
    rating: 10,
    review: "Pretty solid as a fruit."
});

// fruit.save();

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
});

const mango = new Fruit({
    name: "Mango",
    rating: 8,
    review: "Great fruit"
});

mango.save();

const Person = mongoose.model("Person", peopleSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

person.save();

async function updateOne() {
    await Person.updateOne({ name: "John"}, {favoriteFruit: mango})
}

updateOne();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 10,
//     review: "The best fruit!"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 10,
//     review: "The best fruit!"
// });

// Fruit.insertMany([kiwi, orange, banana]);

// Fruit.find().then(function (fruits) {
//     fruits.forEach(function(fruit) {
//         console.log(fruit.name);
//         mongoose.connection.close();
//     })
// }) .catch(function (err) {
//         console.log(err);
// });

// async function updatingFruit() {
//     await Fruit.updateOne({_id: "645556eac1895ec74393e53e"}, {rating: 7}).then(() => {
//         console.log("Updated successfully");
//         mongoose.connection.close();
//     })
// };
 
// updatingFruit();

// async function deletingFruit() {
//     await Fruit.deleteOne({_id: "6455727c5dff0e36517e7e95"}).then(() => {
//         console.log("Deleted successfully");
//         mongoose.connection.close();
//     })
// };
 
// deletingFruit();

// async function deleteMany() {
//     await Person.deleteMany( {age: "37"}).then(() => {
//         console.log("Deleted successfully");
//         mongoose.connection.close();
//     });
// };

// deleteMany();