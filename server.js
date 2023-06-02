//Initialize express
const express = require("express")
const app = express()

//Give a path for folder to serve
app.use(express.static('public'));

//Initialise EJS Engine for views
app.set('view engine', 'ejs')



const names = ["Fede","Sara","Luca"]


// Define your routes
app.get('/', (req, res) => {

    let random = Math.floor(Math.random() * 3)
    res.render("index", { test: names[random]})
  });


app.get('/users', (req, res) => {
    res.render("users")
})




  
  
  // Start the server
  app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
  });