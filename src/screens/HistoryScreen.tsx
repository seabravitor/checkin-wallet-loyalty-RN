import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
const mockCheckIns = [
  { id: '1', timestamp: new Date('2024-02-20T10:00:00'), location: 'Main Gym' },
  { id: '2', timestamp: new Date('2024-02-19T11:30:00'), location: 'Yoga Studio' },
  { id: '3', timestamp: new Date('2024-02-18T09:15:00'), location: 'Main Gym' },
];
const HistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {mockCheckIns.map((checkIn) => (
        <Card key={checkIn.id} style={styles.card}>
          <Card.Content>
            <Title>{checkIn.location}</Title>
            <Paragraph>
              {checkIn.timestamp.toLocaleDateString()} at{' '}
              {checkIn.timestamp.toLocaleTimeString()}
            </Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 12,
  },
});
export default HistoryScreen;