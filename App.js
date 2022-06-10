import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from 'react-native';

export default function App() {


  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [cookieText, setCookieText] = useState('');

  let quotes = [
    'The early bird gets the worm, but the second mouse gets the cheese.',
    'Your road to glory will be rocky, but fulfilling.',
    'Courage is not simply one of the virtues, but the form of every virtue at the testing point.',
    'Patience is your alley at the moment. Don’t worry!',
    'Nothing is impossible to a willing heart.',
    'Don’t worry about money. The best things in life are free.',
    'Don’t pursue happiness – create it.'

  ];


  function crackBiscuit(){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    setCookieText('" ' + quotes[randomNumber]+' " ');

    setImg(require('./src/biscoitoAberto.png'));
  }

  function reloadBiscuit(){
    setImg(require('./src/biscoito.png'));
    setCookieText('');
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#000'} />
      <Text style={styles.title}>Chinese Fortune Cookies</Text>
      <Image source={img} style={styles.img} />
      <Text style={styles.cookieText}>{cookieText}</Text>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.firstButton]}
        onPress={crackBiscuit}>
        <View style={styles.butttonArea}>
          <Text style={styles.textContainer}>CRACK BISCUIT</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.secondButton]}
        onPress={reloadBiscuit}>
        <View style={styles.butttonArea}>
          <Text style={[styles.textContainer, {color: '#808080'}]}>
            RELOAD BISCUIT
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#010101',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    color: '#ffd005',
    margin: 15,
    letterSpacing: 1
  },
  img: {
    width: 230,
    height: 230,
    margin: 15
  },
  cookieText: {
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'center',
    marginHorizontal: 18,
    paddingVertical: 15,
    fontStyle: 'italic',
    color: '#222',

    backgroundColor: '#ffd005',
    borderRadius: 10/2,
    
  },
  buttonContainer: {
    width: 250,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffd005',
    borderWidth: 2,
    borderRadius: 20 / 2,
  },
  butttonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textContainer: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffd005',
  },
  firstButton:{
    bottom: -50
  },
  secondButton: {
    bottom: -60,
    borderColor: '#808080',
  },
});
