import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MemberQrCode } from './MemberQrCode';
import { Account } from './Account';
import { SignUP } from './SignUp';
import { SplashScreen } from './SplashScreen';
import { fonts } from '../styles/Styles';

export const BottomTabsNavigator: React.FC = () => {
  const BottomTabs = createBottomTabNavigator();
  const [isLoading, setIsLoading] = useState(true);
  // boolean value, checking for authenticated user
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
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: fonts.fontFamilyBold,
        },
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
