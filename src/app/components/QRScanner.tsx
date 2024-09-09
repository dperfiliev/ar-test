import React from 'react';
import QRScanner from 'react-qr-scanner';

interface QrScannerProps {
  onScan: (data: string | null) => void;
}

const QrScanner: React.FC<QrScannerProps> = ({ onScan }) => {
  const handleScan = (data: string | null) => {
    if (data) {
      onScan(data);
    }
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  return (
    <div>
      <QRScanner
        onScan={handleScan}
        onError={handleError}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QrScanner;
