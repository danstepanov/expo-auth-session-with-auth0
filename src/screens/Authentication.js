import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

const Authentication = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Press Me to Authenticate</Text>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    width: '60%'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});

export default Authentication;