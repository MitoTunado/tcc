import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export function ForgotPassword() { 

  const navigation = useNavigation()

  function handleHome(){ 
    navigation.navigate('home')
  }

  return (
    <KeyboardAvoidingView style={styles.background}> 
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText2}><Text style={styles.titleText}>IF</Text>ICHAS - Esqueci a Senha </Text>  
          <Text style={styles.titleDescription}> Software inteligente de gestão de fichas.</Text>

        <View style={styles.welcomeBack}> 
          <Text style={styles.welcome}> Digite o email vinculado a conta! </Text>
          <Text style={styles.description}> Enviaremos um email para redefinir a senha.</Text>
        </View>

        </View>
          <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
      //nao salvar em canto algum ou salvar como local storage
          /> 
          <TouchableOpacity style={styles.btnSubmit} onPress={handleHome}>
            <Text style={styles.submitText}>Mandar email</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

