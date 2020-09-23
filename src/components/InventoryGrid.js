import React, { Component } from 'react'
import InventoryCell from './InventoryCell';

class InventoryGrid extends Component {
    render() {
        const cells = Array(60).fill('');
        return (
            <div className='inventory'>
                {/* <img id="scroll" src="https://via.placeholder.com/100?text=2x2+scroll" alt="scroll" /> */}


                {/* // * First row */}
                {/* <div className='img'></div>
                <div className='img'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div> */}
                {/* // * Second Row */}
                {/* <div className='img'></div>
                <div className='img'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div> */}
                {/* // * Third Row */}
                {/* <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div> */}
                {/* // * Fourth Row */}
                {/* <div className='img'></div>
                <div className='img'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div> */}
                {/* // * Fifth Row */}
                {/* <div className='img'></div>
                <div className='img'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='cell'></div> */}


            </div>
            
        )
    }
}

export default InventoryGrid;