import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importa las categorías desde el archivo categories.json
import categories from "./src/Data/categories.json";
// Importa los productos desde el archivo products.json
import products from "./src/Data/products.json";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategories, setShowCategories] = useState(true);
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  // Renderiza cada elemento de la lista de categorías
  const renderCategory = ({ item }) => {
    const onPressCategory = () => {
      setSelectedCategory(item);
      setShowCategories(false);
    };

    return (
      <TouchableOpacity onPress={onPressCategory}>
        <View
          style={{
            padding: 10,
            backgroundColor: item === selectedCategory ? "gray" : "white",
          }}
        >
          <Text>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Renderiza cada elemento de la lista de productos filtrados
  // Renderiza cada elemento de la lista de productos filtrados
  const renderProduct = ({ item }) => {
    const onPressProduct = () => {
      navigation.navigate("ProductDetails", { product: item });
    };

    return (
      <TouchableOpacity onPress={onPressProduct}>
        <View>
          <Image
            source={{ uri: item.thumbnail }}
            style={{ width: 100, height: 100 }}
          />
          <Text>{item.title}</Text>
          {/* Aquí puedes mostrar más detalles del producto si lo deseas */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {showCategories && (
        <FlatList
          data={categories} // Pasa las categorías al componente FlatList
          renderItem={renderCategory} // Renderiza cada elemento usando la función renderCategory
          keyExtractor={(item) => item} // Usa el valor de cada categoría como identificador único
        />
      )}
      {selectedCategory && (
        <FlatList
          data={filteredProducts} // Pasa los productos filtrados al componente FlatList
          renderItem={renderProduct} // Renderiza cada elemento usando la función renderProduct
          keyExtractor={(item) => item.id.toString()} // Usa el ID de cada producto como identificador único
        />
      )}
    </View>
  );
};

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Image
        source={{ uri: product.images[0] }}
        style={{ width: 100, height: 100 }}
      />
      {/* Mostrar el resto de los detalles del producto */}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
