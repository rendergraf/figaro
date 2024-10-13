// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import { rootStyles, Box, Button, Image, Link } from '@figaro/ui';


const App = () => (
  <div className={rootStyles}>
    <Button variant='secondary' size='lg'>Click Me</Button>
    <Link variant='primary' size='lg' href='https://www.google.com'>Google</Link>
    <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
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
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flexWrap="nowrap"
      gap='10px'>
      <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
      <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
      <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
      <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
    </Box>
  </div>
);

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(<App />);
