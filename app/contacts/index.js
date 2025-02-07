import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactsScreen() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();
        setContacts(data);
      }
    })();
  }, []);

  return (
    <View>
      <Text>Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
