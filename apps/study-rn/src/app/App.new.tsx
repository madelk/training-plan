import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from '../styles/tailwind.json';

const MainContent = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView style={tw('flex-1 bg-white')}>
      <ScrollView contentContainerStyle={tw('p-4')}>
        <View style={tw('mb-8')}>
          <Text style={tw('text-4xl font-bold text-gray-900')}>
            Study App
          </Text>
          <Text style={tw('text-lg text-gray-600 mt-2')}>
            Welcome to your React Native app with Tailwind CSS
          </Text>
        </View>

        <View style={tw('bg-blue-100 p-4 rounded-lg mb-4')}>
          <Text style={tw('text-blue-800 font-semibold')}>
            Start building your app
          </Text>
          <Text style={tw('text-blue-600 mt-1')}>
            Edit src/app/App.tsx to get started
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <MainContent />
    </TailwindProvider>
  );
};
