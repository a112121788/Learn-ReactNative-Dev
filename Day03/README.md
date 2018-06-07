# 学习要点
- State
- Style
- Flex
- Layout Props
- Handling Text Input
- Handling Touches
- Using a ScrollView
- FlatList

## State
```js
import React, { Component } from 'react';
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
```
## Style
类似CSS，用JS写

## Flex

## Layout Props
<https://facebook.github.io/react-native/docs/layout-props.html>

