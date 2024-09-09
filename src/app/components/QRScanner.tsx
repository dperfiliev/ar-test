import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = ({ onScan }) => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data: string | null) => {
    if (data) {
      setScanResult(data);
      onScan(data); // Передаем данные из QR-кода в родительский компонент
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {scanResult && <p>Результат сканирования: {scanResult}</p>}
    </div>
  );
};

export default QRScanner;
