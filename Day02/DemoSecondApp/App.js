import React, {Component} from 'react';
import {Alert, AppRegistry, Text, TextInput, View} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => {
            this.setState({text});
            this.getMoviesFromApiAsync()
          }}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(`${responseJson.movies.length}`);
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

