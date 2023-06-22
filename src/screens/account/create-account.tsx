import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export function CreateAccount() { 

  const navigation = useNavigation()

  function handleHome(){ 
    navigation.navigate('home')
  }

  return (
    <KeyboardAvoidingView style={styles.background}> 
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText2}><Text style={styles.titleText}>IF</Text>ICHAS - Criar Conta </Text>  
          <Text style={styles.titleDescription}> Software inteligente de gestão de fichas.</Text>
        </View>
          <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          autoCorrect={false}
      //nao salvar em canto algum ou salvar como local storage
          /> 

          <TextInput
          style={styles.input}
          placeholder="Matricula"
          autoCorrect={false}
      //nao salvar em canto algum ou salvar como local storage
          />

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

          <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          autoCorrect={false}
      //nao salvar em canto algum ou salvar como local storage
          />

          <TouchableOpacity style={styles.btnSubmit} onPress={handleHome}>
            <Text style={styles.submitText}>Registrar-se</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

