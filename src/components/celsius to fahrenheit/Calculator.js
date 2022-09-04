import react, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import { converter, toCelsius, toFahrenheit } from "./lib/Converter";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "celsius",
  };

  onTemperature = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const fahrenheit = scale === 'celsius' ? converter(temperature , toCelsius) : temperature;
    const celsius = scale === 'farhenheit' ? converter(temperature , toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput
          scale="celsius"
          temperature={celsius}
          ontemperatureChange={this.onTemperature}
        />
        <TemperatureInput
          scale="farhenheit"
          temperature={fahrenheit}
          ontemperatureChange={this.onTemperature}
        />

        <BoilingVerdict celsius={temperature}/>
      </>
    );
  }
}
