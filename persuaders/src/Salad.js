import images from "./shared/imgs";
import Pizza from "./Pizza.js";

const Salad = {
  name: "salad",
  environment: images.EnvMatt,
  inventorySize: 6,
  recipe: images.SaladRecipe,
  reminder: "Reminder: greens, something sweet, and savory. Dressing: sweet, sour and smooth",
  cook: {
    unlit: images.Bowl,
    lit: images.BowlLit,
    top: images.BowlTop,
    x: "618px",
    y: "213px",
    width: "105px",
    leftMin: 300,
    leftMax: 650,
    topMin: -550,
    topMax: -300,
  },
  winningRecipe: [
    images.Spinach,
    images.Eggs,
    images.Kiwi,
    images.Oil,
    images.Vinegar,
    images.Honey,
  ],
  winMsg:
    "Yay! Matt is returning to the human form with your help. You are a natural at making salads using the ingredients found in the house!",
  failMsg:
    "Uh oh… crouton sounds yummy, but unfortunately this recipe doesn’t bring back human Matt. Matt the Zombie will still be roaming around in this city. (psst… Try save him again next time you encounter him)",

  character: {
    name: "Matt",
    human: images.MattHuman,
    halfZombie: images.MattHalfZombie,
    zombie: images.MattZombie,
    x: "280px",
    y: "290px",
  },
  textList: [
    "Oh no! Our friend Matt also got infected! He used to make himself a refreshing salad whenever he was not well.",
    "Let’s see if we could save him with a salad recipe!  It needs greens, something sweet, and savory. Oh yea, it also needs a dressing to go with it. The dressing needs to be sweet, sour and smooth in taste on its own.",
    "Read carefully for the clues and select ingredients that can make this salad!",
  ],
  storage: [
    {
      name: "salad_fridge",
      open: images.SaladFridgeOpen,
      closed: images.SaladFridge,
      x: "0px",
      y: "165px",
      width: "290px",
      ingredients: ["eggs", "spinach"],
    },
    {
      name: "salad_cabinet",
      open: images.SaladCabinetOpen,
      closed: images.SaladCabinet,
      x: "475px",
      y: "62px",
      width: "164px",
      ingredients: ["oil", "vinegar"],
    },
    {
      name: "salad_sink",
      open: images.SaladSinkOpen,
      closed: images.SaladSink,
      x: "365px",
      y: "312px",
      width: "350px",
      ingredients: ["honey"],
    },
    {
      name: "salad_large_cabinet",
      open: images.SaladLargeCabinetOpen,
      closed: images.SaladLargeCabinet,
      x: "717px",
      y: "55px",
      width: "340px",
      ingredients: ["bread", "kiwi"],
    },
  ],
  ingredients: [
    {
      name: "bread",
      image: images.Bread,
      imageMag: images.Bread,

      x: "900px",
      y: "125px",
      title: "Some slices of bread",
      text: "This looks like a lot of work to make into a crouton, mabe not this one.",
    },
    {
      name: "eggs",
      image: images.Eggs,
      imageMag: images.Eggs,

      x: "170px",
      y: "440px",
      title: "A few eggs left in the carton",
      text: "They are expiring today but I can't eat this many right now! Ah, I can boil them to eat and save the rest in the fridge.",
    },
    {
      name: "honey",
      image: images.Honey,
      imageMag: images.Honey,

      x: "554px",
      y: "402px",
      title: "An old jar of honey",
      text: "Oh sweet honey, you never get old! I can definitely use some sugar.",
    },
    {
      name: "kiwi",
      image: images.Kiwi,
      imageMag: images.Kiwi,

      x: "799px",
      y: "386px",
      title: "A forgotten kiwi",
      text: "This was lying around but still good to eat!",
    },
    {
      name: "oil",
      image: images.Oil,
      imageMag: images.OilMag,
      x: "510px",
      y: "135px",
      title: "A bottle of oil",
      text: "Hasn't expired yet even though it's dusty on the outside. Can still be used!",
    },
    {
      name: "spinach",
      image: images.Spinach,
      imageMag: images.SpinachMag,

      x: "40px",
      y: "217px",
      title: "A bag of spinach",
      text: "These were in the ice box and still look fresh, haven't expired  yet. I can use this!",
    },
    {
      name: "vinegar",
      image: images.Vinegar,
      imageMag: images.Vinegar,

      x: "570px",
      y: "129px",
      title: "An old bottle of vinegar",
      text: "Due to its acidic nature, it never expires. This can come in handy!",
    },
  ],
  nextLevel: Pizza,
};

export default Salad;
