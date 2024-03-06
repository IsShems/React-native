import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import ProductCard from "../components/Unknown/ProductCard";
import CustomButton from "../components/Unknown/CustomButton";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";

interface Product {
  id: number;
  name: string;
  price: number;
  weight: string;
  country: string;
  description: string;
  category: string;
  photo: string;
}

interface CategoryPageProps {
  route: any;
  navigation: any;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ route, navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const { selectedCategory } = route.params;
  const [isButtonActive, setButtonActive] = useState(false);

  const productsData = [
    {
      id: 1,
      name: "Carrot",
      price: 1.5,
      weight: "250g",
      country: "Local",
      description: "Fresh and crunchy carrot",
      category: "Vegetables",
      photo:
        "https://img.freepik.com/free-photo/fresh-healthy-vegetable-salad-with-vibrant-organic-ingredients-generated-by-artificial-intelligence_25030-60568.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais",
    },
    {
      id: 2,
      name: "Apple",
      price: 2.0,
      weight: "200g",
      country: "USA",
      description: "Sweet and juicy apple",
      category: "Fruits",
      photo:
        "https://media.istockphoto.com/id/187420397/photo/red-apples.jpg?s=170667a&w=0&k=20&c=NX0GIFGfJQqOs_rnZy1zLugpvcjgWSOb47xFU54l0kc=",
    },
    {
      id: 3,
      name: "Baguette",
      price: 3.5,
      weight: "400g",
      country: "France",
      description: "Crusty French baguette",
      category: "Bread",
      photo:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/B10F0941-3518-440D-A69F-72EFF5F7826B/Derivates/D5691ACE-1B10-42D8-8364-11402524A36D.jpg",
    },
    {
      id: 4,
      name: "Chocolate Bar",
      price: 2.8,
      weight: "100g",
      country: "Switzerland",
      description: "Smooth milk chocolate",
      category: "Sweets",
      photo:
        "https://k7w8d7f4.rocketcdn.me/wp-content/uploads/2020/09/BlogPost_ExpirationDate_700x467.jpeg",
    },
    {
      id: 5,
      name: "Cheddar Cheese",
      price: 5.0,
      weight: "300g",
      country: "UK",
      description: "Aged cheddar cheese",
      category: "Cheese",
      photo:
        "https://media.cnn.com/api/v1/images/stellar/prod/200623110902-cheddar-cubes.jpg?q=x_0,y_0,h_900,w_1599,c_fill/h_833,w_1480",
    },
    {
      id: 6,
      name: "Espresso Beans",
      price: 8.0,
      weight: "250g",
      country: "Italy",
      description: "High-quality espresso beans",
      category: "Coffee",
      photo:
        "https://www.crowdedkitchen.com/wp-content/uploads/2021/09/Chocolate-Covered-Espresso-Beans-11.jpg",
    },
    {
      id: 7,
      name: "Broccoli",
      price: 1.2,
      weight: "300g",
      country: "Local",
      description: "Nutritious green broccoli",
      category: "Vegetables",
      photo:
        "https://www.shutterstock.com/image-photo/healthy-green-organic-raw-broccoli-600nw-427442281.jpg",
    },
    {
      id: 8,
      name: "Orange",
      price: 1.8,
      weight: "150g",
      country: "Spain",
      description: "Tangy and sweet orange",
      category: "Fruits",
      photo:
        "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Fresh-Organic-Clementine-and-Blood-Orange.jpg",
    },
    {
      id: 9,
      name: "Cucumber",
      price: 1.0,
      weight: "200g",
      country: "Local",
      description: "Refreshing cucumber",
      category: "Vegetables",
      photo:
        "https://www.growforagecookferment.com/wp-content/uploads/2023/08/preserve-cucumbers-featured.jpg",
    },
    {
      id: 10,
      name: "Banana",
      price: 2.5,
      weight: "180g",
      country: "Ecuador",
      description: "Ripe and potassium-rich banana",
      category: "Fruits",
      photo:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg",
    },
    {
      id: 11,
      name: "Whole Wheat Bread",
      price: 4.0,
      weight: "350g",
      country: "USA",
      description: "Healthy whole wheat bread",
      category: "Bread",
      photo:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/31/1/RX-VITAMIX_Whole-wheat_s4x3.jpg.rend.hgtvcom.616.462.suffix/1389283910377.jpeg",
    },
    {
      id: 12,
      name: "Dark Chocolate",
      price: 3.2,
      weight: "120g",
      country: "Belgium",
      description: "Intense dark chocolate",
      category: "Sweets",
      photo:
        "https://hips.hearstapps.com/hmg-prod/images/preparing-homemade-chocolate-truffles-royalty-free-image-875182498-1565023760.jpg",
    },
    {
      id: 13,
      name: "Blue Cheese",
      price: 6.5,
      weight: "250g",
      country: "France",
      description: "Creamy blue cheese",
      category: "Cheese",
      photo:
        "https://cdn.shopify.com/s/files/1/1444/2808/files/20210325-gh-saxelby-1088_grey_barn_collection_bluebird_blue_detail_1.jpg?v=1644437610",
    },
    {
      id: 14,
      name: "Ground Coffee",
      price: 9.5,
      weight: "300g",
      country: "Brazil",
      description: "Finely ground coffee beans",
      category: "Coffee",
      photo:
        "https://kaapimachines.com/wp-content/uploads/2022/12/grinder-blog-1.webp",
    },
    {
      id: 15,
      name: "Spinach",
      price: 1.2,
      weight: "150g",
      country: "Local",
      description: "Nutrient-packed spinach",
      category: "Vegetables",
      photo:
        "https://media.post.rvohealth.io/wp-content/uploads/2019/05/spinach-732x549-thumbnail.jpg",
    },
    {
      id: 16,
      name: "Grapes",
      price: 3.0,
      weight: "300g",
      country: "Italy",
      description: "Sweet and juicy grapes",
      category: "Fruits",
      photo:
        "https://www.thespruceeats.com/thmb/l1_lV7wgpqRArWBwpG3jzHih_e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-are-grapes-5193263-hero-01-80564d77b6534aa8bfc34f378556e513.jpg",
    },
    {
      id: 17,
      name: "Bagel",
      price: 2.5,
      weight: "200g",
      country: "USA",
      description: "Soft and chewy bagel",
      category: "Bread",
      photo:
        "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-08-how-to-make-bagels%2F2020_howto_bagels_shot14_197",
    },
    {
      id: 18,
      name: "Milk Chocolate",
      price: 2.5,
      weight: "150g",
      country: "Switzerland",
      description: "Creamy milk chocolate",
      category: "Sweets",
      photo:
        "https://w4s8p5t8.rocketcdn.me/wp-content/uploads/2019/01/vegan-milk-chocolate-recipe.jpg",
    },
    {
      id: 19,
      name: "Gouda Cheese",
      price: 4.8,
      weight: "200g",
      country: "Netherlands",
      description: "Mild and creamy Gouda cheese",
      category: "Cheese",
      photo:
        "https://saxelbycheese.com/cdn/shop/files/Saxelby_cheeses-531_580x.jpg?v=1691775625",
    },
    {
      id: 20,
      name: "Arabica Coffee Beans",
      price: 12.0,
      weight: "250g",
      country: "Ethiopia",
      description: "High-quality Arabica coffee beans",
      category: "Coffee",
      photo:
        "https://enjoyjava.com/wp-content/uploads/2018/01/what-is-arabica-coffee.jpg",
    },
    {
      id: 21,
      name: "Asparagus",
      price: 2.0,
      weight: "200g",
      country: "Local",
      description: "Delicious and tender asparagus",
      category: "Vegetables",
      photo:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/08/03/133396.jpeg",
    },
    {
      id: 22,
      name: "Pineapple",
      price: 4.5,
      weight: "500g",
      country: "Costa Rica",
      description: "Sweet and tropical pineapple",
      category: "Fruits",
      photo:
        "https://images.immediate.co.uk/production/volatile/sites/30/2017/07/pineapple-6ee23f3.jpg?quality=90&resize=556,505",
    },
    {
      id: 23,
      name: "Sourdough Bread",
      price: 5.0,
      weight: "450g",
      country: "Germany",
      description: "Artisanal sourdough bread",
      category: "Bread",
      photo:
        "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-01-How-to-Sourdough-Bread%2F98877-sliced-lead_How-to-make-sourdough-bread",
    },
    {
      id: 24,
      name: "Hazelnut Praline",
      price: 3.8,
      weight: "150g",
      country: "Belgium",
      description: "Crunchy hazelnut praline",
      category: "Sweets",
      photo:
        "https://theloopywhisk.com/wp-content/uploads/2020/10/Hazelnut-Praline-Paste_730px-featured.jpg",
    },
    {
      id: 25,
      name: "Feta Cheese",
      price: 6.2,
      weight: "250g",
      country: "Greece",
      description: "Salty and crumbly feta cheese",
      category: "Cheese",
      photo:
        "https://www.cheese.com/media/img/cheese/feta_cheese_on_cutting_board.jpg",
    },
    {
      id: 26,
      name: "Colombian Coffee",
      price: 10.0,
      weight: "300g",
      country: "Colombia",
      description: "Rich and bold Colombian coffee",
      category: "Coffee",
      photo:
        "https://blogstudio.s3.theshoppad.net/coffeeheroau/8242e3320e454bb1d8ad9b21a6b88320.jpg",
    },
  ];

  const filterProductsByCategory = (category: string, search: string) => {
    return productsData.filter(
      (product) =>
        product.category === category &&
        (product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()))
    );
  };

  const handleNavToItem = (product: Product) => {
    navigation.navigate("AdditionalStackNavigation", {
      screen: "Item",
      params: { productData: product },
    });
  };

  
  const [buttonActiveMap, setButtonActiveMap] = useState<{ [key: number]: boolean }>({});

  const handleShoppingCart = (productId: number) => {
    setButtonActiveMap((prevMap) => ({
      ...prevMap,
      [productId]: true,
    }));

    // Add your shopping cart logic here if needed

    setTimeout(() => {
      setButtonActiveMap((prevMap) => ({
        ...prevMap,
        [productId]: false,
      }));
    }, 300);
  };


  return (
    <View style={styles.container}>
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
        data={filterProductsByCategory(selectedCategory, searchValue)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleNavToItem(item)}>
            <View style={styles.content}>
              <ProductCard
                name={item.name}
                description={item.description}
                photo={item.photo}
                weight={item.weight}
                price={item.price}
                category={item.category}
                country={item.country}
                id={item.id}
              />
              <CustomButton
                onPress={() => handleShoppingCart(item.id)}
                marginTop={0}
                width={70}
                height={40}
                alignSelf="center"
                borderRadius={6}
                borderWidth={3}
                marginLeft={30}
                backgroundColor={buttonActiveMap[item.id] ? "#d7d9d7" : "#ffffff"}
                borderColor="#bfbdbd"
              >
                <ShoppingCartIcon />
              </CustomButton>
            </View>
          </Pressable>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
  },
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
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 15,
  },
});

export default CategoryPage;
