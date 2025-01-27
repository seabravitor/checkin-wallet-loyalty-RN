import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome to Check-in System</Title>
          <Paragraph>Scan QR codes or view your check-in history</Paragraph>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Scan')}
          style={styles.button}
        >
          Scan QR Code
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('History')}
          style={styles.button}
        >
          View History
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    marginVertical: 8,
  },
});
export default HomeScreen;