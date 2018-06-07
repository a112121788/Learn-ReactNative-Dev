import React, {Component} from 'react';
import {Text, Image} from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <Image source={{uri: "https://www.baidu.com/img/xinshouye_1aa582c0b96d57852497a8bbc4345f15.png"}} style={{width: 200, height: 100}}></Image>
    );
  }
}
