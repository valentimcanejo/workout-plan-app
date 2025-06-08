import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import './global.css';
import { GluestackUIProvider } from './src/components/ui/gluestack-ui-provider';

export default function App() {
  return (
    <GluestackUIProvider>
      <AppNavigator />
    </GluestackUIProvider>
  );
}
