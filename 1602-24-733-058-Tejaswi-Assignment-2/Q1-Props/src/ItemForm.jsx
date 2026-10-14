
import { useState } from "react";

function ItemForm({ addItem }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (item.trim() !== "") {
      addItem(item);
      setItem("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ItemForm;
