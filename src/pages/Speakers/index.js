import React, { Component } from "react";

import { ScrollView, Image } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import igorDrudi from "../../assets/speakers/igor-drudi.png";
import cristianoEWiviani from "../../assets/speakers/cristiano-wiviani.png";
import guilhermeCasagrande from "../../assets/speakers/guilherme-casagrande.jpg";
import marceloDaSilva from "../../assets/speakers/marcelo-da-silva.png";

export default class Speakers extends Component {
  static navigationOptions = {
    title: "Speakers",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="record-voice-over" size={24} color={tintColor} />
    )
  };

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Image
          source={igorDrudi}
          style={{
            width: "100%",
            height: 260,
            borderRadius: 8,
            marginBottom: 30
          }}
        />
        <Image
          source={cristianoEWiviani}
          style={{
            width: "100%",
            height: 260,
            borderRadius: 8,
            marginBottom: 30
          }}
        />
        <Image
          source={guilhermeCasagrande}
          style={{
            width: "100%",
            height: 260,
            borderRadius: 8,
            marginBottom: 30
          }}
        />
        <Image
          source={marceloDaSilva}
          style={{
            width: "100%",
            height: 260,
            borderRadius: 8,
            marginBottom: 40
          }}
        />
      </ScrollView>
    );
  }
}
