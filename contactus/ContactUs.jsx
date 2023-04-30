import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Alert, Linking,Text } from 'react-native';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // validate form fields
    if (!firstName) {
      Alert.alert('Please enter your first name');
      return;
    }

    if (!lastName) {
      Alert.alert('Please enter your last name');
      return;
    }

    if (!email) {
      Alert.alert('Please enter your email address');
      return;
    }

    if (!phone) {
      Alert.alert('Please enter your phone number');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert('Please enter a valid email address');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      Alert.alert('Please enter a valid 10-digit phone number');
      return;
    }

    if (!message) {
      Alert.alert('Please enter a message');
      return;
    }

    // send email
    const mailToLink = `mailto:info@redpositive.com?subject=Contact Form Submission&body=First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
    Linking.openURL(mailToLink).catch(() => Alert.alert('Unable to open email app'));
  };


  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor={'#C72931'}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor={'#C72931'}
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#C72931'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        placeholderTextColor={'#C72931'}
        value={phone}
        maxLength={10}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        placeholderTextColor={'#C72931'}
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top:40,
    padding: 40,
  },
  input: {
    borderWidth: 3,
    borderColor: '#115260',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    color:'white'
  },
  button: {
    backgroundColor: '#EADDCD',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ContactUs;
