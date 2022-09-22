import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MemberQrCode } from './MemberQrCode';
import { Account } from './Account';

export const BottomTabsNavigator: React.FC = () => {
  const BottomTabs = createBottomTabNavigator();
  const [isAuth, setIsAuth] = useState(true);
  return (
    <BottomTabs.Navigator
      screenOptions={({}) => ({
        headerTitleStyle: { fontSize: 20 },
      })}>
      {isAuth ? (
        <BottomTabs.Screen
          name="Home"
          component={MemberQrCode}
          options={{ title: 'Membership' }}
        />
      ) : (
        /*screens for create account & forgot password ect */
        <BottomTabs.Screen
          name="Account"
          component={Account}
          options={{ title: 'Account' }}
        />
      )}
    </BottomTabs.Navigator>
  );
};
