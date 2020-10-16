import React from 'react'
import InventoryGrid from './InventoryGrid';
import Level from './Level';
import '../App.css';

function GameContent({slots, levels, currentLevel, handleNextLevel}){
    const activeLevel = levels.filter(level => level.id === currentLevel)[0];

    function handleLevelButton(){
        handleNextLevel(currentLevel);
    }

    // console.log('in GameContent');
    return (
        <div className="content">
            <div className="top">

                <div className={activeLevel.done ? 'hide' : null}>
                    <Level className={activeLevel.done ? 'hide' : null} activeLevel={activeLevel} />
                </div>

                <div className={activeLevel.done ? null : 'hide'}>
                    <p><strong>You did it!</strong><br /> You can move the item to a new position, or move on to the next item</p><br />
                    <button className={activeLevel.done ? null : 'hide'} onClick={handleLevelButton}>Next</button>
                </div>
                
            </div>

            <div>
                <InventoryGrid slots={slots} />
            </div>

        </div>
    )
}


export default GameContent;