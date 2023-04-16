import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobPostingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job Posting Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default JobPostingScreen;