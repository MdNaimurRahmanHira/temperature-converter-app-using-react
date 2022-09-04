import React, { Component } from "react";

export default class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocal } = this.props; // ekhane props theke local and change props ta nilam. Then tader notun name dilam
    const { change: nextChange, locale: newLocal } = nextProps; // ekhane ai function tar akta undifined argument theke akta
    //function nilam jar moddheo propsgula thake kintu reference alada thakbe

    // jodi ager props er reference and new props er reference same hoi taile false return korbe ar render hobena. Else render hobe
    if (currentChange === nextChange && currentLocal === newLocal) {
      return false;
    }
    return true;
  }

  render() {
    
    const { change, locale } = this.props;
    return (
      <>
        <button onClick={change}>
          {locale === "bn-bd" ? "এখানে ক্লিক করুন" : "Click here"}
        </button>
      </>
    );
  }
}
