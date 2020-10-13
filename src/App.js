import React, { useState, useEffect } from 'react';
import CodeArea from './components/CodeArea';
import GameContent from './components/GameContent';



// const App = React.memo(function App() {

// })

function App() {  


  const [slots, setSlots] = useState(

    [
      {
        row: 1,
        column: 1,
        status: 'empty'
      },
      {
        row: 1,
        column: 2,
        status: 'empty'
      },
      {
        row: 1,
        column: 3,
        status: 'empty'
      },
      {
        row: 1,
        column: 4,
        status: 'empty'
      },
      {
        row: 1,
        column: 5,
        status: 'empty'
      },
      {
        row: 1,
        column: 6,
        status: 'empty'
      },
      {
        row: 1,
        column: 7,
        status: 'empty'
      },
      {
        row: 1,
        column: 8,
        status: 'empty'
      },
      {
        row: 1,
        column: 9,
        status: 'empty'
      },
      {
        row: 1,
        column: 10,
        status: 'empty'
      },
      {
        row: 1,
        column: 11,
        status: 'empty'
      },
      {
        row: 1,
        column: 12,
        status: 'empty'
      },
      {
        row: 2,
        column: 1,
        status: 'empty'
      },
      {
        row: 2,
        column: 2,
        status: 'empty'
      },
      {
        row: 2,
        column: 3,
        status: 'empty'
      },
      {
        row: 2,
        column: 4,
        status: 'empty'
      },
      {
        row: 2,
        column: 5,
        status: 'empty'
      },
      {
        row: 2,
        column: 6,
        status: 'empty'
      },
      {
        row: 2,
        column: 7,
        status: 'empty'
      },
      {
        row: 2,
        column: 8,
        status: 'empty'
      },
      {
        row: 2,
        column: 9,
        status: 'empty'
      },
      {
        row: 2,
        column: 10,
        status: 'empty'
      },
      {
        row: 2,
        column: 11,
        status: 'empty'
      },
      {
        row: 2,
        column: 12,
        status: 'empty'
      },
      {
        row: 3,
        column: 1,
        status: 'empty'
      },
      {
        row: 3,
        column: 2,
        status: 'empty'
      },
      {
        row: 3,
        column: 3,
        status: 'empty'
      },
      {
        row: 3,
        column: 4,
        status: 'empty'
      },
      {
        row: 3,
        column: 5,
        status: 'empty'
      },
      {
        row: 3,
        column: 6,
        status: 'empty'
      },
      {
        row: 3,
        column: 7,
        status: 'empty'
      },
      {
        row: 3,
        column: 8,
        status: 'empty'
      },
      {
        row: 3,
        column: 9,
        status: 'empty'
      },
      {
        row: 3,
        column: 10,
        status: 'empty'
      },
      {
        row: 3,
        column: 11,
        status: 'empty'
      },
      {
        row: 3,
        column: 12,
        status: 'empty'
      },
      {
        row: 4,
        column: 1,
        status: 'empty'
      },
      {
        row: 4,
        column: 2,
        status: 'empty'
      },
      {
        row: 4,
        column: 3,
        status: 'empty'
      },
      {
        row: 4,
        column: 4,
        status: 'empty'
      },
      {
        row: 4,
        column: 5,
        status: 'empty'
      },
      {
        row: 4,
        column: 6,
        status: 'empty'
      },
      {
        row: 4,
        column: 7,
        status: 'empty'
      },
      {
        row: 4,
        column: 8,
        status: 'empty'
      },
      {
        row: 4,
        column: 9,
        status: 'empty'
      },
      {
        row: 4,
        column: 10,
        status: 'empty'
      },
      {
        row: 4,
        column: 11,
        status: 'empty'
      },
      {
        row: 4,
        column: 12,
        status: 'empty'
      },
      {
        row: 5,
        column: 1,
        status: 'empty'
      },
      {
        row: 5,
        column: 2,
        status: 'empty'
      },
      {
        row: 5,
        column: 3,
        status: 'empty'
      },
      {
        row: 5,
        column: 4,
        status: 'empty'
      },
      {
        row: 5,
        column: 5,
        status: 'empty'
      },
      {
        row: 5,
        column: 6,
        status: 'empty'
      },
      {
        row: 5,
        column: 7,
        status: 'empty'
      },
      {
        row: 5,
        column: 8,
        status: 'empty'
      },
      {
        row: 5,
        column: 9,
        status: 'empty'
      },
      {
        row: 5,
        column: 10,
        status: 'empty'
      },
      {
        row: 5,
        column: 11,
        status: 'empty'
      },
      {
        row: 5,
        column: 12,
        status: 'empty'
      }
    ]
  );
  const [input, setInput] = useState("");
  const [cursorColumn, setCursorColumn] = useState(0)
  const [cursorRow, setCursorRow] = useState(0)


  const moveItem = (row, col, itemID) => {
    const updatedSlots = slots.map(slot => {
      if (slot.row.toString() === row && slot.column.toString() === col) {
        slot.status = itemID;
      }
      else {
        slot.status = 'empty';
      }
      return slot;
    });
    setSlots(updatedSlots);
  }

  const handleInput = (input) => {
    setInput(input);
  }

  const storeCursor = (row, col) => {
    setCursorRow(row);
    setCursorColumn(col);
  }


  return (
    <div className="App">

      <CodeArea 
        onItemMove={moveItem} 
        onInputChange={handleInput} 
        onCursorSave={storeCursor} 
        input={input}
        cursorRow={cursorRow}
        cursorColumn={cursorColumn}
      />
      <GameContent slots={slots}/>

    </div>
  );
}

export default App;
