import React from "react";
import { NativeBaseProvider } from "native-base";
import MyForm from './formulario/MyForm.js';

export default function App (){

  return(
    <NativeBaseProvider>
      <MyForm/>
    </NativeBaseProvider>
  )
}