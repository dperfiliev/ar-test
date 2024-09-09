"use client";

import { useState } from 'react';
import QrScanner from './components/QrScanner';
import ThreeDViewer from './components/ThreeDViewer';

// Тип для данных QR-кода
type QRData = {
  [key: string]: {
    modelUrl: string;
    message: string;
  };
};

const qrData: QRData = {
  "https://example.com/qr1": {
    modelUrl: "/models/model1.glb",
    message: "С днём рождения! Желаю счастья и здоровья!"
  },
  "https://example.com/qr2": {
    modelUrl: "/models/model2.glb",
    message: "С новым годом! Пусть сбудется всё, о чём мечтаешь!"
  }
};

const Home = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleScan = (data: string | null) => {
    if (data && data in qrData) {
      const { modelUrl, message } = qrData[data];
      setSelectedModel(modelUrl);
      setMessage(message);
    } else {
      console.log("Unknown QR code data");
    }
  };

  return (
    <div>
      <h1>Виртуальные открытки</h1>
      <QrScanner onScan={handleScan} />
      {selectedModel && <ThreeDViewer modelUrl={selectedModel} />}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Home;
