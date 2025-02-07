import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CallDetectorManager from 'react-native-call-detection';

export default function CallHistoryScreen() {
  const [callLogs, setCallLogs] = useState([]);

  useEffect(() => {
    const callDetector = new CallDetectorManager((event, phoneNumber) => {
      setCallLogs((prev) => [...prev, { event, phoneNumber }]);
    });

    return () => callDetector && callDetector.dispose();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call History</Text>
      <FlatList
        data={callLogs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.log}>{item.event} - {item.phoneNumber}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  log: { fontSize: 16, marginBottom: 5 },
});
