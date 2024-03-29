import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    SplashScreen.hide();

    return () => {};
  }, []);

  const google = 'http://www.google.com';
  const portal = 'https://www.awkumlms.com/Student/index';

  return (
    <View style={{backgroundColor: '#2E9C4C'}}>
      {/* <Text style={styles.mainText}>AWKUM LMS APP </Text> */}
      <View style={{width: '100%', height: '100%'}}>
        <WebView
          source={{uri: portal}}
          style={{width: '100%', height: '100%'}}
        />
        <Text style={styles.mainText}>AWKUM LMS APP </Text>
      </View>
    </View>
  );
}
