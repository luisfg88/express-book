const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const books = [];

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../views/index.html', {
    books
  }));
});

router.get('/new-entry',function(req,res){
  res.sendFile(path.join(__dirname,'../views/new-entry.html'));
});

router.post('/new-entry',function(req,res){
  const { title, author, image, description } = req.body;
  if (!title || !author || !image || !description) {
    res.status(400).send("Escribe todos los campos");
    return;
  }

  let newBook = {
    title,
    author, 
    image,
    description
  };

  books.push(newBook);
  res.send("received");
});

app.use('/', router);
app.listen(process.env.port);


module.exports = router;