// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import { Button, Link } from '@figaro/ui';

const App = () => (
  <>
    <Button variant='success' size='md'>Click Me</Button>
    <Link variant='secondary' href='www.google.com'>Link Secondary</Link>
  </>
);

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(<App />);
