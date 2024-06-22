import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://us-central1-simpleformapp-427210.cloudfunctions.net/insertFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, favoriteColor }),
      });
      
      if (response.ok) {
        alert('Form submitted successfully!');
        setName('');
        setAge('');
        setFavoriteColor('');
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Favorite Color"
        value={favoriteColor}
        onChangeText={setFavoriteColor}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});