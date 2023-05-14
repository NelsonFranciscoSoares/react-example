import React, { SyntheticEvent } from "react";
import { Props, State } from "./Props";
import { getExclamationMarks } from "./Helpers";

export class Hello extends React.Component<Props, State> {

    state = { currentEnthusiasm: this.props.enthusiasmLevel || 1}; 

    onIncrement = (event: SyntheticEvent) => {
      console.log(event);
      this.updateEnthusiasm(1);
    }

    onDecrement = (event: SyntheticEvent) => {
      console.log(event.target);
      this.updateEnthusiasm(-1);
    }

    render() {
      const {name} = this.props;

      if (this.state.currentEnthusiasm <= 0) {
          throw new Error("You could be a little more enthusiastic. :D");
      }
        
      return (
          <div className="hello">
            <div className="greeting">
              Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
            </div>
            <button onClick={this.onDecrement}>-</button>
            <button onClick={this.onIncrement}>+</button>
          </div>
        );
    }

    updateEnthusiasm(change: number) {
      this.setState((currentState) => {
        return { currentEnthusiasm: currentState.currentEnthusiasm + change };
      });
    }
}