import React, { useState, useEffect } from 'react'
import AceEditor from "react-ace";
import Console from './Console';
// import { Hook, Console, Decode } from 'console-feed'
// import { Console, Hook, Unhook } from 'console-feed'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

import '../App.css';


function CodeArea() {
    // const [logs, setLogs] = useState([])

    // run once!
    // useEffect(() => {
    //     Hook(window.console, log => setLogs(currLogs => [...currLogs, log]), false)
    //     return () => Unhook(window.console)
    // }, [])

    const onChange = (newValue) => {
        try {
           
            const userInput = new Function(newValue);

            try {
                const results = userInput();
                if (results) {
                    // return <Console logs={this.state.logs} variant="dark" />

                    return <h1>hi</h1>

                    // console.log(results);
                }
                this.forceUpdate()
                window.location.reload();
            }
            catch (err) {

            }
        }
        catch (err) {

        }
    }

    const onLoad = (editor) => {
        editor.getSession().setUseWrapMode(true);
        editor.session.foldAll();
    }


    let editorValue =
`function log(message){
    const consoleDiv = document.getElementById('console');
    consoleDiv.innerHTML = \`\${ message } <br /> <br />\` ;
}

function validInput(row, col){
    if(!row || ! col){
        log('oops! you need to provide row and column numbers');
        return false;
    } 
    log('');

    const MAX_ROWS = 5;
    const MAX_COLS = 12;
    
    return row <= MAX_ROWS && col <= MAX_COLS;
}

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function moveItem(row, col){

    const item = document.querySelector('.story-img');

    const inventory = document.querySelector('.inventory');

    item.classList.remove('.story-img');


    if(validInput(row,col)){
        let style = document.createElement('style');
        style.type = 'text/css';

        const idFromClass = item.classList[1] + getRandomInt(1000);

        style.innerHTML = 
            \`#\${idFromClass} {
                grid-column-start: \${col};
                grid-row-start: \${row};
            }\`;

        document.getElementsByTagName('head')[0].appendChild(style);
        
        item.id = idFromClass;
        
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
            {/* <Console logs={logs} variant="dark" /> */}
        </div>
    )
}


// class CodeArea extends Component {

   



//     editorValue = 
// `function validInput(row, col){
//     if(!row || ! col) return false;

//     const MAX_ROWS = 5;
//     const MAX_COLS = 12;
    
//     return row <= MAX_ROWS && col <= MAX_COLS;
// }

// function getRandomInt(max){
//     return Math.floor(Math.random() * Math.floor(max));
// }

// function moveItem(row, col){

//     const item = document.querySelector('.story-img');

//     const inventory = document.querySelector('.inventory');

//     item.classList.remove('.story-img');


//     if(validInput(row,col)){
//         let style = document.createElement('style');
//         style.type = 'text/css';

//         const idFromClass = item.classList[1] + getRandomInt(1000);

//         style.innerHTML = 
//             \`#\${idFromClass} {
//                 grid-column-start: \${col};
//                 grid-row-start: \${row};
//             }\`;

//         document.getElementsByTagName('head')[0].appendChild(style);
        
//         item.id = idFromClass;
        
//         inventory.insertAdjacentElement('beforeEnd', item); 
//     }
    
// }`;

//     render() {

//         function onChange(newValue) {
//             try {
//                 const userInput = new Function(newValue);

//                 try {
//                     const results = userInput();
//                     if(results){
//                         // return <Console logs={this.state.logs} variant="dark" />

//                         return <h1>hi</h1>

//                         // console.log(results);
//                     }
//                     this.forceUpdate()
//                     window.location.reload();
//                 }
//                 catch(err){

//                 }
//             }
//             catch(err){

//             }
//         }

//         function onLoad(editor) {
//             editor.getSession().setUseWrapMode(true);
//             editor.session.foldAll();
//         }

//         return (
//             <div className="code-area">
//             <AceEditor
//                 mode="javascript"
//                 theme="dracula"
//                 value={this.editorValue}
//                 onChange={onChange}
//                 onLoad={onLoad}
//                 name="UNIQUE_ID_OF_DIV"
//                 width="auto"
//                 height="80%"
//                 showPrintMargin={false}
//                 fontSize="12px"
//                 editorProps={{
//                     $blockScrolling: Infinity }}
//                 setOptions={{
//                     enableBasicAutocompletion: true,
//                     enableLiveAutocompletion: true,
//                     enableSnippets: true
//                 }}
//             />    
//             </div>
//         )
//     }
// }

export default CodeArea;