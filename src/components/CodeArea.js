import React, { Component } from 'react'
import AceEditor from "react-ace";
import Console from './Console';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-nord_dark";
import '../App.css';

//* initialize values here so that the editorValue string does not break
// let col = 6;
// let row = 3;
class CodeArea extends Component {
   


    editorValue = `function moveScroll(row, col){
    const scroll = document.querySelector('.story-img');

    const inventory = document.querySelector('.inventory');

    scroll.classList.remove('.story-img');
    
    
    let style = document.createElement('style');
    style.type = 'text/css';
    
    if (col && row){

        style.innerHTML = 
            \`#scroll {
                grid-column-start: \${col};
                grid-row-start: \${row};
            }\`;
        document.getElementsByTagName('head')[0].appendChild(style);
        
        scroll.id = 'scroll';
        
        inventory.insertAdjacentElement('beforeEnd', scroll);
    }  
}`;

    render() {

        function onChange(newValue) {
            try {
                const userInput = new Function(newValue);

                try {
                    const results = userInput();
                    if(results){
                        console.log(results);
                    }
                    this.forceUpdate()
                    window.location.reload();
                }
                catch(err){

                }
            }
            catch(err){

            }
        }

        function onLoad(editor) {
            editor.getSession().setUseWrapMode(true);
        }

        return (
            <div className="code-area">
            <AceEditor
                mode="javascript"
                theme="nord_dark"
                value={this.editorValue}
                onChange={onChange}
                onLoad={onLoad}
                name="UNIQUE_ID_OF_DIV"
                width="auto"
                height="80%"
                showPrintMargin={false}
                fontSize="14px"
                    editorProps={{
                        $blockScrolling: Infinity }}
            />
            <Console />
            </div>
        )
    }
}

export default CodeArea;