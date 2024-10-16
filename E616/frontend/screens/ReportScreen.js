import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function ReportScreen() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [species, setSpecies] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sightings', {
        latitude,
        longitude,
        species,
      });
      setMessage('Sighting reported successfully');
    } catch (error) {
      setMessage('Failed to report sighting');
    }
  };

  return (
    <View>
      <TextInput placeholder="Latitude" value={latitude} onChangeText={setLatitude} />
      <TextInput placeholder="Longitude" value={longitude} onChangeText={setLongitude} />
      <TextInput placeholder="Species" value={species} onChangeText={setSpecies} />
      <Button title="Submit" onPress={handleSubmit} />
      {message && <Text>{message}</Text>}
    </View>
  );
}
