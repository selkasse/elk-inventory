import React, { Component } from 'react'
import InventoryGrid from './InventoryGrid';
import '../App.css';


class GameContent extends Component {
    render() {
        return (
            <div className="content">
                <div className="top">
                    <p className="story">You found a muthafuckin scroll!</p><br />
                    <img id="scroll-1" className="story-img scroll" src="https://via.placeholder.com/150?text=2x2+scroll" alt="scroll" />
                    <br /><br />
                    <p className="help-text">Use the code editor to move the scroll into your inventory</p>
                    {/* <div className="help-text">
                    </div> */}
                </div>

                <div className="bottom">
                    <InventoryGrid />
                </div>
                
            </div>
        )
    }
}

export default GameContent;