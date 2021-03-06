import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
import {Styles} from './Styles';
import Header from './Header';

function QRScreen({navigation, route}) {
  const {location} = route.params;

  return (
    <SafeAreaView style={Styles.container}>
      <Header title={'Generator'} navigation={navigation} />
      <View style={Styles.qrArea}>
        <Text style={Styles.qrLabel}>Your QR Code</Text>
        <QRCode value={location} size={250} />
      </View>
      <View style={Styles.footerArea}>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={Styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default QRScreen;
