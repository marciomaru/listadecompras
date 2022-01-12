import React from "react";
import { StatusBar } from 'react-native';
import { Routes } from "./src/routes";
//import { ListProvider } from "./src/hooks/item";
import { ListProvider } from "./src/hooks/list";
import { Background } from "./src/components/Background";


export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />
      <ListProvider>
        <Routes />
      </ListProvider>
    </Background>
  );
}