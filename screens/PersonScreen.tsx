import React from 'react'
import { View, StyleSheet, Text } from "react-native"

function PersonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi cuenta</Text>
      <Text>Pantalla de mi cuenta</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3c0a3',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PersonScreen