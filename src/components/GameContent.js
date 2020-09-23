import React, { Component } from 'react'
import InventoryGrid from './InventoryGrid';
import '../App.css';


class GameContent extends Component {
    render() {
        return (
            <div className="content">
                <p className="story">You found a muthafuckin scroll!</p><br />
                <img className="story-img" src="https://via.placeholder.com/100?text=2x2+scroll" alt="scroll" />

                <br /> <br /> <br />
                <div>

                    <InventoryGrid />
                </div>
                
            </div>
        )
    }
}

export default GameContent;