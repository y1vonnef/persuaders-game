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
  const [intro, setIntro] = useState(true);

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

  const ShowIntro = () => {
    return (
      <div>
        <img id="intro" src={images.Intro} />
        <div id="intro-text">
          <p>Aah it’s a zombie apocalypse!!!</p>
          <p>
            You are the lone survivor. One day a zombie gets a little too close
            and steals a bite of your dinner and you see them start to heal! You
            start to travel around the city, making zombies their favorite meals
            to turn them back to humans.
          </p>
        </div>
        <button
          className="start-next"
          onClick={() => {
            setIntro(false);
          }}
        >
          Start First Level!
        </button>
      </div>
    );
  };

  const Reminder = () => {
    if (current.reminder != false) {
      return <div id="reminder">{current.reminder}</div>;
    }
  };

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
            className="start-next"
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
              setResult(null);
            }}
          >
            View Recipe!
          </button>
        </div>
      </>
    );
  };

  const ViewRecipe = () => {
    return (
      <>
        <img className="center" id="recipe" src={current.recipe} />
        <button
          className="start-next"
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
        let ingredientImg;
        for (let j = 0; j < current.ingredients.length; j++) {
          console.log(current.ingredients[0].name);
          console.log(ingredients[0]);
          if (current.ingredients[j].name === ingredients[i]) {
            ingredientImg = current.ingredients[j].image;
          }
        }
        document.getElementById(ingredientImg).style.display = "block";
      }
    }
  };

  const openPopup = (name) => {
    document.getElementById(name + "_popup").style.display = "block";
  };

  const nevermind = (name) => {
    document.getElementById(name + "_popup").style.display = "none";
  };

  const openRemove = (name) => {
    console.log(name + "_remove");
    document.getElementById(name + "_remove").style.display = "block";
  };

  const closeRemove = (name) => {
    document.getElementById(name + "_remove").style.display = "none";
  };

  const putBack = (name) => {
    //take name/img src out of collected
    let index = collected.indexOf(name);
    console.log(collected);
    console.log(name);
    let tempCollected = [...collected];
    tempCollected.splice(index, 1);
    setCollected(tempCollected);
    document.getElementById(name + "_remove").style.display = "none";
    document.getElementById(name).style.display = "block";
  };

  const take = (name, image, imageMag, title, text) => {
    document.getElementById(image).style.display = "none";
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
      {intro === true ? (
        <ShowIntro />
      ) : (
        <div>
          <img id="background-img" src={current.environment} />
          <div className="App">
            {newLevel ? <Story textList={current.textList} /> : null}
            <Reminder />
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
                    <button
                      onClick={() => {
                        openRemove(item);
                      }}
                    >
                      <img
                        className="inventory-item"
                        key={i}
                        src={collected[i] !== undefined ? collected[i] : null}
                      />
                    </button>
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
                  putBack={putBack}
                  closeRemove={closeRemove}
                  take={take}
                  title={i.title}
                  text={i.text}
                />
              );
            })}
            <Cauldron />
            {cooking === true ? <CookPopUp /> : null}
            {result === true ? (
              <YouWon />
            ) : result === false ? (
              <YouLost />
            ) : null}
            {recipe === true ? <ViewRecipe /> : null}
          </div>
        </div>
      )}
    </LevelContextProvider>
  );
}

export default App;
