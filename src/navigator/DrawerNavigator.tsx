import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {View, StyleSheet, Image, Text} from 'react-native';
import {drawerRouter} from '../constants/navigators';
import HeaderLayout from '../layouts/HeaderLayout';

export type DrawerStackParamList = {
  MedicineShops: undefined;
  ConsultationClinics: undefined;
  Notifications: undefined;
  Forums: undefined;
  Settings: undefined;
};

const CustomDrawerContent = (props: any) => {
  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profileImage: require('../assets/favicon.png'),
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image source={userProfile.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{userProfile.name}</Text>
        <Text style={styles.profileEmail}>{userProfile.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName={
          drawerRouter.find(n => n.name === 'MedicineShops')
            ?.name as keyof DrawerStackParamList
        }
        screenOptions={{
          headerRight: () => (
            <>
              <HeaderLayout />
            </>
          ),
        }}>
        {drawerRouter.map(screen => {
          return (
            <Drawer.Screen
              key={screen.id}
              name={screen.name as keyof DrawerStackParamList}
              component={screen.component}
              options={screen.options}
            />
          );
        })}
      </Drawer.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#888',
  },
});

export default DrawerNavigator;
