import { useState, useEffect } from "react";
import "./App.css";
import listArr from "./data";
import ItemDisplay from "./components/ItemDisplay";
import "./style.css";

function App() {
  //setting up use state, states initial value is the array of groceries
  const [grList, setGrList] = useState(listArr);
  const addItem = (e) => {
    e.preventDefault();
    setGrList(
      grList.concat([
        {
          item: document.querySelector('input[name="item"]').value,
          brand: document.querySelector('input[name="brand"]').value,
          units: document.querySelector('input[name="units"]').value,
          quantity: document.querySelector('input[name="quantity"]').value,
          isPurchased: false,
        },
      ])
    );
    console.log(grList);
  };
  return (
    <div className="App">
      {/* <Form/> */}
      <h1 className="page-title">My Grocery List</h1>
      <form onSubmit={addItem}>
        <h3>Add an Item to Your List</h3>
        <p>Item:</p> <input type="text" name="item"></input> <br />
        <p>Brand:</p> <input type="text" name="brand"></input>
        <br />
        <p>Units:</p> <input type="text" name="units"></input>
        <br />
        <p>Quantity:</p> <input type="number" name="quantity"></input>
        <br />
        <input type="submit" value="submit"></input>
      </form>

      <section className="items">
        {grList.map((ele, idx) => {
          return !ele.isPurchased && <ItemDisplay {...ele} key={idx} />;
        })}
      </section>
    </div>
  );
}

export default App;
