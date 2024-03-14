import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker';

const { height } = Dimensions.get('window')

const Modal = ({ show, close }) => {

  const [typeenterprise, settypeenterprise] = useState('Microempresa (ME)');

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 })
    ]).start()
  }

  const Home = () => {

  }
  useEffect(() => {
    if (show) {
      openModal()
    } else {
      closeModal()
    }
  }, [show])

  return (
    <Animated.View
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        <View style={styles.indicator} />

        <Text style={styles.text}>
          Queremos te conhecer melhor
        </Text>

        <View style={styles.containerForm} >
          <TextInput
            style={styles.inputStyle}
            placeholder="Nome Empresa" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
          />

          <Picker
            style={styles.PickerStyle}
            selectedValue={typeenterprise}
            onValueChange={typeenterprise => settypeenterprise(typeenterprise)}>
            <Picker.Item label="ME" value="Microempresa" />
            <Picker.Item label="EPP" value="Empresa de Pequeno Porte" />
            <Picker.Item label="EMP" value="Empresa de Medio Porte" />
            <Picker.Item label="EGP" value="Empresa de Grande Porte" />
          </Picker>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {typeenterprise}
          </Text>
        </View>

        <View style={styles.containerBtn}>
          <TouchableOpacity style={[styles.btn, styles.btnSucess]} onPress={close}>
            <Text style={{ color: '#fff' }}>Continuar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.btnCancel]} onPress={close}>
            <Text style={{ color: '#fff' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>

      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '97%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center'
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '98%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 20
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  btnCancel: {
    backgroundColor: '#da002b'
  },
  btnSucess: {
    backgroundColor: '#3e8ed0',
  },
  PickerStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#bccad8',
    fontSize: 16
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    border:'1px #575656 solid',
    fontSize: 16
  },
  containerForm: {
    gap: 4,
  },
  containerBtn:{
    marginTop:'auto'
  }
})

export default Modal