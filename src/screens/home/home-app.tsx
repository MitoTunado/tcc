import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { homeStyles } from "./homeStyles";


export function Home() { 

  const navigation = useNavigation()

  function handleLoginAluno() { 
    navigation.navigate('LoginAluno');
  }

  function handleLoginAdmin() { 
    navigation.navigate('LoginAdmin'); 
  }

  function handleLoginCantina() {
    navigation.navigate('LoginCantina');
  }


  return ( 
    <View style={homeStyles.background}> 
      <View style={homeStyles.container}>
        <View>
            <Text style={homeStyles.titleText2}><Text style={homeStyles.titleText}>IF</Text>ICHAS</Text>  
            <Text style={homeStyles.titleDescription}>Software inteligente de gestão de fichas.</Text>
        </View>

        <View style={homeStyles.welcomeBack}> 
          <Text style={homeStyles.welcome}> Bem Vindo! </Text>
          <Text style={homeStyles.description}> Pressione um dos cards para realizar o login! </Text>
        </View>

        <View style={homeStyles.box}>
          <TouchableOpacity style={homeStyles.btnSubmitAluno} onPress={handleLoginAluno}>
              <Text style={homeStyles.submitTextAluno}>LOGIN - ALUNO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.btnSubmitCantina} onPress={handleLoginCantina}>
              <Text style={homeStyles.submitTextCantina}>LOGIN - CANTINA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.btnSubmitAdmin} onPress={handleLoginAdmin}>
              <Text style={homeStyles.submitTextAdmin}>LOGIN - ADMIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}