import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import CadastroScreen from '../pages/CadastroScreen';
import indexScreen from '../pages/indexScreen';
import deleteScreen from '../pages/DeleteScreen';


const MainStack = createStackNavigator();



export default () => (
        <MainStack.Navigator
        screenOptions={{
            headerShown: false
        }}
        > 
            <MainStack.Screen name="Login" component={LoginScreen}/>
            <MainStack.Screen name="Cadastro" component={CadastroScreen} />
            <MainStack.Screen name="Index" component={indexScreen}/>
            <MainStack.Screen name="Delete" component={deleteScreen}/>
        </MainStack.Navigator>
    );