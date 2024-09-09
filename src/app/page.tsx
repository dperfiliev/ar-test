"use client"

import { useState } from 'react';
import QRScanner from './components/QRScanner';
import ThreeDViewer from './components/ThreeDViewer';

const ARPage = () => {
  const [data, setData] = useState(null);

  const handleScan = async (qrData) => {
    const response = await fetch(qrData); // qrData — это URL к JSON файлу
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div>
      <h1>Сканируйте QR-код для отображения 3D модели</h1>
      <QRScanner onScan={handleScan} />
      {data && (
        <div>
          <ThreeDViewer modelUrl={data.modelUrl} />
          <p>{data.message}</p>
        </div>
      )}
    </div>
  );
};

export default ARPage;
