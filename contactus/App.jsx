import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContactUs from './ContactUs';

const App = () => {
  return (
    <View style={styles.container}>
      <ContactUs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283035',
  },
});

export default App;
