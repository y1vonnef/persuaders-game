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
  const [collected, setCollected] = useState([]);

  const [cooking, setCooking] = useState(false);

  const [result, setResult] = useState("");

  const [recipe, setRecipe] = useState("");

  const [current, setCurrent] = useState(Salad);

  const [characterStatus, setCharacterStatus] = useState("halfZombie");

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
            return (
              <div key={index}>
                <img src={item} />
              </div>
            );
          })}
          <div className="cooking-inventory-container">
            {collected.map((item, index) => {
              return (
                <button id="cook-inventory"
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

  const SetUp = () => {
    if (current === "curry") {

    } else if (current === "salad") {

    } else {

    }
  };

  const storageClick = (name, ingredients) => {
    console.log(name);
    document.getElementById(name).style.display = "none";
    document.getElementById(name + "_open").style.display = "block";
    for (let i = 0; i < ingredients.length; i++) {
      console.log(document.getElementById(ingredients[i]));
      document.getElementById(ingredients[i]).style.display = "block";
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
    if (tempCollected.length < 4 && !tempCollected.includes(image)) {
      tempCollected.push(image);
    }
    setCollected(tempCollected);
    nevermind(name);
  };

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
        <img id="background-img" src={current.environment} />
        <div className="App">
          <Story textList={current.textList} />
          <Character
            status={characterStatus}
            human={current.character.human}
            halfZombie={current.character.halfZombie}
            zombie={current.character.zombie}
          />
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
