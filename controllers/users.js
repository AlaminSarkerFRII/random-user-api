const fs = require('fs');
// const  { uuidv4 } = require('uuid');
const date = new Date()

// rendom user 
module.exports.getRandomUser = (req, res) => {
  const userAll = JSON.parse(fs.readFileSync(__dirname + "/../public/users.json"))
  const randomNumber = Math.floor(Math.random()* userAll.length)
  res.send(userAll [randomNumber]);
  }

module.exports.getAllUsers = (req, res) => {
  const userAll = JSON.parse(fs.readFileSync(__dirname + "/../public/users.json"))
  res.send(userAll);
  }
// ====createUser=======
module.exports.createUser = (req, res) => {
  const userAll = JSON.parse(fs.readFileSync(__dirname + "/../public/users.json"))
    const user = req.body;
    const newUser = ({ ...user, id: date.getTime()});
    const addUser = [...userAll,newUser]
    fs.writeFileSync(__dirname + "/../public/users.json",JSON.stringify(addUser) )
    res.send(`the user ${user.name} has been added in database`);
  }
// ====getSingleUser=======
module.exports.getSingleUser = (req,res)=>{
    const {id} = req.params;
    const singleUser = users.find(user=>user.id === id)
    res.send(singleUser)
}
//==========deleteUser===========
module.exports.deleteUser = (req,res)=>{
  const userAll = JSON.parse(fs.readFileSync(__dirname + "/../public/users.json"))
    const {id} = req.params;
    const user = userAll.filter(user=>user.id != id)
    console.log(user)
    fs.writeFileSync(__dirname + "/../public/users.json",JSON.stringify(user) )
    res.send(`user with the id ${id} is deleted `)
}
//==========updateUser===========
module.exports.updateUser = (req,res)=>{
  const userAll = JSON.parse(fs.readFileSync(__dirname + "/../public/users.json"))
    const {id} = req.params;
    const {name,gender,contact,address,photoURL} = req.body
     const user = userAll.find(user=>user.id == id)
     if(name) user.name = name;
     if(gender) user.gender = gender;
     if(contact) user.contact = contact;
     if(photoURL) user.photoURL = photoURL;
     if(address) user.address = address;
     const others = userAll.filter(user=>user.id !=id)
     const updatedUser = [...others, user]
     fs.writeFileSync(__dirname + "/../public/users.json",JSON.stringify(updatedUser))
    res.send(`user with the id ${id} is updated `)
};


// update many 
module.exports.updateMany = (req,res)=>{
  const userAll = JSON.parse(fs.readFileSync(__dirname + "/../public/users.json"))
    const updates = req.body;
    const isArray = Array.isArray(updates);
    if (!isArray) {
        return res.status(400).send({
            success: false,
            message: 'Provide all user as array',
        })
    }
    let ids = [];
    let updatedData = [];
    updates.map(update =>{
      const findUser = userAll.find(user=>user.id == update.id)
      ids.push(update.id)
      updatedData.push({ ...findUser, ...update})
    })
     const others = userAll.filter(user=> !ids.includes(user.id))
     const updatedUser = [...others, ...updatedData]
     console.log(updatedUser)
     fs.writeFileSync(__dirname + "/../public/users.json",JSON.stringify(updatedUser))
    res.send(`many user data updated`)
};
