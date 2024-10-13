// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import { Button, Image, Link } from '@figaro/ui';

const App = () => (
  <>
    <Button variant='secondary' size='lg'>Click Me</Button>
    <Link variant='primary' size='lg' href='https://www.google.com'>Google</Link>
    <Image borderRadius='full' objectFit='cover' loading='lazy' src='https://placehold.co/150' alt='placeholder' title='Foto' />
  </>
);

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(<App />);
