import { useEffect } from 'react';
import '../styles/ServiceFeeBottomSheet.scss';

interface ServiceFeeBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onLearnMore: () => void;
}

export default function ServiceFeeBottomSheet({ isOpen, onClose, onLearnMore }: ServiceFeeBottomSheetProps) {
  // Prevent body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="service-fee-overlay" onClick={onClose} />
      <div className="service-fee-bottom-sheet">
        <div className="sheet-holder" />
        
        <button className="sheet-close-button" onClick={onClose} aria-label="Fechar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 16.25L16.25 3.75M3.75 3.75L16.25 16.25" stroke="#BABEC9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="sheet-content">
          <div className="sheet-title-section">
            <h2 className="sheet-title">Atenção! Caso feche esse frete, será cobrado uma taxa de serviço:</h2>
          </div>

          <div className="fee-card">
            <div className="fee-row">
              <div className="fee-label">Valor da taxa:</div>
              <div className="fee-value">R$ 49,90</div>
            </div>
          </div>

          <div className="sheet-buttons">
            <button className="primary-button" onClick={onClose}>
              Ok, entendi
            </button>
            <button className="secondary-button" onClick={onLearnMore}>
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
