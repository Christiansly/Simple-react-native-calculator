/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>
      {title}
    </Text>
  </TouchableOpacity>
);
const calculate = (myarg) => {
  if(Number.isInteger(text[text.length - 1])) {
    setText(text + myarg);
  }
}
  return (
    <View style={{padding: 1, paddingTop: 100}}>

        <Text style={styles.text}>
            {result}
        </Text>
      
        <TextInput
          style={styles.input}
          
          onChangeText={text => setText(text)}
          defaultValue={text}
          editable={false}
        />
         <View style={{paddingTop:10, flexDirection: "row"}}>
           <View style={{flex:3}}>
             <View style={{flexDirection: "row"}}>
              
              <View style={{flex:1}}>
                <AppButton title="7" onPress={() => setText(text + '7')}/>
              </View>
              <View style={{flex: 1}}>
                <AppButton title="8" onPress={() => setText(text + '8')}/>
              </View>
              <View style={{flex:1}}>
                <AppButton title="9" onPress={() => setText(text + '9')}/>
              </View>
            </View>
            <View style={{flexDirection: "row"}}>
              <View style={{flex:1}}>
                <AppButton title="4" onPress={() => setText(text + '4')} />
              </View>
              <View style={{flex: 1}}>
                <AppButton title="5" onPress={() => setText(text + '5')} />
              </View>
              <View style={{flex:1}}>
                <AppButton title="6" onPress={() => setText(text + '6')} />
              </View>
            </View>
            <View style={{flexDirection: "row"}}>
              <View style={{flex:1}}>
                <AppButton title="1" onPress={() => setText(text + '1')} />
              </View>
              <View style={{flex: 1}}>
                <AppButton title="2" onPress={() => setText(text + '2')} />
              </View>
              <View style={{flex:1}}>
                <AppButton title="3" onPress={() => setText(text + '3')} />
              </View>
            </View>
            <View style={{flexDirection: "row"}}>
              <View style={{flex:1}}>
                <AppButton title="." onPress={() => setText(text + '.')}/>
              </View>
              <View style={{flex: 1}}>
                <AppButton title="0" onPress={() => setText(text + '0')}/>
              </View>
              <View style={{flex:1}}>
                <AppButton title="=" onPress={() => setResult(eval(text))}/>
              </View>
            </View>
           </View>
           <View style={{flex:1}}>
              
              <View style={{flex:1}}>
                <AppButton title="DEL" onPress={() => {setText(''); setResult('')}}/>
              </View>
              <View style={{flex: 1}}>
                <AppButton title="/" onPress={() => setText(text + ' / ')}/>
              </View>
              <View style={{flex:1}}>
                <AppButton title="*" onPress={() => setText(text + ' * ')}/>
              </View>
              <View style={{flex:1}}>
                <AppButton title="-" onPress={() => setText(text + ' - ')}/>
              </View>
              <View style={{flex:1}}>
                <AppButton title="+" onPress={() => setText(text + ' + ')}/>
              </View>
           </View>
         </View>
   
      
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  upper: {
    color: Colors.dark,
    fontSize: 20,
    fontWeight: '500',
    padding: 4,
    height: 250,
    
  },
  text: {
    fontSize: 25,
    borderStyle: "solid",
    height: 60,
    borderColor: Colors.dark,
    borderRadius: 2,
    width: 400,
    textAlign: "right",
    padding: 10,

  },
  input: {
    borderRadius: 2,
    width: 400,
    textAlign: "right",
    fontSize: 20,

  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
export default PizzaTranslator;
