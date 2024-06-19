import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { featuredJobs } from "../components/featuredJob";
import { popularJobs } from "../components/popularJobs";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ route }) {
  const { name, email } = route.params;
  return (
    <SafeAreaView
      style={{ flex: 1, marginHorizontal: "5%", marginVertical: "12%" }}
    >
      <ScrollView>
        <View style={{ gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItem: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 24 }}>{name}</Text>
              <Text
                style={{ fontSize: 20, fontWeight: "400", color: "#95969D" }}
              >
                {email}
              </Text>
            </View>
            <View>
              <Image
                source={require("../assets/profile.jpg")}
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
                <Image source={require("../assets/filter.5.png")} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ gap: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <TouchableOpacity>
                <Text style={{ fontWeight: "700", fontSize: 20 }}>
                  Featured
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ color: "#95969D" }}> See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={featuredJobs}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: item.backgroundColor,
                      padding: 15,
                      marginRight: 10,
                      borderRadius: 10,

                      height: 200,
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <Image
                        source={item.logo}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 5,
                          marginRight: 2,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            color: "#FFF",
                            fontSize: 16,
                            fontWeight: "700",
                          }}
                        >
                          {item.description}
                        </Text>
                        <Text style={{ color: "#D3D3D3", fontSize: 14 }}>
                          {item.platform}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFF",
                          fontSize: 16,
                          fontWeight: "600",
                        }}
                      >
                        {item.salary}
                      </Text>
                      <Text style={{ color: "#D3D3D3", fontSize: 14 }}>
                        {item.location}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{ gap: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <TouchableOpacity>
                <Text style={{ fontWeight: "700", fontSize: 20 }}>
                  Popular Jobs
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{ color: "#95969D" }}>See All</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={popularJobs}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={{ width: "100%", marginBottom: 20 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row", gap: 12 }}>
                        <Image source={item.logo} />
                        <View style={{ gap: 3 }}>
                          <Text style={{ fontSize: 14, fontWeight: "600" }}>
                            {item.role}
                          </Text>
                          <Text style={{ color: "#0D0D26" }}>
                            {item.company}
                          </Text>
                        </View>
                      </View>

                      <View>
                        <Text style={{ textAlign: "right" }}>
                          {item.salary}
                        </Text>
                        <Text>{item.state}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
