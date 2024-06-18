import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
export class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", marginHorizontal: "8%" }}
      >
        <View style={{ gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItem: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 24 }}>Eric Appah</Text>
              <Text
                style={{ fontSize: 20, fontWeight: "400", color: "#95969D" }}
              >
                ericappah@gmail.com
              </Text>
            </View>
            <View>
              <Image
                source={require("./assets/profile.jpg")}
                style={{ height: 50, width: 50, borderRadius: 50 }}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#F2F2F3",
                padding: 10,
                gap: 7,
                width: "80%",
                borderRadius: 10,
              }}
            >
              <AntDesign name="search1" size={24} color="black" />
              <TextInput placeholder="Search a job or position " />
            </View>
            <View
              style={{
                backgroundColor: "#F2F2F3",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity>
                <Image source={require("./assets/filter.5.png")} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <Text>Featured Jobs</Text>
            <Text>All</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
