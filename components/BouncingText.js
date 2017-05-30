import React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-vr';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 1.5,
    transform: [{translate: [0, 0.7, -3]}],
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 0.1,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'lightblue'
  }
});


class BouncingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.spring(this.state.bounceValue, {
      toValue: 2,
      friction: 0.5,
      tension: 4,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, { transform: [{ scale: this.state.bounceValue }]}]}>
          {this.props.theText}
        </Animated.Text>
      </View>
    );
  }
}

export default BouncingText;