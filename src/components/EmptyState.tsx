import { Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text>No items available.</Text>
    </View>
  );
}
