import React from 'react';
import { useState } from 'react';
import { Input, Box, FormControl, Text, Stack} from 'native-base';

export default function MyForm () {

    const [info, setInfo] = useState ('');

    const recuperaValor = (text) =>{
      setInfo (text);
    };

    return(
      <Box backgroundColor="#D8BFD8" flex={1} >
        <Box backgroundColor="#fff" height= "30%" width="90%" marginLeft="20px" 
        marginTop="300px" borderRadius="15px" 
        >
            <Stack w="90%" alignSelf="center" safeArea> 
              <FormControl.Label> Digite aqui: </FormControl.Label>
              <Input
                placeholder = "Informe algo"
                value={info}
                onChangeText={recuperaValor}
              />
            </Stack>
            <Text marginLeft="15px" marginTop="20px"> O que foi digitado: {info} </Text>
          </Box> 
      </Box>
    );
}
