import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Rendez Vous</Text>
      </View>
      <View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>Email</Text>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('./assets/mail.png')} style={styles.iconImage} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
          />
        </View>
        <Text style={styles.text}>Password</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('./assets/password.png')} style={styles.iconImage} />
          </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          secureTextEntry={true}
        />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: 'gray',
  },
  header: {
    padding: 10,
    width: 'auto',
    backgroundColor: '#7071E8',
    marginTop:30
  },
  body: {
    padding: 10,
    width: 'auto',
    height: 400,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 5,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#7071E8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  titleHeader: {
    fontSize: 30,
    color:'white'
  },
  icon: {
    padding: 10,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
});

export default App;
