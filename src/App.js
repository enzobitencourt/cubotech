import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Rotas from './routes/routes';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#EFF0F3',
        color: 'white',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
          <Rotas />
    </ChakraProvider>
  );
}

export default App;
