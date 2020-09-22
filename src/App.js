import React from 'react';
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import './App.css';

function App() {
  function onChange(newValue) {
    console.log("change", newValue);
  }

  return (
    <div className="App">
      <header>
        Ace Editor
      </header>
      <p>
        Iceland bushwick mlkshk bicycle rights gluten-free disrupt meditation copper mug. Hashtag semiotics farm-to-table tumblr live-edge direct trade, hoodie bitters hexagon butcher squid flannel distillery af green juice. Prism messenger bag heirloom, leggings pug semiotics banh mi DIY chambray craft beer. Mustache selfies hella, polaroid put a bird on it kinfolk 3 wolf moon vinyl lyft mixtape af hell of schlitz.
      </p>
      <p>
        Art party humblebrag migas, polaroid organic air plant single-origin coffee direct trade listicle messenger bag everyday carry freegan. Live-edge biodiesel four loko paleo. Kogi plaid man bun, pinterest selvage +1 roof party occupy semiotics ramps migas. Pok pok authentic lumbersexual listicle, microdosing kombucha cornhole. Vexillologist adaptogen small batch migas twee. Irony williamsburg squid DIY artisan affogato. Pickled williamsburg sriracha food truck irony mlkshk, church-key etsy selfies DIY.
      </p>
      <p>
        Single-origin coffee distillery brunch irony, vice tumeric vinyl XOXO raw denim live-edge pok pok yuccie scenester. Pitchfork truffaut la croix, VHS tumeric kombucha readymade microdosing brunch man braid cold-pressed vaporware. Adaptogen green juice flannel, slow-carb echo park aesthetic occupy jianbing small batch prism salvia hammock. Ramps health goth meggings edison bulb succulents, literally cray slow-carb listicle. VHS franzen echo park flexitarian art party salvia lo-fi retro marfa try-hard you probably haven't heard of them. Street art dreamcatcher tousled af.
      </p>
      <AceEditor
        mode="javascript"
        theme="solarized_dark"
        onChange={onChange}
        className="my-ace"
        name="UNIQUE_ID_OF_DIV"
        // maxLines={Infinity}
        width="inherit"
        showPrintMargin={false}
        fontSize="20px"
        wrap={true}
        editorProps={{ $blockScrolling: Infinity }}
      />
    </div>
  );
}

export default App;
