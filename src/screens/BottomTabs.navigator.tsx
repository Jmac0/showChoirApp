import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MemberQrCode } from './MemberQrCode';
import { Account } from './Account';
import { SignUP } from './SignUp';
import { SplashScreen } from './SplashScreen';

export const BottomTabsNavigator: React.FC = () => {
  const BottomTabs = createBottomTabNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <BottomTabs.Navigator
      screenOptions={({}) => ({
        headerTitleStyle: { fontSize: 20 },
      })}>
      {isAuth ? (
        /*** authenticated user screens ***/
        <>
          <BottomTabs.Screen
            name="Home"
            component={MemberQrCode}
            options={{ title: 'Membership' }}
          />
          <BottomTabs.Screen
            name="Account"
            component={Account}
            options={{ title: 'Account' }}
          />
        </>
      ) : (
        /*** screens for create account & forgot password ect ***/
        <BottomTabs.Screen
          name="Sing Up"
          component={SignUP}
          options={{ title: 'Sign Up' }}
        />
      )}
    </BottomTabs.Navigator>
  );
};
