const express = require("express")
const app     = express()
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars");
const configRoutes = require("./routes")
const cookieParser = require("cookie-parser");
const session = require("express-session");
var static = express.static(__dirname + "/public");
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser())
static = express.static(path.join(__dirname, '/public'))
app.use("/public",static)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(session({
    key:'AuthCookie',
    cookie: { maxAge: 60000 },
    secret: 'codeworkrsecret',
    saveUninitialized: false,
    resave: false
  }));
configRoutes(app)
app.listen(3000,()=>{
    console.log("We've now got a server! Your routes will be running on http://localhost:3000!!")
})