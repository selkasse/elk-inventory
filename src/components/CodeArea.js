import React, { Component } from 'react'
import AceEditor from "react-ace";
import Console from './Console';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-nord_dark";
import '../App.css';

class CodeArea extends Component {

    editorValue = `function moveScroll(){
    const scroll = document.querySelector('.story-img');
    const inventory = document.querySelector('.inventory');
    scroll.classList.remove('.story-img');
    
    
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 
        \`#scroll {
            grid-column-start: 6;
            grid-row-start: 3;
        }\`;
    document.getElementsByTagName('head')[0].appendChild(style);
    
    scroll.id = 'scroll';
    
    inventory.insertAdjacentElement('beforeEnd', scroll);
    
    
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
                height="70%"
                showPrintMargin={false}
                fontSize="16px"
                    editorProps={{
                        $blockScrolling: Infinity }}
            />
            <Console />
            </div>
        )
    }
}

export default CodeArea;