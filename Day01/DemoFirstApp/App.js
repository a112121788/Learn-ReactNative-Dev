import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class CustomComponent extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    )
  }
}


export default class Demo extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', paddingTop: 40}}>
        <CustomComponent name="xxx"/>
        <CustomComponent name="yyy"/>
      </View>
    );
  }
}
