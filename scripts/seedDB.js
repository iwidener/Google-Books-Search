const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const googlebookSeed = [
    {
        author: "Suzanne Collins",
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
    },
    {
        author: "George Orwell",
        description: "Animal Farm is an allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, however, the rebellion is betrayed, and the farm ends up in a state as bad as it was before, under the dictatorship of a pig named Napoleon.",
        image: "",
        link: "https://www.google.com/books/edition/Animal_Farm/yDQJ6y2LSX8C?hl=en&sa=X&ved=2ahUKEwiTloHtotDpAhUGXK0KHSR0Cn0QiqUDMBd6BAgUEAc",
        title: "Animal Farm"
    }
];


db.Googlebook.remove({})
    .then(() => db.Googlebook.collection.insertMany(googlebookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });



