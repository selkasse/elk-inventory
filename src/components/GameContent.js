import React, { Component } from 'react'
import InventoryGrid from './InventoryGrid';
import '../App.css';


class GameContent extends Component {
    render() {
        return (
            <div className="content">
                <div className="top">
                    <p className="story">You found a muthafuckin scroll!</p><br />
                    <img className="story-img scroll" src="https://via.placeholder.com/150?text=2x2+scroll" alt="scroll" />
                </div>

                <div className="bottom">
                    <InventoryGrid />
                    <div className="help-text">
                        <p>Use the code editor to move the scroll into your inventory</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default GameContent;