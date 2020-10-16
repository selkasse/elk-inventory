import React, { useState } from "react";
import CodeArea from "./components/CodeArea";
import GameContent from "./components/GameContent";

function App() {
  const [slots, setSlots] = useState([
    {
      row: 1,
      column: 1,
      status: "empty",
    },
    {
      row: 1,
      column: 2,
      status: "empty",
    },
    {
      row: 1,
      column: 3,
      status: "empty",
    },
    {
      row: 1,
      column: 4,
      status: "empty",
    },
    {
      row: 1,
      column: 5,
      status: "empty",
    },
    {
      row: 1,
      column: 6,
      status: "empty",
    },
    {
      row: 1,
      column: 7,
      status: "empty",
    },
    {
      row: 1,
      column: 8,
      status: "empty",
    },
    {
      row: 1,
      column: 9,
      status: "empty",
    },
    {
      row: 1,
      column: 10,
      status: "empty",
    },
    {
      row: 1,
      column: 11,
      status: "empty",
    },
    {
      row: 1,
      column: 12,
      status: "empty",
    },
    {
      row: 2,
      column: 1,
      status: "empty",
    },
    {
      row: 2,
      column: 2,
      status: "empty",
    },
    {
      row: 2,
      column: 3,
      status: "empty",
    },
    {
      row: 2,
      column: 4,
      status: "empty",
    },
    {
      row: 2,
      column: 5,
      status: "empty",
    },
    {
      row: 2,
      column: 6,
      status: "empty",
    },
    {
      row: 2,
      column: 7,
      status: "empty",
    },
    {
      row: 2,
      column: 8,
      status: "empty",
    },
    {
      row: 2,
      column: 9,
      status: "empty",
    },
    {
      row: 2,
      column: 10,
      status: "empty",
    },
    {
      row: 2,
      column: 11,
      status: "empty",
    },
    {
      row: 2,
      column: 12,
      status: "empty",
    },
    {
      row: 3,
      column: 1,
      status: "empty",
    },
    {
      row: 3,
      column: 2,
      status: "empty",
    },
    {
      row: 3,
      column: 3,
      status: "empty",
    },
    {
      row: 3,
      column: 4,
      status: "empty",
    },
    {
      row: 3,
      column: 5,
      status: "empty",
    },
    {
      row: 3,
      column: 6,
      status: "empty",
    },
    {
      row: 3,
      column: 7,
      status: "empty",
    },
    {
      row: 3,
      column: 8,
      status: "empty",
    },
    {
      row: 3,
      column: 9,
      status: "empty",
    },
    {
      row: 3,
      column: 10,
      status: "empty",
    },
    {
      row: 3,
      column: 11,
      status: "empty",
    },
    {
      row: 3,
      column: 12,
      status: "empty",
    },
    {
      row: 4,
      column: 1,
      status: "empty",
    },
    {
      row: 4,
      column: 2,
      status: "empty",
    },
    {
      row: 4,
      column: 3,
      status: "empty",
    },
    {
      row: 4,
      column: 4,
      status: "empty",
    },
    {
      row: 4,
      column: 5,
      status: "empty",
    },
    {
      row: 4,
      column: 6,
      status: "empty",
    },
    {
      row: 4,
      column: 7,
      status: "empty",
    },
    {
      row: 4,
      column: 8,
      status: "empty",
    },
    {
      row: 4,
      column: 9,
      status: "empty",
    },
    {
      row: 4,
      column: 10,
      status: "empty",
    },
    {
      row: 4,
      column: 11,
      status: "empty",
    },
    {
      row: 4,
      column: 12,
      status: "empty",
    },
    {
      row: 5,
      column: 1,
      status: "empty",
    },
    {
      row: 5,
      column: 2,
      status: "empty",
    },
    {
      row: 5,
      column: 3,
      status: "empty",
    },
    {
      row: 5,
      column: 4,
      status: "empty",
    },
    {
      row: 5,
      column: 5,
      status: "empty",
    },
    {
      row: 5,
      column: 6,
      status: "empty",
    },
    {
      row: 5,
      column: 7,
      status: "empty",
    },
    {
      row: 5,
      column: 8,
      status: "empty",
    },
    {
      row: 5,
      column: 9,
      status: "empty",
    },
    {
      row: 5,
      column: 10,
      status: "empty",
    },
    {
      row: 5,
      column: 11,
      status: "empty",
    },
    {
      row: 5,
      column: 12,
      status: "empty",
    },
  ]);
  const [levels, setLevels] = useState([
    {
      id: 1,
      text: "You found a muthafuckin scroll!",
      imageID: "scroll-1",
      imageSource: "https://via.placeholder.com/150?text=scroll-1",
      done: false,
    },
    {
      id: 2,
      text: "You found another scroll!",
      imageID: "scroll-2",
      imageSource: "https://via.placeholder.com/150?text=scroll-2",
      done: false,
    },
  ]);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [input, setInput] = useState("");
  const [cursorColumn, setCursorColumn] = useState(0);
  const [cursorRow, setCursorRow] = useState(0);

  const moveItem = (row, col, itemID) => {
    const updatedSlots = slots.map((slot) => {
      if (slot.row.toString() === row && slot.column.toString() === col) {
        slot.status = itemID;
      } else {
        slot.status = "empty";
      }
      return slot;
    });
    setSlots(updatedSlots);
  };

  const handleInput = (input) => {
    setInput(input);
  };

  const storeCursor = (row, col) => {
    setCursorRow(row);
    setCursorColumn(col);
  };

  function incrementLevel(level) {
    setCurrentLevel(level + 1);
    setInput("");
  }

  const markLevelComplete = (id) => {
    console.log(id);
    const updatedLevels = levels.map((level) => {
      if (level.id === id) {
        level.done = true;
      }
      return level;
    });

    setLevels(updatedLevels);
    console.log(levels);
  };

  return (
    <div className="App">
      <CodeArea
        onItemMove={moveItem}
        onInputChange={handleInput}
        onCursorSave={storeCursor}
        input={input}
        cursorRow={cursorRow}
        cursorColumn={cursorColumn}
        currentLevel={currentLevel}
        onLevelComplete={markLevelComplete}
      />
      <GameContent
        slots={slots}
        levels={levels}
        currentLevel={currentLevel}
        handleNextLevel={incrementLevel}
      />
    </div>
  );
}

export default App;
