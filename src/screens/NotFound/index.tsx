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
       <Text style={styles.title}>Ihhh!</Text>
       <Text style={styles.subTitle}>Saimos da rota!</Text>
           <LottieView
           source={require('../../assets/notFound.json')}
           autoPlay
           loop
           />
     <TouchableOpacity style={styles.button}>
         <View>
             <Text style={styles.textButton}>Voltar para a nave</Text>
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
      backgroundColor: '#2E2065',
      alignItems: 'center',
  },
  title:{
      marginTop: 100,
      fontSize: 36,
      color: '#E4F6FF'
  },
  subTitle:{
   fontSize: 20,
   color: '#E4F6FF'
  },
  button:{
   position: 'absolute',
   bottom:   150,
   backgroundColor: '#E4F6FF',
   paddingHorizontal: 20,
   paddingVertical: 15,
   borderRadius: 50
  },
  textButton:{
      color: '#0E3C89',
      fontSize: 18,
  }
});

export default App;
