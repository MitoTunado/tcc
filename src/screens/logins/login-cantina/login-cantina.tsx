import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export function LoginCantina() { 

  const navigation = useNavigation()  

  function handleCreateAccount(){
    navigation.navigate('CreateAccount')
  }

  function handleForgotPassword(){ 
    navigation.navigate('ForgotPassword')
  }

  return (
    <KeyboardAvoidingView style={styles.background}> 
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText2}><Text style={styles.titleText}>IF</Text>ICHAS - CANTINA</Text>  
          <Text style={styles.titleDescription}> Software inteligente de gestão de fichas.</Text>
        </View>
          <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
      //nao salvar em canto algum ou salvar como local storage
          /> 

          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
      //nao salvar em canto algum ou salvar como local storage
          />

          <TouchableOpacity style={styles.btnForgotPassword} onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Fazer Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister} onPress={handleCreateAccount}>
            <Text>Criar Conta</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

