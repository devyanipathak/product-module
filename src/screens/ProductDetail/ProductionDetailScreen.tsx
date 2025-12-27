import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "../../navigation/RootNavigator";
import { useProductsStore } from "../../store/useProductsStore";
import Loader from "../../components/Loader";
import ErrorView from "../../components/ErrorView";
import { Product } from "../../types/product.types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RouteProps = RouteProp<RootStackParamList, "ProductDetail">;

export default function ProductDetailScreen() {
  const route = useRoute<RouteProps>();
  const { productId } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { getProductById } = useProductsStore();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(productId);
        if (!data) {
          setError(true);
        } else {
          setProduct(data);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (loading) {
    return <Loader />;
  }

  if (error || !product) {
    return <ErrorView message="Failed to load product details." />;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {/* Back Button */}
      {/* <Text
        onPress={() => navigation.goBack()}
        style={{
          marginBottom: 12,
          color: "#2563EB",
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        ←
      </Text> */}

      {/* Product Image (NOT CROPPED) */}
      {product.thumbnail && (
        <View
          style={{
            width: "100%",
            height: 260,
            backgroundColor: "#F3F4F6",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Image
            source={{ uri: product.thumbnail }}
            style={{
              width: "90%",
              height: "90%",
            }}
            resizeMode="contain"
          />
        </View>
      )}

      {/* Title */}
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 6 }}>
        {product.title}
      </Text>

      {/* Price & Rating */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          ₹{product.price ?? "N/A"}
        </Text>

        <Text style={{ fontSize: 16, color: "#444" }}>
          ⭐ {product.rating ?? "N/A"}
        </Text>
      </View>

      {/* Description */}
      <Text style={{ fontSize: 15, color: "#555", lineHeight: 22 }}>
        {product.description ?? "No description available."}
      </Text>
    </ScrollView>
  );
}
