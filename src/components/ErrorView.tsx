import { Text, View, Button } from "react-native";

interface Props {
  message: string;
  onRetry?: () => void;
}

export default function ErrorView({ message, onRetry }: Props) {
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={{ marginBottom: 10 }}>{message}</Text>
      {onRetry && <Button title="Retry" onPress={onRetry} />}
    </View>
  );
}
