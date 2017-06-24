import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
 } from 'react-native';
import { Constants } from 'expo';

class App extends React.Component {
  render() {
    let pic = {
    uri: 'https://www.w3.org/TR/SVG/images/coords/ViewBox.png'
  };
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Header</Text>
        <Image
          source={pic}
          style={styles.image} />

        <View style={styles.row}>
          <TouchableHighlight style={styles.buttonG} >
            <Text>Like</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} >
            <Text>Share</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} >
            <Text>Comment</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.comment}>Some User: A comment on the picture</Text>
        <Text style={styles.comment}>Another User: A comment on the picture</Text>
        <Text style={styles.comment}>And Another User: A comment on the picture</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  header: {
    padding: 10,
    fontSize: 42,
    textAlign: 'center',
  },
  image: {
    justifyContent: "space-around",
    height: 200,
    resizeMode: "contain",
  },
  comment: {
    justifyContent: "space-around",
    borderColor: "black",
    // borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingRight: 5,
    paddingLeft: 5,
  },
  buttonG: {
    backgroundColor: "cyan",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingRight: 5,
    paddingLeft: 5,
  },
});

Expo.registerRootComponent(App);
