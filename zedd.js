var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var port = 8080;
var dbURL = 'mongodb+srv://omar99:<bmHGO0TOIumaKUhB>@zedd.ausytq6.mongodb.net/z';
var Search = document.getElementById("Search");
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('modal3');
var publicFolder = path.join(__dirname, 'public');
mongoose.connect('mongodb+srv://omar99:<bmHGO0TOIumaKUhB>@zedd.ausytq6.mongodb.net/z');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(publicFolder));


app.listen(port, () =>{
    console.log("app listening at port", port);
})

app.get('', (req, res) =>{
  res.render(publicFolder + '/form.ejs'); 
})


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById('#main').style.background='rgba(0, 0, 0, 0.37)';
  object.style.zIndex="100";}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";}


function opencart() {
  document.getElementById("Cart2").style.width = "100%";
  document.getElementById('#main').style.background='rgba(0, 0, 0, 0.37)';
  object.style.zIndex="105";}

function closecart() {
  document.getElementById("mySidebar").style.width = "0";}

 window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
}}

mongoose.connect(dbURL).then (() => {
  console.log("connected to the cloud")
}).catch((error) => {console,log(error)});




const card = new mongoose.Schema({
  productname: {type:String, required : True},
  discreption: {type:String, required : True},
  price: {type:String, required : True},
  image: {type:String, required : True},
})

const signin = new mongoose.Schema({
  username: {type:String, required : True},
  password: {type:String, required : True},
})

const profile = new mongoose.Schema({
  username: {type:String, required : True},
  discreption: {type:String, required : True},
  place: {type:stringify, required : True}
})

var User = mongoose.model('user',{
  email: {type:String, required : True},
  uname: {type:String, required : True},
  password: {type:String, required : True},
})



app.post('/user', (req, res)=>{
  var user = new User({uname: req.body.uname, email: req.body.email, password: req.body.psw});
  user.save().then(newUser =>{
    res.send("created new user");
    res.redirect('/user');
  }).catch(err =>{
    res.send("something went wrong");
    res.redirect('/user')
  })
})

window.onscroll = function() {myFunction()};



window.onclick = function(event) {
if (event.target == modal3) {
 modal3.style.display = "none";
}}



window.onclick = function(event) {
 if (event.target == modal2) {
     modal2.style.display = "none";
 }}



var back = document.getElementById("scrollback");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   back.style.display = "block";
 } else {
   back.style.display = "none";
 }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}