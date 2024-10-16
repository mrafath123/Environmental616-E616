import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Report a Sighting" onPress={() => navigation.navigate('Report Sighting')} />
      <Button title="View Sightings" onPress={() => navigation.navigate('View Sightings')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
