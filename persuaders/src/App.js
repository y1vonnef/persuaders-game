import React, { useState } from "react";
import "./App.css";
import images from "./shared/imgs";
import Ingredient from './Ingredient.js';
import Storage from './Storage.js';

function App() {
  const [collected, setCollected] = useState([]);
  const [cooking, setCooking] = useState(false);
  const [result, setResult] = useState("");
  const [recipe, setRecipe] = useState("");

  const [curryStorage] = React.useState([{
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
                                       }]);

  const [curryIngredients] = React.useState([{
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
                                             }]);

  const [ingredientsIn, setIngredients] = useState([]);

  const moveToPot = (ingredient) => {
    if (!ingredientsIn.includes(ingredient)) {
      let tempIngredients = [];
      tempIngredients = [...ingredientsIn];
      tempIngredients.push(ingredient);
      setIngredients(tempIngredients);
      console.log("ingredients in pot are " + ingredientsIn);
    }
  };

  const CookPopUp = () => {
    return (
      <>
        <div className="cauldron-cook">
          <img src={images.PotLit} />
          {ingredientsIn.map((item, index) => {
            return <div key={index}><img src={item} /></div>;
          })}
          <div className="inventory-container">
            {collected.map((item, index) => {
              return (
                <button
                  className="inventory"
                  key={index}
                  onClick={() => {
                    moveToPot(item);
                  }}
                >
                  <img src={item} />
                </button>
              );
            })}
          </div>
          {ingredientsIn.length === 4 ? (
            <button
              onClick={() => {
                giveResults();
              }}
            >
              Cook!
            </button>
          ) : null}
        </div>
      </>
    );
  };

  const giveResults = () => {
    if (
      collected.includes(images.Apple) &&
      collected.includes(images.Potato) &&
      collected.includes(images.Curry) &&
      collected.includes(images.Carrot)
    ) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  const ViewRecipe = () => {
    console.log(images.recipeImg);
    return <img class="center" id="recipe" src={images.Recipe} />;
  };

  const YouWon = () => {
    return (
      <div className="recipe-container">
        <p>The dish is very good and you didnt become a zombie!</p>
        <button
          onClick={() => {
            setRecipe(true);
          }}
        >
          View Recipe!
        </button>
      </div>
    );
  };

  const YouLost = () => {
    return (
      <div className="recipe-container">
        This is interesting! But we have never seen it before...
      </div>
    );
  };

  const Inventory = () => {
    return (
      <div className="inventory-container">
        <div className="inventory">
          {collected[0] !== undefined ? collected[0] : null}
        </div>
        <div className="inventory">
          {collected[1] !== undefined ? collected[1] : null}
        </div>
        <div className="inventory">
          {collected[2] !== undefined ? collected[2] : null}
        </div>
        <div className="inventory">
          {collected[3] !== undefined ? collected[3] : null}
        </div>
      </div>
    );
  };

  const storageClick = (name, ingredients) => {
    console.log(name);
    document.getElementById(name).style.display="none";
    document.getElementById(name + "_open").style.display="block";
    for (let i=0; i < ingredients.length; i++) {
        console.log(document.getElementById(ingredients[i]));
        document.getElementById(ingredients[i]).style.display="block";
    }
  }

  const openPopup = (name) => {
    document.getElementById(name + "_popup").style.display = "block";
  }

  const nevermind = (name) => {
    document.getElementById(name + "_popup").style.display = "none";
  }

  const take = (name, image) => {
    document.getElementById(name).style.display="none";
    let tempCollected = [...collected];
    if (tempCollected.length < 4 && !tempCollected.includes(image)) {
      tempCollected.push(image);
    }
    setCollected(tempCollected);
    nevermind(name);
  }

  const Cauldron = () => {
    if (collected.length !== 4) {
      return (
        <div className="cauldron">
          <img id="cauldron-img" src={images.Pot} />
        </div>
      );
    } else {
      return (
        <div
          className="lightup cauldron"
          onClick={() => {
            setCooking(true);
          }}
        >
          <img id="cauldron-img" src={images.PotLit} />
        </div>
      );
    }
  };

  return (
    <div>
        <img id="background-img" src={images.EnvHiro} />
        <div className="App">
          {/*
          <img id="background-img" src={images.EnvMatt} />
          <Storage name="fridge" open={images.FridgeOpen} closed={images.Fridge} x="180px" y="175px" width="290px" />
          <Storage name="cabinet" open={images.CabinetOpen} closed={images.Cabinet} x="650px" y="100px" width="180px" />
          <Storage name="kitchen_sink" open={images.KitchenSinkOpen} closed={images.KitchenSink} x="570px" y="332px" width="330px" />
          <Storage name="large_cabinet" open={images.LargeCabinetOpen} closed={images.LargeCabinet} x="900px" y="64px" width="340px" />
          */}
          <div className="inventory-container">
              <div className="inventory">
                {collected[0] !== undefined ? <img src={collected[0]} />  : null}
              </div>
              <div className="inventory">
                {collected[1] !== undefined ? <img src={collected[1]} /> : null}
              </div>
              <div className="inventory">
                {collected[2] !== undefined ? <img src={collected[2]} /> : null}
              </div>
              <div className="inventory">
                {collected[3] !== undefined ? <img src={collected[3]} /> : null}
              </div>
          </div>
          {curryStorage.map(
           (s, idx) => {
            return <Storage key={idx} name={s.name} open={s.open} closed={s.closed} x={s.x} y={s.y} width={s.width} storageClick={storageClick} ingredients={s.ingredients} />;
           }
          )}
          {curryIngredients.map(
           (i, idx) => {
            return <Ingredient key={i.name} name={i.name} image={i.image} x={i.x} y={i.y} openPopup={openPopup} nevermind={nevermind} take={take} title={i.title} text={i.text} />;
           }
          )}
          <Cauldron />
          {cooking === true ? <CookPopUp /> : null}
          {result === true ? <YouWon /> : result === false ? <YouLost /> : null}
          {recipe === true ? <ViewRecipe /> : null}
        </div>
    </div>
  );
}

export default App;
