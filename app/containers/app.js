import React, { Component, View } from 'react-native'
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'

import Launch from '../components/launch'
import Home from '../components/home'

export default class App extends React.Component {
  render(){
    return (
      <View style={{flex:1}}>
        <Router>
            <Route name="launch" component={Launch} initial={true}/>
            <Route name="home" component={Home} type="replace"/>
        </Router>
      </View>
    )
  }
}
