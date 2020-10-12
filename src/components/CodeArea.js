import React, { useState, useEffect } from 'react'
import AceEditor from "react-ace";
import Console from './Console';
// import { Hook, Console, Decode } from 'console-feed'
// import { Console, Hook, Unhook } from 'console-feed'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

import '../App.css';


function CodeArea({onItemMove}) {

    //TODO: take state out of CodeArea and put it into App
    // * the state does not need to be held here
    // * rather, when the user inputs the moveItem() function,
    //*     CodeArea will update the state (slots) in App, via the useState hook


    // const initSlots = () => {
    //    setSlots([
    //        {
    //            row: 1,
    //            column: 1,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 2,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 3,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 4,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 5,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 6,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 7,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 8,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 9,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 10,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 11,
    //            status: 'empty'
    //        },
    //        {
    //            row: 1,
    //            column: 12,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 1,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 2,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 3,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 4,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 5,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 6,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 7,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 8,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 9,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 10,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 11,
    //            status: 'empty'
    //        },
    //        {
    //            row: 2,
    //            column: 12,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 1,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 2,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 3,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 4,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 5,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 6,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 7,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 8,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 9,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 10,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 11,
    //            status: 'empty'
    //        },
    //        {
    //            row: 3,
    //            column: 12,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 1,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 2,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 3,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 4,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 5,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 6,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 7,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 8,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 9,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 10,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 11,
    //            status: 'empty'
    //        },
    //        {
    //            row: 4,
    //            column: 12,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 1,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 2,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 3,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 4,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 5,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 6,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 7,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 8,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 9,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 10,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 11,
    //            status: 'empty'
    //        },
    //        {
    //            row: 5,
    //            column: 12,
    //            status: 'empty'
    //        }
    //    ])
    
    // }    

    // useEffect(() => {
    //     initSlots();
    // }, [])

    function handleItemMove(row, col) {
        console.log('in handleItemMOve in CodeArea.js');
        onItemMove(row,col);
    }

   

    const onChange = (newValue) => {
        // onItemMove(row,col);
        //* attempt to create a function from user input
        try {
           
            const userInput = new Function(newValue);

            //* attempt to run the user input
            try {
                userInput();
                const scroll = document.getElementById('scroll-1');
    
                if (scroll.style.gridColumnStart && scroll.style.gridRowStart) {
                   
                    console.log(scroll.style.gridColumnStart);
                    console.log(scroll.style.gridRowStart);
                    const userCols = scroll.style.gridColumnStart;
                    const userRows = scroll.style.gridRowStart;

                    // TODO: link this up as a prop/attribute in App.js
                    handleItemMove(userCols, userRows);

                    // this.setSlots(prevSlots => ({

                    //     slots: prevSlots.map(
                    //         slot => slot.column === userCols && slot.row === userRows ? { ...slot, status: 'occupied' } : slot
                    //     )

                    // }))

                    // setSlots([{
                    //     column: 1,
                    //     row: 1,
                    //     status: 'occupied'
                    // }])


                    // this.setSlots({slots: this.state.slots.map(slot => {
                    //     if(slot.column === userCols && slot.row === userRows){
                    //         slot.status = 'occupied';
                    //     }
                    // })})
                    

                }
               
                // this.forceUpdate()
                // window.location.reload();
            }
            catch (err) {

            }
        }
        catch (err) {

        }
    }

    const onLoad = (editor) => {
        editor.getSession().setUseWrapMode(true);
        editor.setOption('showLineNumbers', false);
        editor.session.foldAll();
    }


    let editorValue =
`function log(message){
    const consoleDiv = document.getElementById('console');
    consoleDiv.innerHTML = \`\${ message } <br /> <br />\` ;
}

function validInput(row, col){
    if(!row || ! col) return false;
    
    log('');

    const MAX_ROWS = 5;
    const MAX_COLS = 12;
    
    let validRow = row <= MAX_ROWS;
    let validCol = col <= MAX_COLS;

    if(!validRow){
        log(\`\${row} is outside the inventory row range\`);
    }
    if(!validCol){
        log(\`\${col} is outside the inventory column range\`);
    }
    return validRow && validCol;
}

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function moveItem(row, col){

    const item = document.querySelector('.story-img');

    const inventory = document.querySelector('.inventory');

    item.classList.remove('.story-img');


    if(validInput(row,col)){

        item.style.gridColumnStart = col;
        item.style.gridRowStart = row;
        
        inventory.insertAdjacentElement('beforeEnd', item); 
    }
    
}`;


    return (
        <div className="code-area">
            <AceEditor
                mode="javascript"
                theme="dracula"
                value={editorValue}
                onChange={onChange}
                onLoad={onLoad}
                name="UNIQUE_ID_OF_DIV"
                width="auto"
                height="100%"
                showPrintMargin={false}
                fontSize="12px"
                editorProps={{
                    $blockScrolling: Infinity
                }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true
                }}
            />

            <Console />
        </div>
    )
}


export default CodeArea;