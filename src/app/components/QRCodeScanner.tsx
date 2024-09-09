// components/QRCodeScanner.tsx
import React, { useState } from 'react';
import { BrowserMultiFormatReader, Result } from '@zxing/library';

interface QRCodeScannerProps {
  onScan: (result: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
  const [scanning, setScanning] = useState(false);

  const startScanning = () => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromInputVideoDevice(undefined, 'video')
      .then((result: Result) => {
        onScan(result.getText()); // Используйте getText() для получения текста результата
        setScanning(false);
      })
      .catch(err => console.error(err));

    setScanning(true);
  };

  return (
    <div>
      {!scanning ? (
        <button onClick={startScanning}>Start Scanning</button>
      ) : (
        <video id="video" width="300" height="200" />
      )}
    </div>
  );
};

export default QRCodeScanner;
