import React from 'react';
import {Animated, StatusBar, StyleSheet} from 'react-native';
import Footer from './navigation/Footer.tsx';
import View = Animated.View;

const App = () => {
  return (
    <View style={styles.container}>
{/*     // <StatusBar />*/}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
