import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useAuthStore } from '../store/auth'; // ou qualquer lógica de login

export default function AppNavigator() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn); // Zustand, Context, etc.

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
