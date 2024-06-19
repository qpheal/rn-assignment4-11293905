import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from 'react';

export default function LoginScreen({navigation}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", marginHorizontal: "8%" }}
    >
      <View style={{ gap: 50 }}>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              color: "#356899",
              marginBottom: 15,
            }}
          >
            Jobizz
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              fontSize: 24,
              marginBottom: 5,
            }}
          >
            Welcome back 👋
          </Text>
          <Text style={{ fontSize: 22, fontWeight: "400", fontSize: 14 }}>
            Let's log in. Apply for jobs!!
          </Text>
        </View>

        <View style={{ gap: 15 }}>
          <View>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={{
                borderWidth: 1,
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 10,
                borderBlockColor: "#AFB0B6",
                borderColor: "#afb0b6",
                width: 'auto',
                height: 40,
              }}
            />
          </View>

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderRadius: 10,
              borderBlockColor: "#AFB0B6",
              borderColor: "#afb0b6",
            }}
          />

          <Button
            title="Login"
            style={{
              backgroundColor: "#356899",
              borderRadius: 25,
              padding: 40,
            }}
            onPress={handleLogin}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: -10,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }}></View>

          <Text style={{ marginHorizontal: 10, color: "#aaa" }}>
            Or continue with
          </Text>

          <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }}></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -5,
          }}
        >
          <TouchableOpacity>
            <Image source={require("../assets/Group 56.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/Group 55.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/Group 54.png")} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginTop: -10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#BDBEC2" }}>
            Haven't an account?
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#0000ff" }}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


