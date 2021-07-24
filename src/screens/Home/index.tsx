 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   TouchableOpacityBase,
   useColorScheme,
   View,
 } from 'react-native';
 import LottieView from "lottie-react-native";

 const App = () => {
   return (
     <View style={styles.container}>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subTitle}>Que bom que você voltou!</Text>
            <LottieView
            source={require('../../assets/animation.json')}
            autoPlay
            loop
            />
      <TouchableOpacity style={styles.button}>
          <View>
              <Text style={styles.textButton}>Continuar</Text>
          </View>
      </TouchableOpacity>
     </View>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   container:{
       flex:1,
       backgroundColor: '#FFF',
       alignItems: 'center',
   },
   title:{
       marginTop: 100,
       fontSize: 36,
       color: '#000'
   },
   subTitle:{
    fontSize: 20,
    color: '#000'
   },
   button:{
    position: 'absolute',
    right:    50,
    bottom:   50,
    backgroundColor: '#FD8E7D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50
   },
   textButton:{
       color: '#FFF',
   }
 });

 export default App;
