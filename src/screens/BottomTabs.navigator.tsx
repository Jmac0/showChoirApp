import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MemberQrCode } from './MemberQrCode';
import { Account } from './Account';

export const BottomTabsNavigator: React.FC = () => {
  const BottomTabs = createBottomTabNavigator();
  return (
    <BottomTabs.Navigator
      screenOptions={({}) => ({
        headerTitleStyle: { fontSize: 20 },
      })}>
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
    </BottomTabs.Navigator>
  );
};
