import React, { Component } from "react";

import { Title, Text, Divider } from "react-native-paper";
import { ScrollView, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

export default class Home extends Component {
  static navigationOptions = {
    title: "Início",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={24} color={tintColor} />
    )
  };

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.boxNext}>
          <Title style={styles.title}>Próximo evento</Title>
          <Text style={styles.text}>16/06/2019 no SESI em Rio do Sul</Text>
        </View>
        <Title style={styles.title}>Tema</Title>
        <Text style={styles.text}>
          Eco é uma reflexão de som que chega ao ouvinte pouco tempo depois do
          som direto. Nosso objetivo com o tema é abordar as decisões que são
          feitas em nossas vidas que refletem em mudanças posteriores, mesmo que
          leve anos para isso, no estilo efeito borboleta, onde se uma borboleta
          bater as asas em determinada velocidade em um certo espaço de tempo
          pode provocar furacões milhares de quilômetros distante dela.
        </Text>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          “ECO - O reflexo das suas ações"
        </Text>
        <Divider style={styles.divider} />
        <Title style={styles.title}>O que é TEDx</Title>
        <Text style={[styles.text, { paddingBottom: 30 }]}>
          O TEDx é um programa de eventos locais organizado de forma
          independente que reúne pessoas para compartilhar a experiência de um
          TED. O TEDxRioDoSul é um evento único, credenciado pelo TED e que
          acontece-rá uma vez ao ano.
        </Text>
      </ScrollView>
    );
  }
}
