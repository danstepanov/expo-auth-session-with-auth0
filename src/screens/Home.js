import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
});

export default Home;