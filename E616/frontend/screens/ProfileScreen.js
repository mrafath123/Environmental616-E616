import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function ProfileScreen() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/profile');
      setProfile(response.data);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  return (
    <View>
      {profile && (
        <Text>Username: {profile.username}</Text>
      )}
    </View>
  );
}
