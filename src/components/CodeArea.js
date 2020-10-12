import React, {useState, useRef, useEffect} from 'react'
import AceEditor from "react-ace";
import Console from './Console';
// import { Hook, Console, Decode } from 'console-feed'
// import { Console, Hook, Unhook } from 'console-feed'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

import '../App.css';

// const CodeArea = React.memo(function CodeArea({onItemMove}) {

    
// })

function CodeArea({onItemMove, onInputChange, input}) {

    const [scrollRow, setScrollRow] = useState(0);
    const [scrollCol, setScrollCol] = useState(0);

    function handleItemMove(row, col, itemID) {
        console.log('in handleItemMOve in CodeArea.js');
        onItemMove(row, col, itemID);
    }

    function handleInputChange(input){
        onInputChange(input);
    }

    //* get a reference to AceEditor so that onLoad can be called again upon re-render
    const editorReference = useRef(null);

    useEffect(()=> {
        console.log('editorReference: ' + editorReference.current.editor);
        onLoad(editorReference.current.editor);
    })



    const onChange = (newValue) => {
        // onItemMove(row,col);
        //* attempt to create a function from user input
        try {

            const userInput = new Function(newValue);

            //* attempt to run the user input
            try {
                const scroll = document.getElementById('scroll-1');
                userInput();

                if (scroll.style.gridColumnStart && scroll.style.gridRowStart) {

                    console.log(scroll.style.gridColumnStart);
                    console.log(scroll.style.gridRowStart);
                    const userCols = scroll.style.gridColumnStart;
                    const userRows = scroll.style.gridRowStart;
                    let changed = false;
                    if(userCols !== scrollCol) {
                        changed = true;
                        setScrollCol(userCols);

                    }
                    if(userRows !== scrollRow){
                        changed = true;
                        setScrollRow(userRows);
                    }

                    if(changed){
                        handleItemMove(userRows, userCols, scroll.id);
                        handleInputChange(newValue);
                    }

                    // TODO: link this up as a prop/attribute in App.js
                }
            }
            catch (err) {

            }
        }
        catch (err) {

        }
    }

    const onLoad = (editor) => {
        // let editorReference = createRef(editor);
        editor.getSession().setUseWrapMode(true);
        editor.setOption('showLineNumbers', false);
        editor.session.foldAll();

        var row = editor.session.getLength() - 1
        var column = editor.session.getLine(row).length // or simply Infinity
        editor.gotoLine(row + 1, column)
        // setEditorRef(editorReference);

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
                ref={editorReference}
                mode="javascript"
                theme="dracula"
                value={input ? input : editorValue}
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