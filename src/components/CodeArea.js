import React, { Component } from 'react'
import AceEditor from "react-ace";
import Console from './Console';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-nord_dark";
import '../App.css';

class CodeArea extends Component {
    render() {

        function onChange(newValue) {
            console.log("change", newValue);
        }

        return (
            <div className="code-area">
                {/* <textarea className="my-ace"></textarea> */}
            <AceEditor
                mode="javascript"
                theme="nord_dark"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                // maxLines={Infinity}
                width="auto"
                height="70%"
                showPrintMargin={false}
                fontSize="16px"
                wrap={true}
                editorProps={{ $blockScrolling: Infinity }}
            />
            <Console />
            </div>
        )
    }
}

export default CodeArea;