import images from "./shared/imgs";

const Curry = {
  environment: images.EnvHiro,
  inventorySize: 4,
  cook: {
    unlit: images.Pot,
    lit: images.PotLit,
    x: "618px",
    y: "273px",
    width: "185px",
  },
  winningRecipe: [images.Apple, images.Carrot, images.Potato, images.Curry],
  winMsg:
    "Hiro is saved! While eating this dish, he fought the zombie contagion as he recollected the warm memories of his childhood. Great job using up leftover ingredients before they went bad!",
  failMsg:
    "That’s an interesting combination of food ingredients, but this doesn’t seem to match Hiro's mom’s recipe. He is unfortunately still a zombie. But hey, at least he got nutrients to last him longer, increasing his chances to return to the human form!",
  character: {
    name: "Hiro",
    human: images.HiroHuman,
    halfZombie: images.HiroHalfZombie,
    zombie: images.HiroZombie,
    x: "280px",
    y: "250px",
  },
  textList: [
    "Oh no! Our friend Hiro turned into a zombie!",
    "A curry stew might be the cure to heal Hiro and remind him of his loved ones in the human world… When he eats it, he’s reminded of the one cooked by his mother as a child. His heart warms up every time he eats this delicious meal.",
    "Which ingredients would make a curry stew? You only have one chance to make this dish right so choose wisely!",
  ],
  storage: [
    {
      name: "fridge",
      open: images.CurryFridgeOpen,
      closed: images.CurryFridge,
      x: "-10px",
      y: "63px",
      width: "400px",
      ingredients: ["apple"],
    },
    {
      name: "lower_cabinet",
      open: images.CurryLowerCabinetOpen,
      closed: images.CurryLowerCabinet,
      x: "775px",
      y: "347px",
      width: "400px",
      ingredients: ["potato"],
    },
    {
      name: "sink",
      open: images.CurrySinkOpen,
      closed: images.CurrySink,
      x: "460px",
      y: "229px",
      width: "412px",
      ingredients: ["curry"],
    },
    {
      name: "upper_cabinet",
      open: images.CurryUpperCabinetOpen,
      closed: images.CurryUpperCabinet,
      x: "477px",
      y: "44px",
      width: "340px",
      ingredients: ["carrot"],
    },
  ],
  ingredients: [
    {
      name: "apple",
      image: images.Apple,
      imageMag: images.AppleMag,
      x: "100px",
      y: "185px",
      title: "A few leftover slices of apple",
      text: "Looks a bit brown, but perfectly safe to eat! It's known to brighten certain dishes.",
    },
    {
      name: "potato",
      image: images.Potato,
      imageMag: images.Potato,
      x: "870px",
      y: "426px",
      title: "An old potato",
      text: "This potato has been there for a while. But it hasn't sprouted yet and it isn't mushy...if I chop and boil it, the potato will be safe to eat!",
    },
    {
      name: "curry",
      image: images.Curry,
      imageMag: images.Curry,

      x: "524px",
      y: "404px",
      title: "A forgotten packet of curry",
      text: "Popular in Asian cuisines, adds delicious spice and flavor to dishes. If left unopened, it can last a while. This one hasn't spoiled yet!",
    },
    {
      name: "carrot",
      image: images.Carrot,
      imageMag: images.Carrot,

      x: "599px",
      y: "127px",
      title: "Half a carrot..",
      text: "Looks like they only used part of it, there's still plenty left I can use to cook with!",
    },
    {
      name: "banana",
      image: images.Banana,
      imageMag: images.BananaMag,

      x: "720px",
      y: "246px",
      title: "A bruised banana",
      text: "We can cut off the brown parts and eat the rest.",
    },
  ],
};

export default Curry;
