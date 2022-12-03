import React, { useState } from "react";
import "./App.css";
import images from "./shared/imgs";
import Ingredient from "./Ingredient.js";
import Storage from "./Storage.js";
import Character from "./Character.js";
import Story from "./Story.js";
import Pizza from "./Pizza.js";
import Salad from "./Salad.js";
import Curry from "./Curry.js";

// for each level we need to specify: 1-inventory size; 2- winning answer; 3- story text; 4 - win text; 5 - recipe; 6 - fail text; 7 - pot position (it's diff for each level); 8 - pot img (need to fix pot!)

const pizzaLevel = {
  inventorySize: 4,
  winningAnswer: ["dough", "cheese", "takeout", "tomato"],
  potX: "590px",
  potY: "273px",
};

function App() {
  const [cooking, setCooking] = useState(false);

  const [result, setResult] = useState("");

  const [recipe, setRecipe] = useState("");

  const [current, setCurrent] = useState(Salad);

  const [collected, setCollected] = useState([]);

  const [emptyInventory, setEmptyInventory] = useState(
    Array(current.inventorySize).fill(0)
  );

  const [characterStatus, setCharacterStatus] = useState("halfZombie");

  const [ingredientsIn, setIngredients] = useState([]);

  const moveToPot = (ingredient) => {
    if (!ingredientsIn.includes(ingredient)) {
      let tempIngredients = [];
      tempIngredients = [...ingredientsIn];
      tempIngredients.push(ingredient);
      setIngredients(tempIngredients);
    }
  };

  const CookPopUp = () => {
    return (
      <>
        <div className="cauldron-cook">
          <img src={current.cook.top} style={{paddingTop:"20px"}} />
          {ingredientsIn.map((item, index) => {
            return (
              <div className="cooking-positions" key={index}>
                <img className="cooking-positions" src={item} style={{ left: (Math.random() * (380 -140) + 140), top: (Math.random() * (-240 + 480) - 480) }} />
              </div>
            );
          })}
          <div className="cooking-inventory-container">
            {collected.map((item, index) => {
              return (
                <button
                  id="cook-inventory"
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
          {ingredientsIn.length === current.inventorySize ? (
            <button
              id="cook-inventory"
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

  function areEqual(array1, array2) {
    if (array1.length === array2.length) {
      return array1.every((element) => {
        if (array2.includes(element)) {
          return true;
        }

        return false;
      });
    }
  }

  const giveResults = () => {
    setCooking(false);
    if (areEqual(collected, current.winningRecipe)) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  const ViewRecipe = () => {
    return <img class="center" id="recipe" src={images.Recipe} />;
  };

  const YouWon = () => {
    return (
      <div className="recipe-container ">
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
      <div className="recipe-container ">
        This is interesting! But we have never seen it before...
      </div>
    );
  };

  const SetUp = () => {
    if (current === "curry") {
    } else if (current === "salad") {
    } else {
    }
  };

  const storageClick = (name, ingredients) => {
    if (document.getElementById(name + "_open").style.display != "block") {
        document.getElementById(name).style.display = "none";
        document.getElementById(name + "_open").style.display = "block";
        for (let i = 0; i < ingredients.length; i++) {
          document.getElementById(ingredients[i]).style.display = "block";
        }
    }
  };

  const openPopup = (name) => {
    document.getElementById(name + "_popup").style.display = "block";
  };

  const nevermind = (name) => {
    document.getElementById(name + "_popup").style.display = "none";
  };

  const take = (name, image) => {
    document.getElementById(name).style.display = "none";
    let tempCollected = [...collected];
    if (
      tempCollected.length < current.inventorySize &&
      !tempCollected.includes(image)
    ) {
      tempCollected.push(image);
    }
    setCollected(tempCollected);
    nevermind(name);
  };

  const Cauldron = () => {
    if (collected.length !== current.inventorySize) {
      return (
        <div className="cauldron" style={{ left: current.cook.x, top: current.cook.y }}>
          <img id="cauldron-img" src={current.cook.unlit} style={{ width: current.cook.width }} />
        </div>
      );
    } else {
      return (
        <div
          className="lightup cauldron"
          onClick={() => {
            setCooking(true);
          }}
          style={{ left: current.cook.x, top: current.cook.y}}
        >
          <img id="cauldron-img" src={current.cook.lit} style={{ width: current.cook.width }} />
        </div>
      );
    }
  };

  return (
    <div>
      <img id="background-img" src={current.environment} />
      <div className="App">
        <Story textList={current.textList} />
        <Character
          status={characterStatus}
          human={current.character.human}
          halfZombie={current.character.halfZombie}
          zombie={current.character.zombie}
          x={current.character.x}
          y={current.character.y}
        />
        <div className="inventory-container">
          {emptyInventory.map((item) => {
            return <div className="inventory"></div>;
          })}
          <div className="img-container">
            {collected.map((item, i) => {
              return (
                <img
                  className="inventory-item"
                  key={i}
                  src={collected[i] !== undefined ? collected[i] : null}
                />
              );
            })}
          </div>
        </div>
        {current.storage.map((s, idx) => {
          return (
            <Storage
              key={idx}
              name={s.name}
              open={s.open}
              closed={s.closed}
              x={s.x}
              y={s.y}
              width={s.width}
              storageClick={storageClick}
              ingredients={s.ingredients}
            />
          );
        })}
        {current.ingredients.map((i, idx) => {
          return (
            <Ingredient
              key={i.name}
              name={i.name}
              image={i.image}
              imageMag={i.imageMag}
              x={i.x}
              y={i.y}
              openPopup={openPopup}
              nevermind={nevermind}
              take={take}
              title={i.title}
              text={i.text}
            />
          );
        })}
        <Cauldron />
        {cooking === true ? <CookPopUp /> : null}
        {result === true ? <YouWon /> : result === false ? <YouLost /> : null}
        {recipe === true ? <ViewRecipe /> : null}
      </div>
    </div>
  );
}

export default App;
