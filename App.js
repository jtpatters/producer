import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native'
import Amplify from 'aws-amplify';
//import config from './aws-exports';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

class App extends Component {
  state = {
    screen: 0
  }

  _render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('something')}>
          <Text>Something Happened</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallbutton}>
          <Text>View Stats</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderSomething() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('second')}>
          <Text>Positive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('second')}>
          <Text>Negative</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('second')}>
          <Text>Indifferent</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderSecond() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('third')}>
          <Text>Observation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('third')}>
          <Text>Discussion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('third')}>
          <Text>Proposal</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderThird() {
    return (
      <View style={styles.container}>
        <Text>Context</Text>
         <TextInput multiline="true"
          style={{ height: 180, width: 250, borderColor: 'gray', borderWidth: 1 }}
        />
        <TouchableOpacity style={styles.smallbutton} onPress={() => this.onPress('produce')}>
          <Text>Produce</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderProduced() {
    return (
      <View style={styles.container}>
         <Text>Event Produced</Text>
      </View>
    );
  }


  onPress = (state) => {
    this.setState({
      screen: state
    })
  }

  render() {
    if (this.state.screen == "something")
      return this._renderSomething()
    else if (this.state.screen == "second")
      return this._renderSecond()
    else if (this.state.screen == "third")
      return this._renderThird()
    else if (this.state.screen == "produce"){
      setTimeout(() => {this.setState({screen:0})}, 1000)
      return this._renderProduced()
    }else
      return this._render()
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 30,
    width: 250,
    marginBottom: 10
  },
  smallbutton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding:5,
    width: 250,
    marginBottom: 10
  }
})

export default App;
