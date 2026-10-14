
import { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState(["Book", "Pen"]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Item Management</h2>
      <ItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
