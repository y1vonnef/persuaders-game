import images from "./shared/imgs";

const Curry = {
  environment: images.EnvHiro,
  inventorySize: 4,
  character: {
    name: "Hiro",
    human: images.HiroHuman,
    halfZombie: images.HiroHalfZombie,
    zombie: images.HiroZombie,
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
      x: "100px",
      y: "185px",
      title: "A few leftover slices of apple",
      text: "Looks a bit brown, but still perfectly safe to eat.",
    },
    {
      name: "potato",
      image: images.Potato,
      x: "870px",
      y: "426px",
      title: "An old potato",
      text: "This potato is a bit old, but hasn’t sprouted yet!",
    },
    {
      name: "curry",
      image: images.Curry,
      x: "524px",
      y: "404px",
      title: "A packet of curry",
      text: "Curry is great to have around to cook leftover produce with!",
    },
    {
      name: "carrot",
      image: images.Carrot,
      x: "599px",
      y: "127px",
      title: "Half a carrot..",
      text: "",
    },
    {
      name: "banana",
      image: images.Banana,
      x: "720px",
      y: "246px",
      title: "A bruised banana",
      text: "We can cut off the brown parts and eat the rest.",
    },
  ],
}

export default Curry;