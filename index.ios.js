/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import Main from './App/Components/Main';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

var AwesomeProject = React.createClass({

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: "Products"
        }}
      />
    )
  },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
