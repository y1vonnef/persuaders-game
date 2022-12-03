import images from "./shared/imgs";

const Pizza = {
  environment: images.EnvRoommate,
  inventorySize: 4,
  cook: {
    unlit: images.Pot,
    lit: images.PotLit,
    x: "585px",
    y: "273px",
    width: "185px"
  },
  winningRecipe: [images.Takeout, images.Tomato, images.Dough, images.Cheese],
  character: {
    name: "Emma",
    human: images.EmmaHuman,
    halfZombie: images.EmmaHalfZombie,
    zombie: images.EmmaZombie,
    x: "320px",
    y: "120px",
  },
  textList: [
    "Oh no! Your roommate Emma  turned into a zombie!",
    "We have to save her by using the ingredients found in this room to make a pizza! You two used to loved making this together.",
    "Read the ingredients carefully. You only have one chance. Select the ones that can make a pizza!",
  ],
  storage: [
    {
      name: "fridge",
      open: images.PizzaFridgeOpen,
      closed: images.PizzaFridge,
      x: "30px",
      y: "172px",
      width: "300px",
      ingredients: ["pepperoni", "dough", "cheese"],
    },
    {
      name: "upper_cabinet",
      open: images.PizzaUpperCabinetOpen,
      closed: images.PizzaUpperCabinet,
      x: "30px",
      y: "30px",
      width: "300px",
      ingredients: ["tomato"],
    },
    {
      name: "sink",
      open: images.PizzaSinkOpen,
      closed: images.PizzaSink,
      x: "450px",
      y: "325px",
      width: "325px",
      ingredients: ["pumpkin"],
    },
    {
      name: "middle_cabinet",
      open: images.PizzaMiddleCabinetOpen,
      closed: images.PizzaMiddleCabinet,
      x: "520px",
      y: "30px",
      width: "200px",
      ingredients: ["takeout"],
    },
  ],
  ingredients: [
    {
      name: "cheese",
      image: images.Cheese,
      imageMag: images.Cheese,

      x: "100px",
      y: "200px",
      title: "A bag of shredded cheese",
      text: "Looks like this wasn't finished, I can use this!",
    },
    {
      name: "dough",
      image: images.Dough,
      imageMag: images.Dough,

      x: "80px",
      y: "400px",
      title: "An unused ball of pizza dough",
      text: "This is still fresh and okay to use!",
    },
    {
      name: "pumpkin",
      image: images.Pumpkin,
      imageMag: images.PumpkinMag,
      x: "524px",
      y: "404px",
      title: "Pumpkin",
      text: "Pumpkin's been here longer... not sure if we can eat it.",
    },
    {
      name: "tomato",
      image: images.Tomato,
      imageMag: images.Tomato,

      x: "220px",
      y: "35px",
      title: "An abandoned tomato",
      text: "Ooh looks like someone left this behind. It's still fresh and perfectly good to eat. Maybe make it into a sauce.",
    },
    {
      name: "takeout",
      image: images.Takeout,
      imageMag: images.Takeout,

      x: "620px",
      y: "140px",
      title: "Leftover Stir Fry",
      text: "Oh nice, there's a whole box of chicken stir fry that's still fresh enough to eat. It contains carrots, corn, green beans, and chicken! Let's see what we can do with it.",
    },
    {
      name: "pepperoni",
      image: images.Pepperoni,
      imageMag: images.PepperoniMag,
      x: "220px",
      y: "300px",
      title: "Pepperoni",
      text: "Oh no, this is so sad, the pepperoni has gone bad. We will have to find another way to add protein to our pizza.",
    },
  ],
};

export default Pizza;
