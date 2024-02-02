// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import MainPage from './MainPage';
// import AddTaskPage from './AddTaskPage';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main">
//         <Stack.Screen name="Main" component={MainPage} />
//         <Stack.Screen name="AddTask" component={AddTaskPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;








// import React, { useState } from "react";
// import {
//   Modal,
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { ActivityIndicator } from "react-native";

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);

//   const handlePhotoPress = () => {
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };


//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handlePhotoPress}>
//         <Text style={{ color: "green", fontWeight: "bold" }}>Открыть фото</Text>
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={handleCloseModal}
//       >
//         <View style={styles.modalContainer}>
//           <Image
//             source={{
//               uri: "https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/tdt_13042021_wald_fakten_erholungsraum.jpg?itok=VUskgfzn",
//             }}
//             style={styles.modalImage}
//           />
//           <ImageBackground
//             source={{
//               uri: "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg",
//             }}
//             style={styles.modalTextBackgroundImage}
//           >
//             <Text style={{ color: "black" }}>
//               igtbnergtbondrltgobdlrtvbldbkjf vke
//             </Text>
//             <Text style={{ color: "black" }}>
//               igtbnergtbondrltgobdlrtvbldbkjf vke
//             </Text>
//           </ImageBackground>
//           <ActivityIndicator color="black" />
//           <TouchableOpacity onPress={handleCloseModal}>
//             <Text style={{ color: "green", fontWeight: "bold" }}>Закрыть</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalImage: {
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//   },
//   modalTextBackgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//   },
//   modalContent: {
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     padding: 20,
//     alignItems: "center",
//   },
// });







/*1 - Создать проект на Экспо
2 - Создать компонент карточки задачи
3 - Импортировать и отрисовать карточку в App.js
4 - Стили для Карточки взять из дизайна  - https://www.figma.com/file/QaMM0a7geQTACcUgqt5tZQ/React-Native-Test?node-id=0%3A1&mode=dev

 */

import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={width > 400 ? styles.container : styles.containerSmall}>
      <View style={styles.rowContainer}>
        <View style={styles.fragment}>
          <Text>Something 1</Text>
        </View>
        <View style={styles.fragment}>
          <Text>Something 2</Text>
        </View>
        <View style={styles.fragment}>
          <Text>Something 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSmall: {
    backgroundColor: "blue",
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 16, 
  },
  fragment: {
    width: width > 400 ? width / 2 : '50%', 
    height: 200, 
    backgroundColor: "olive",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 8, 
  },
});

