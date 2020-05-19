import "react-native-gesture-handler";
import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { Styles } from "./Styles";
import Header from "./Header";

function HomeScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const phoneRef = React.useRef(null);

  const goQRScreen = (_) =>
    navigation.navigate("QRScreen", {
      name,
      phone,
    });

  return (
    <SafeAreaView style={Styles.container}>
      <Header title={"Generator"} />
      <View style={Styles.formArea}>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Name</Text>
          <TextInput
            value={name}
            style={Styles.textInput}
            onChangeText={(text) => setName(text)}
            onSubmitEditing={(e) => {
              e.preventDefault();
              phoneRef.current.focus();
            }}
          />
        </View>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Phone Number</Text>
          <TextInput
            ref={phoneRef}
            value={phone}
            style={Styles.textInput}
            onChangeText={(text) => setPhone(text)}
            onSubmitEditing={goQRScreen}
          />
        </View>
      </View>
      <View style={Styles.footerArea}>
        <TouchableOpacity
          style={Styles.button}
          onPress={goQRScreen}
        >
          <Text style={Styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
