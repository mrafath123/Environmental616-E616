import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import axios from 'axios';

export default function ViewSightingsScreen() {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    fetchSightings();
  }, []);

  const fetchSightings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sightings');
      setSightings(response.data);
    } catch (error) {
      console.error('Failed to fetch sightings:', error);
    }
  };

  return (
    <View>
      <FlatList
        data={sightings}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text>{item.species} spotted at [{item.latitude}, {item.longitude}] on {new Date(item.date).toLocaleDateString()}</Text>
        )}
      />
    </View>
  );
}
