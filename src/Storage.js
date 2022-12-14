import React, { Component } from 'react';
import './App.css';

class Storage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            open: this.props.open,
            closed: this.props.closed,
            x: this.props.x,
            y: this.props.y,
            width: this.props.width,
            ingredients: this.props.ingredients,
            clicked: false
        };
    }

    render() {
        return (
            <div className="storage" style={{left:this.props.x, top:this.props.y}}>
                <button className="storage" onClick={() => this.props.storageClick(this.props.name, this.props.ingredients)}>
                    <img id={this.props.name} style={{width:this.props.width}} src={this.props.closed} />
                    <img id={this.props.name + "_open"} style={{width:this.props.width, display:"none"}} src={this.props.open} />
                </button>
            </div>
        )
    }
}

export default Storage