// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import { Button } from '@figaro/ui/button';

const App = () => (
  <>
    <Button variant='primary' size='md'>Click Me</Button>
  </>
);

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(<App />);
