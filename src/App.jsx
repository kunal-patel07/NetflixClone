import React from 'react'
import Body from './components/Body'
import { Provider } from 'react-redux'
import AppStore from './utils/Appstore'
const App = () => { 
    return (
      <Provider store={AppStore}>
        <Body />
      </Provider>
    )
  }

export default App
