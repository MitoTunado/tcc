import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/home-app";
import { LoginAluno } from "../screens/logins/login-aluno/login-aluno";
import { LoginAdmin } from "../screens/logins/login-admin/login-admin";
import { LoginCantina } from "../screens/logins/login-cantina/login-cantina";
import { CreateAccount } from "../screens/account/create-account";
import { ForgotPassword } from "../screens/password/forgot-password";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() { 
  return (
    <Navigator screenOptions={{ headerShown: false }}> 
      <Screen
      name="home"
      component={Home}
      /> 
      <Screen
        name="LoginAluno"
        component={LoginAluno}
      />
      <Screen
        name="LoginAdmin"
        component={LoginAdmin}
      />
      <Screen
        name="LoginCantina"
        component={LoginCantina}
      />
      <Screen
        name="CreateAccount"
        component={CreateAccount}
      />

      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </Navigator>
  )
}