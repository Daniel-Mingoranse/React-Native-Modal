// Home.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from './Modal';

const Home = ({ navigation }) => {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OrderSync</Text>
      <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
        <Text style={styles.titleButton}>Vamos começar</Text>
      </TouchableOpacity>

      <Modal
        show={modal}
        close={() => setModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e8ed0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700'
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20
  },
  titleButton: {
    fontSize: 18,
    fontWeight: '500'
  }
});

export default Home;
