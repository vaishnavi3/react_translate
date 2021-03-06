import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // to hook up context with our context obj
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
     );
  }
}

export default Field;
