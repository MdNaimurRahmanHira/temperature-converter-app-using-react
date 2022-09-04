import React, { Component } from "react";
import Button from "./Button";

export class Clock extends Component {
  state = { date: new Date(), locale: "bn-bd" };

  // the function below runs after the function rendered fo the first time.
  componentDidMount() {
    setInterval(() => {
      this.clocktimer = this.setState({ date: new Date() });
    }, 1000);
  }

  // the func below runs when the func is going to be unmount. like when we navigate to anohter state
  componentWillUnmount() {
    clearInterval(this.clocktimer);
  }

  handleClick = () => {
    if (this.state.locale === "bn-bd")
      this.setState({
        locale: "en-us",
      });
    else {
      this.setState({
        locale: "bn-bd",
      });
    }
  };

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h2>{date.toLocaleTimeString(locale)}</h2>
        <Button change={this.handleClick} locale={locale} />
      </div>
    );
  }
}

export default Clock;
