const dbConnection = require('../config/mongoConnection');
const data = require('../data');
const posts = data.posts;
const animals = data.animals;
const likes = data.likes;

const main = async() => {
    const db = await dbConnection();
    await db.dropDatabase();

    const Mortimer = await animals.create('Mortimer', 'Giraffe');
    const Ace = await animals.create('Ace', 'Dog');
    const Alice = await animals.create('Alice', 'Cat');
const akku = await animals.create('akku','monkey');
const Ali = await animals.create('Ali', 'Cat');
const del = await animals.remove(Mortimer._id);
console.log(del);
    console.log('Done seeding database');

 const post_Mortimer = await posts.addPost("Don't ask me how the weather is up here", Mortimer._id, "It's only like a few feet higher than you. The weather isn't different. Stop harassing me.")
 const post_Ace = await posts.addPost("I am doing well", Ace._id, "shfauSfh sdighsdghs vsufhg dufghsiurdg sguiefhse sdfvsierw gh ")
  const post_Alice = await posts.addPost("Me too ", Alice._id, "hdvfu9se weyt80we nrygern eheg8r ge 8seygte ef8fywef n")
  const post_Ali = await posts.addPost("Me too ", Ali._id, "hdvfu9se weyt80we nrygern eheg8r ge 8seygte ef8fywef n")

  console.log('Done seeding database');
    await db.serverConfig.close();
};

main().catch(console.log);