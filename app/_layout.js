import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="dialpad/index" options={{ title: "Dial Pad" }} />
      <Stack.Screen name="callhistory/index" options={{ title: "Call History" }} />
      <Stack.Screen name="contacts/index" options={{ title: "Contacts" }} />
    </Stack>
  );
}
