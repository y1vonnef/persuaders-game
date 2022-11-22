import { react, useState } from "react";
import "./App.css";
import images from "./shared/imgs";

function App() {
  const [clicked, setClicked] = useState("");
  const [collected, setCollected] = useState([]);
  const [cooking, setCooking] = useState(false);
  const [result, setResult] = useState("");
  const appleTitle = "A few leftover slices of apple";
  const appleText = "Looks a bit brown, but still perfectly safe to eat.";
  const potatoTitle = "An old potato";
  const potatoText = "This potato is a bit old, but hasn’t sprouted yet!";
  const curryTitle = "A packet of curry";
  const curryText = "";
  const carrotTitle = "Half a carrot..";
  const carrotText = "";
  const bananaTitle = "A bruised banana";
  const bananaText = "";

  const Select = (item) => {
    let tempCollected = [...collected];
    if (tempCollected.length < 4 && !tempCollected.includes(item)) {
      tempCollected.push(item);
    }
    setCollected(tempCollected);
  };

  const Popup = (props) => {
    return (
      <div className="inspector">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button
          onClick={() => {
            Select(clicked);
          }}
        >
          Take
        </button>
      </div>
    );
  };

  const Apple = () => {
    return (
      <button
        className="ingredient"
        onClick={() => {
          updateClicked("apple");
          console.log("apple clicked " + clicked);
        }}
      >
        <img src={images.appleImg} />
      </button>
    );
  };

  const Potato = () => {
    return (
      <button
        className="ingredient"
        onClick={() => {
          updateClicked("potato");
        }}
      >
        <img src={images.potatoImg} />
      </button>
    );
  };

  const Curry = () => {
    return (
      <button
        className="ingredient"
        onClick={() => {
          updateClicked("curry");
        }}
      >
        <img src={images.curryImg} />
      </button>
    );
  };

  const Carrot = () => {
    return (
      <button
        className="ingredient"
        onClick={() => {
          updateClicked("carrot");
        }}
      >
        <img src={images.carrotImg} />
      </button>
    );
  };

  const Banana = () => {
    return (
      <button
        className="ingredient"
        onClick={() => {
          updateClicked("banana");
        }}
      >
        <img src={images.bananaImg} />
      </button>
    );
  };

  const Cauldron = () => {
    if (collected.length !== 4) {
      return (
        <div className="cauldron">
          <img src={images.potImg} />
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
          <img src={images.potLitImg} />
        </div>
      );
    }
  };

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
          {ingredientsIn.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
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
                {item}
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
      </>
    );
  };

  const giveResults = () => {
    if (
      collected.includes("apple") &&
      collected.includes("potato") &&
      collected.includes("curry") &&
      collected.includes("carrot")
    ) {
      setResult(true);
    } else if (
      collected.includes("banana") &&
      collected.includes("potato") &&
      collected.includes("curry") &&
      collected.includes("carrot")
    ) {
      setResult(false);
    }
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

  const updateClicked = (item) => {
    setClicked(item);
  };

  const YouWon = () => {
    return <div>The dish is very good and you didn't become a zombie!</div>;
  };

  const YouLost = () => {
    return <div>The dish is not good enough!</div>;
  };

  return (
    <div className="App">
      <Apple />
      <Potato />
      <Curry />
      <Carrot />
      <Banana />
      <Cauldron />
      <Inventory />
      {clicked == "apple" ? (
        <Popup title={appleTitle} text={appleText} />
      ) : clicked == "potato" ? (
        <Popup title={potatoTitle} text={potatoText} />
      ) : clicked == "curry" ? (
        <Popup title={curryTitle} text={curryText} />
      ) : clicked == "carrot" ? (
        <Popup title={carrotTitle} text={carrotText} />
      ) : clicked == "banana" ? (
        <Popup title={bananaTitle} text={bananaText} />
      ) : null}
      {cooking === true ? <CookPopUp /> : null}
      {result === true ? <YouWon /> : result === false ? <YouLost /> : null}
    </div>
  );
}

export default App;
