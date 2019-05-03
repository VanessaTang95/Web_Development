//jshint esversion:6
const receipeList=[
{ title:"EggMush",
  ingredients:["mushroom","egg","butter"],
  instruction:["step1","step2","step3"]},
  {title:"Sloppy Joe",
   ingredients:["beef","ketch-up","onion","celery"],
   instruction:["one","two","three"]}
];
const receipeTitleList={
  "EggMush":"EggMush",
  "Sloppy Joe":"Sloppy Joe"
};

const addReceipe=function({title:title, ingredients:ingredients,instruction:instruction}){
    receipeTitleList[title]=title;
    receipeList.push({title:title, ingredients:ingredients,instruction:instruction});
};

const getReceipe=function(receipeName){
  for(let e of receipeList){
    if(e.title===receipeName){
      return e;
    }
  }
};


const receipes={
  receipeList,
  receipeTitleList,
  addReceipe,
  getReceipe
};

module.exports=receipes;
