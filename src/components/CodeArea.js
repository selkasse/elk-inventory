import React from 'react'
import AceEditor from "react-ace";
import Console from './Console';
// import { Hook, Console, Decode } from 'console-feed'
// import { Console, Hook, Unhook } from 'console-feed'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

import '../App.css';


function CodeArea({onItemMove}) {


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
                }
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