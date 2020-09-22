import React, { Component } from 'react'
import InventoryGrid from './InventoryGrid';
import '../App.css';


class GameContent extends Component {
    render() {
        return (
            <div className="content">
                <p className="story">You found a muthafuckin scroll!</p>
                <br /> <br /> <br />
                <InventoryGrid />
                
            </div>
        )
    }
}

export default GameContent;