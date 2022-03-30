import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {WebView} from 'react-native-webview';

export default function Home() {
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
