import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import DoesScreen from "./src/screens/DoesScreen";
import BucksScreen from "./src/screens/BucksScreen";
import KiddingScheduleScreen from "./src/screens/KiddingScheduleScreen";
import MaintenanceScreen from "./src/screens/MaintenanceScreen";
import GoatProfileScreen from "./src/screens/GoatProfileScreen";
import AddGoatScreen from "./src/screens/AddGoatScreen";

import {useState} from 'react';
import { Dimensions, Image } from "react-native";
import React from 'react';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
//import AddCustomer from './src/components/AddCustomer';
const deviceHeight = Dimensions.get('window').height;
let routeName = 'Home';

Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        DoesScreen: DoesScreen,
        BucksScreen: BucksScreen,
        KiddingScheduleScreen: KiddingScheduleScreen,
        MaintenanceScreen: MaintenanceScreen,
        GoatProfileScreen: GoatProfileScreen,
        AddGoatScreen: AddGoatScreen,
        //AddCustomerComponent: AddCustomer,
    },
    {
        initialRouteName: routeName,
    },
);

export default createAppContainer(navigator);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local


 import React from 'react';
 import type {Node} from 'react';
 import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

 import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

 const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

 const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

 export default App;*/
