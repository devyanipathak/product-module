import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../../types/product.types";

interface Props {
  item: Product;
  onPress: () => void;
}

export default function ProductItem({ item, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={{
          flexDirection: "row",
          padding: 12,
          marginHorizontal: 12,
          marginVertical: 6,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          elevation: 2,
        }}
      >
        {item.thumbnail && (
          <Image
            source={{ uri: item.thumbnail }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 8,
              marginRight: 12,
            }}
          />
        )}

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {item.title}
          </Text>

          <Text style={{ color: "#666", marginTop: 4 }}>
            ₹{item.price ?? "N/A"} • ⭐ {item.rating ?? "N/A"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
