import React, { useState } from "react";
import { StyleSheet, Pressable, View, TextInput, FlatList } from "react-native";
import CategoryCard from "../components/Unknown/CategoryCard";
import SearchIcon from "../icons/SearchIcon";
import { useAuth } from "../context/AuthContext";


interface CategoriesProps {
  route?: any;
  navigation?: any;
}


const Categories: React.FC<CategoriesProps> = ({ route, navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const { userToken } = useAuth();
  console.log("userToken:", userToken);
  
  const categoriesData = [
    { id: 1, name: "Vegetables", description: "(5)", imageUrl: "https://www.shutterstock.com/image-photo/healthy-green-organic-raw-broccoli-600nw-427442281.jpg" },
    { id: 2, name: "Fruits", description: "(5)", imageUrl: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Fresh-Organic-Clementine-and-Blood-Orange.jpg" },
    { id: 3, name: "Bread", description: "(4)", imageUrl: "https://www.bordbia.ie/contentassets/e019393cf1704c5eac28bee71e990f63/bakery-image.jpg" },
    { id: 4, name: "Sweets", description: "(4)", imageUrl: "https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/news/markets/barry-callebaut-on-growth-opportunities-for-chocolate/13174613-2-eng-GB/Barry-Callebaut-on-growth-opportunities-for-chocolate.jpg" },
    { id: 5, name: "Cheese", description: "(4)", imageUrl: "https://www.dairyfoods.com/ext/resources/DF/2019/May/cheese/dfx0519-Cheese-Outlook-img-open.jpg" },
    { id: 6, name: "Coffee", description: "(4)", imageUrl: "https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwZnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D" },
  ];

  const handleNavToCategoryPage = (categoryName: string) => {
    navigation.navigate("AdditionalStackNavigation", { 
      screen: "CategoryPage",
      params: { selectedCategory: categoryName }
    });
  };

  const filterCategories = (search: string) => {
    return categoriesData.filter(
      (category) =>
        category.name.toLowerCase().includes(search.toLowerCase()) ||
        category.description.toLowerCase().includes(search.toLowerCase())
    );
  };

 

  return (
    <View>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
      <FlatList
          data={filterCategories(searchValue)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleNavToCategoryPage(item.name)}>
             <CategoryCard
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
            />
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={styles.rowStyle}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    padding: 10,
    width: 374,
    height: 48,
    borderRadius: 25,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    borderColor: "#ECECEC",
    borderWidth: 2,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 8,
  },
  searchInput: {
    fontSize: 18,
    color: "#2D0C57",
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
    marginBottom: 10,
  },
  rowStyle: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default Categories;
