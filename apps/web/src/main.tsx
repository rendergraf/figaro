// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import { rootStyles, Box, Button, Image, Link } from '@figaro/ui';


const App = () => (
  <div className={rootStyles}>
    <Box display='flex' flexDirection='column' bgcolor='red'  responsive={{
      phone: {
        bgcolor: 'blue',
      },
      tabletPortrait: {
        bgcolor: 'yellow',
      },
      tabletLandscape: {
        bgcolor: 'orange',
      },
      desktop: {
        bgcolor: 'purple',
        display:'flex',
        flexDirection: 'row',
      },
      largeDesktop: {
        bgcolor: 'green',
      },
      bigDesktop: {
        bgcolor: 'pink',
      },
    }}>
      <Button variant='success' size='lg'>Click Me</Button>
      <Link variant='primary' size='lg' href='https://www.google.com'>Google</Link>
      <Image borderRadius='none' objectFit='cover' loading='lazy' src='https://placehold.co/300' alt='placeholder' title='Foto' />
    </Box>
    <Box component="section"
      maxW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgcolor="var(--colors-blue-400)"
      color='var(--colors-black)'
      boxShadow="xs"
      p="10px"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="nowrap"
      gap='20px'>
      <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
      <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
      <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
      <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
    </Box>
  </div>
);

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(<App />);
