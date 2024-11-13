import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from 'tailwindcss/colors';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View>a</View>
      <View>b</View>
      <View>c</View>
      <View>d</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1, height: 20, borderStyle: 'solid'},
  button: {backgroundColor: colors.black, height: 20},
});

export default Footer;
