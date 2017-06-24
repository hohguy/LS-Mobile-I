import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <StatusBarPaddingIOS />

        <View style={styles.topNav}>
          <Icon
            name="bars"
            size={30}
            style={styles.hamburger}
          />
          <View style={styles.searchBar}>
            <Icon
              name="search"
              size={20}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="search"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={styles.banner}>
          <Image
            source={{uri: 'https://www.w3.org/TR/SVG/images/coords/ViewBox.png'}}
            style={styles.image}
          />
          </View>
          <View style={styles.newsItem}>
            <Text style={styles.header}>Some Random Header</Text>
            <View style={styles.imageRow}>
              <Image
                source={{uri: 'https://www.w3.org/TR/SVG/images/coords/ViewBox.png'}}
                style={styles.newsImage}
              />
              <Image
                source={{uri: 'https://www.w3.org/TR/SVG/images/coords/ViewBox.png'}}
                style={styles.newsImage}
              />
              </View>
            <Text style={styles.newsBlurb}>This is a bunch of smaller text that is giving information about the two images up above.
                You might see this kind of a design on a news site.</Text>
              </View>
            <View style={styles.newsItem}>
              <Text style={styles.header}>Some Random Header</Text>
              <View style={styles.imageRow}>
                <Image
                  source={{uri: 'https://www.w3.org/TR/SVG/images/coords/ViewBox.png'}}
                  style={styles.newsImage}
                />
                <Image
                  source={{uri: 'https://www.w3.org/TR/SVG/images/coords/ViewBox.png'}}
                  style={styles.newsImage}
                />
                </View>
              <Text style={styles.newsBlurb}>This is a bunch of smaller text that is giving information about the two images up above.
                  You might see this kind of a design on a news site.</Text>
              </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // add padding for android status bar
    paddingTop: (Platform.OS === 'android') ? 10 : 0,
  },
  hamburger: {
    color: 'black',
  },
  topNav: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 5,
    backgroundColor: '#fff',
    borderColor: "black",
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    paddingLeft: 5,
    paddingRight: 10,
    color: '#000',
  },
  input: {
    flex: 1,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    alignItems: 'baseline',
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingTop: 5,
  },
  image: {
    justifyContent: 'center',
    width: 350,
    height: 150,
    resizeMode: 'stretch',
    backgroundColor: 'transparent',
  },
  newsItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 5,
  },
  header: {
    fontSize: 25,
    textAlign: 'left',
    marginLeft: 2,
    marginRight: 2,
  },
  imageRow:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newsImage: {
    width: 160,
    height: 75,
    resizeMode: 'stretch',
    backgroundColor: 'transparent',
  },
  newsBlurb: {
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'left',
    fontSize: 13,
    justifyContent: 'space-around',
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 2,
    marginRight: 2,
  }
});

Expo.registerRootComponent(App);
