import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // to hook up context with our context obj

  // static contextType = LanguageContext;

  // contextType is reqd only if we need to ref it with 'this.context'
  // when using 'Consumer' to access the context obj no need to
  // declare contextType


  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderBtn(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {

    return (
      <ColorContext.Consumer>
        {(color) => this.renderBtn(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
