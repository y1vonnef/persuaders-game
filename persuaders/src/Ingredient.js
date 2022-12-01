import React, { Component } from 'react';
import './App.css';

class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            image: this.props.image,
            x: this.props.x,
            y: this.props.y,
            collected: false
        };
    }

    render() {
        return (
            <div>
            <div id={this.props.name} className="ingredient" style={{left:this.props.x, top:this.props.y, display:'none'}}>
                <button className="ingredient" onClick={() => {this.props.openPopup(this.props.name)}} >
                    <img src={this.props.image} />
                </button>
            </div>
            <div id={this.props.name + "_popup"} className="center inspector">
                <img src={this.props.image} />
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <button
                  onClick={() => {this.props.nevermind(this.props.name)}}
                >
                  Nevermind
                </button>
                <button
                  onClick={() => {this.props.take(this.props.name, this.props.image)}}
                >
                  Take
                </button>
            </div>
            </div>
        )
    }
}

export default Ingredient