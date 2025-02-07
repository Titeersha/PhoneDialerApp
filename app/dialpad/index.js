import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function DialPadScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePress = (num) => setPhoneNumber(phoneNumber + num);
  const handleDelete = () => setPhoneNumber(phoneNumber.slice(0, -1));
  const makeCall = () => Linking.openURL(`tel:${phoneNumber}`);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{phoneNumber}</Text>
      <View style={styles.dialPad}>
        {[1,2,3,4,5,6,7,8,9,"*",0,"#"].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.text}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.callButton} onPress={makeCall}>
        <Text style={styles.callText}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  number: { fontSize: 28, marginBottom: 20 },
  dialPad: { flexDirection: 'row', flexWrap: 'wrap', width: 250, justifyContent: 'center' },
  button: { width: 60, height: 60, margin: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', borderRadius: 30 },
  text: { fontSize: 24 },
  callButton: { marginTop: 20, backgroundColor: 'green', padding: 15, borderRadius: 10 },
  callText: { color: 'white', fontSize: 18 },
  deleteButton: { marginTop: 10, backgroundColor: 'red', padding: 10, borderRadius: 10 },
  deleteText: { color: 'white', fontSize: 18 },
});
