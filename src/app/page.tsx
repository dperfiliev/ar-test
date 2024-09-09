"use client"

import { useState } from 'react';
import QRCodeScanner from './components/QRCodeScanner';
import ARModel from './components/ARModel';

interface Greeting {
  id: string;
  modelUrl: string;
  message: string;
}

const Home: React.FC = () => {
  const [greeting, setGreeting] = useState<Greeting | null>(null);

  const fetchGreeting = async (id: string) => {
    const response = await fetch('/data/greetings.json');
    const greetings: Greeting[] = await response.json();
    const foundGreeting = greetings.find(g => g.id === id);
    setGreeting(foundGreeting || null);
  };

  const handleScan = (result: string) => {
    const [, id] = result.split('/');
    fetchGreeting(id);
  };

  return (
    <div>
      <QRCodeScanner onScan={handleScan} />
      {greeting && (
        <>
          <ARModel modelUrl={greeting.modelUrl} />
          <p>{greeting.message}</p>
        </>
      )}
    </div>
  );
};

export default Home;
