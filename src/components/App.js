import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

  render() {
    return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        {/* By using a provider the context sys creates new  'context obj' every time
        we call it.which is not convinient*/}
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>

    </div>
    );
  }
}

export default App;
