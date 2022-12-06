import React, { useContext, useState } from "react";
import "./App.css";
import images from "./shared/imgs";
import Ingredient from "./Ingredient.js";
import Storage from "./Storage.js";
import Character from "./Character.js";
import Story from "./Story.js";
import Pizza from "./Pizza.js";
import Salad from "./Salad.js";
import Curry from "./Curry.js";
import { LevelContextProvider } from "./level-context";
import LevelContext from "./level-context";
import Confetti from "react-confetti";

function App() {
  const [cooking, setCooking] = useState(false);

  const [result, setResult] = useState("");

  const [recipe, setRecipe] = useState(false);

  const [current, setCurrent] = useState(Curry);

  const [collected, setCollected] = useState([]);
  const [collectedObject, setCollectedObject] = useState([]);

  const [emptyInventory, setEmptyInventory] = useState(
    Array(current.inventorySize).fill(0)
  );

  const [characterStatus, setCharacterStatus] = useState("zombie");

  const [ingredientsIn, setIngredients] = useState([]);

  const [newLevel, setNewLevel] = useState(true);

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
          <img src={current.cook.top} style={{ paddingTop: "20px" }} />
          {ingredientsIn.map((item, index) => {
            return (
              <div className="cooking-positions" key={index}>
                <img
                  className="cooking-positions"
                  src={item}
                  style={{
                    left:
                      Math.random() *
                        (current.cook.leftMax - current.cook.leftMin) +
                      current.cook.leftMin,
                    top:
                      Math.random() *
                        (current.cook.topMax - current.cook.topMin) +
                      current.cook.topMin,
                  }}
                />
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
              className="cook-button"
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
    setNewLevel(false);
    setCooking(false);
    if (areEqual(collected, current.winningRecipe)) {
      setResult(true);
      setCharacterStatus("human");
    } else {
      setResult(false);
      setCharacterStatus("halfZombie");
    }
  };

  const YouLost = () => {
    return (
      <>
        <img
          className="character popup-character"
          src={current.character.halfZombie}
        />
        <div className="recipe-container ">
          {current.failMsg}
          <button
            className="cook-button"
            id="cook-inventory"
            onClick={() => {
              nextLevel();
            }}
          >
            Start Next Level!
          </button>
        </div>
      </>
    );
  };

  const YouWon = () => {
    return (
      <>
        <Confetti width={1100} height={782.217} />
        <img
          className="character popup-character"
          src={current.character.human}
        />
        <div className="recipe-container ">
          <p>{current.winMsg}</p>
          <button
            onClick={() => {
              setRecipe(true);
            }}
          >
            View Recipe!
          </button>
        </div>
      </>
    );
  };

  const ViewRecipe = () => {
    setResult(null);
    return (
      <>
        <img class="center" id="recipe" src={current.recipe} />
        <button
          className="cook-button"
          id="cook-inventory"
          onClick={() => {
            nextLevel();
          }}
        >
          Start Next Level!
        </button>
      </>
    );
  };

  function nextLevel() {
    if (current.nextLevel != "done") {
      setResult(null);
      setRecipe(false);
      setEmptyInventory(Array(current.nextLevel.inventorySize).fill(0));
      setCurrent(current.nextLevel);
      setCollected([]);
      setCollectedObject([]);
      setIngredients([]);
      setCharacterStatus("zombie");
      setNewLevel(true);
    }
  }

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
    document.getElementById(name + "_reinspect").style.display = "none";
  };

  const take = (name, image, imageMag, title, text) => {
    document.getElementById(name).style.display = "none";
    let tempCollected = [...collected];
    let tempCollectedObject = [...collectedObject];
    if (
      tempCollected.length < current.inventorySize &&
      !tempCollected.includes(image)
    ) {
      tempCollectedObject.push(name);
      tempCollected.push(image);
    }
    setCollectedObject(tempCollectedObject);
    setCollected(tempCollected);
    nevermind(name);
  };

  const Cauldron = () => {
    if (collected.length !== current.inventorySize) {
      return (
        <div
          className="cauldron"
          style={{ left: current.cook.x, top: current.cook.y }}
        >
          <img
            id="cauldron-img"
            src={current.cook.unlit}
            style={{ width: current.cook.width }}
          />
        </div>
      );
    } else {
      return (
        <div
          className="lightup cauldron"
          onClick={() => {
            setCooking(true);
          }}
          style={{ left: current.cook.x, top: current.cook.y }}
        >
          <img
            id="cauldron-img"
            src={current.cook.lit}
            style={{ width: current.cook.width }}
          />
        </div>
      );
    }
  };

  return (
    <LevelContextProvider>
      <div>
        <img id="background-img" src={current.environment} />
        <div className="App">
          {newLevel ? <Story textList={current.textList} /> : null}
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
                key={current.name + idx}
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
    </LevelContextProvider>
  );
}

export default App;
