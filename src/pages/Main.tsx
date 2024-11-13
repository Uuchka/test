import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from 'tailwindcss/colors';

const data = [
  {desc: 'aaa', pic: 'url'},
  {desc: 'aaa', pic: 'url'},
  {desc: 'aaa', pic: 'url'},
];

const Main = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index}>
          {' '}
          <Text>{item.desc}</Text>
          <View>{item.pic}</View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
});

export default Main;
