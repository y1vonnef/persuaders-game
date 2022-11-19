import { react, Component } from "react";

export default class Ingredient extends Component {
  constructor(props) {
    this.state = {
      type: this.props.type,
      url: this.props.url,
      posX: this.props.posX,
      posY: this.props.posY,
    };
  }
}
