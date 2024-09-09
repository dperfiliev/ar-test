// components/QRCodeScanner.tsx
import React, { useEffect, useRef } from 'react';
import { BrowserMultiFormatReader, Result } from '@zxing/library';

interface QRCodeScannerProps {
  onScan: (result: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (videoRef.current) {
      codeReader.decodeFromInputVideoDevice(undefined, videoRef.current)
        .then((result: Result) => {
          onScan(result.getText()); // Передаем текст результата в родительский компонент
        })
        .catch(err => console.error(err));
    }

    return () => {
      codeReader.reset(); // Очистка при размонтировании
    };
  }, [onScan]);

  return (
    <div>
      <video ref={videoRef} width="100%" height="100%" autoPlay />
    </div>
  );
};

export default QRCodeScanner;
