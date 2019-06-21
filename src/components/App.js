import React, { Component } from "react";
import "../styles/App.css";
import { ButtonGroup, Button, Well } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handlePlusFive = this.handlePlusFive.bind(this);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleMinusFive = this.handleMinusFive.bind(this);
  }

  handlePlusFive() {
    this.setState(prevState => ({ count: prevState.count + 5 }));
  }
  handlePlusOne() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  handleReset() {
    this.setState({ count: 0 });
  }
  handleMinusOne() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }
  handleMinusFive() {
    this.setState(prevState => ({ count: prevState.count - 5 }));
  }

  render() {
    return (
      <div className="clicker">
        <Well>
          <div>{this.state.count}</div>
        </Well>

        <ButtonGroup>
          <div className="clicker-button-panel">
            <Button bsStyle="success" onClick={this.handlePlusFive}>
              + 5
            </Button>
            <Button bsStyle="success" onClick={this.handlePlusOne}>
              + 1
            </Button>
            <Button bsStyle="danger" onClick={this.handleReset}>
              Reset
            </Button>
            <Button bsStyle="warning" onClick={this.handleMinusOne}>
              - 1
            </Button>
            <Button bsStyle="warning" onClick={this.handleMinusFive}>
              - 5
            </Button>
          </div>
        </ButtonGroup>
      </div>
    );
  }
}

export default App;
