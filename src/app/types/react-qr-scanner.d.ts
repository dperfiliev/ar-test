declare module 'react-qr-scanner' {
    import * as React from 'react';
  
    interface QRScannerProps {
      onScan?: (data: string | null) => void;
      onError?: (error: any) => void;
      style?: React.CSSProperties;
    }
  
    const QRScanner: React.FC<QRScannerProps>;
  
    export default QRScanner;
  }
  