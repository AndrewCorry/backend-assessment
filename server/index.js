const express = require("express");
const cors = require("cors");

const app = express();
let mNumber = 1
let mages = []

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req,res) =>{
  const fortunes = ["The wind is in your favor", "A new opprotunity will come soon", "You will suffer a tradgey on July 22, 2038"]
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})

app.get("/api/spells", (req, res) =>{
  console.log(req.params)
  console.log(req.body)
  
  let offSpell = document.querySelector('#off-spell')
  let defSpell = document.querySelector('#def-spell')
  let utiSpell = document.querySelector('#uti-spell')

  let spellObj ={
    offSpell: offSpell.value,
    defSpell: defSpell.value,
    utiSpell: utiSpell.value
  }
  console.log(req.params)
  res.status(200).send(spell)
})

app.get("/api/mage", (req,res)=>{
  let mage = req.body.
  console.log(mage)
})

app.delete("/api/delete", (req,res) =>{

})

app.put("/api/spells", (req,res) =>{
  
})


app.get("/api/magic", (req,res)=>{
  let magic = 'Fire!'
  if(mNumber%3 === 0){
   magic = 'Fire!'
  }
  if(mNumber%3 === 1){
   magic = 'Ice!'
    }
  if(mNumber%3 === 2){
   magic = 'Thunder!'
    }
  mNumber = mNumber +=1
  res.status(200).send(magic)
})

app.get("/api/beg/", (req,res)=>{
  let beg = "☠Please take pity on this student☠ He worked very hard but ran out of time (This button counts as a feature...)"
  res.status(200).send(beg)
})

// function createMage (mage){
//   const mPart = document.createElement('div')
//   mPart.innerHTML = 
//   `<p>${mage.mage}</p>`
//   `<p>${mage.offSpell}</p>`
//   `<p>${mage.defSpell}</p>`
//   `<p>${mage.utiSpell}</p>`
// }

app.listen(4000, () => console.log("Server running on 4000"));