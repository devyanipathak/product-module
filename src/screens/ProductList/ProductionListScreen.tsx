import { useState, useEffect, useMemo } from "react";
import { FlatList, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useProductsStore } from "../../store/useProductsStore";
import ProductItem from "./ProductItem";
import Loader from "../../components/Loader";
import ErrorView from "../../components/ErrorView";
import EmptyState from "../../components/EmptyState";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProductList"
>;

export default function ProductListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = useState("");

  const { products, loading, error, loadProducts, hasMore } =
    useProductsStore();

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const initLoad = async () => {
      await loadProducts(false);
      setIsInitialLoad(false);
    };

    initLoad();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  if (loading && isInitialLoad) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView message={error} onRetry={loadProducts} />;
  }

  if (!products.length && !loading) {
    return <EmptyState />;
  }

  const renderFooter = () => {
    if (!loading || isInitialLoad) return null;
    return <Loader />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <TextInput
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
        style={{
          backgroundColor: "#FFFFFF",
          margin: 12,
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#E5E7EB",
        }}
      />

      {search && !filteredProducts.length ? (
        <EmptyState />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={10}
          removeClippedSubviews
          renderItem={({ item }) => (
            <ProductItem
              item={item}
              onPress={() =>
                navigation.navigate("ProductDetail", {
                  productId: item.id,
                })
              }
            />
          )}
          refreshing={loading && isInitialLoad}
          onRefresh={() => loadProducts(false)}
          onEndReached={() => {
            if (!loading && hasMore && !search) {
              loadProducts(true);
            }
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
}
