const prime = require("./prime")

const constructorMethod = app => {
    app.use("/",prime);
}
module.exports = constructorMethod