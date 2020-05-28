const axios =  require ("axios");
const dotenv = require("dotenv");
dotenv.config();

function BooksSearch(req, res) {
    
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.query.q+"&key="+process.env.GOOGLE_BOOKS_API_KEY+"&maxResults=5")
    .then(data => {
        const formattedBooks = data.data.items.map(item => {
            if(item.id && item.volumeInfo.title && item.volumeInfo.authors && item.volumeInfo.infoLink && item.volumeInfo.description && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) {
              const formattedItem = {
                  _id: item.id,
                  title: item.volumeInfo.title,
                  authors: item.volumeInfo.authors,
                  link: item.volumeInfo.infoLink,
                  description: item.volumeInfo.description,
                  image: item.volumeInfo.imageLinks.thumbnail
              }  
              return formattedItem;
            }
            return false;
        }) 
        console.log(formattedBooks);
        res.json(formattedBooks);
        console.log(data.data.items)
    })
};

module.exports = BooksSearch;