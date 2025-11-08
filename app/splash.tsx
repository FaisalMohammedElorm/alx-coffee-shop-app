import { router } from 'expo-router'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/Coffee.png')} 
        style={styles.backgroundImage}
      >
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>Fall in Love with </Text>
          <Text style={styles.mainText}>Coffee in Blissful </Text>
            <Text style={styles.mainText}>Delight!</Text>
            <Text style={styles.subText}>Welcome to our cozy coffee corner, where </Text>
              <Text style={styles.subText}>every cup is a delightful for you.</Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/(home)/home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      </ImageBackground>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    // flex: 0.5,
    marginTop: 450,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05050500',
    // alignContent: 'space-between',
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 40,
    letterSpacing: 1,
  },
  subText: {
    top: 38,
    fontSize: 16,
    color: '#A2A2A2',
    fontWeight: '600',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
    backgroundColor: '#C67C4E',
    top:100,
    width: '90%',
    height: 50,
    alignItems: 'center',
  }
})

export default Splash
