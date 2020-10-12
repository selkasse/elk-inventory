import React, { useState } from 'react';
import CodeArea from './components/CodeArea';
import GameContent from './components/GameContent';



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


  const onItemMove = (row, col) => {
    console.log(typeof row);
    const updatedSlots = slots.map(slot => {
      console.log(typeof slot.row);
      if(slot.row.toString() === row && slot.column.toString() === col){
        slot.status = 'occupied';
      }
      return slot;
    });
    setSlots(updatedSlots);
    
    

    
  }

  return (
    <div className="App">
      
      <CodeArea onItemMove={onItemMove}/>  
      {/* <GameContent slots={slots}/> */}
      <GameContent />
      
    </div>
  );
}

export default App;
