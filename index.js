const express = require("express");
const app = express();

const PORT = 3000;

const members = [
    {
        id: 1,
        name: "John Doe",
        age: 10
        
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 15

    },
    {
        id: 3,
        name: "Simon",
        age: 20

    },
]

app.get("/showAllUser", (req, res) => {
    res.status(200).json(members);
})

app.get("/showUser/:userId", (req, res) => {
    const id = req.params.userId
    const user = members.filter (member => member.id === id);

    (user.length !== 0)? res.status(200).json(user): res.status(404).json({message : `user not found with id $ {id}`})
})


app.listen(PORT, () => {
    console.log(`This server is running on port http://localhost:${PORT}`)
})