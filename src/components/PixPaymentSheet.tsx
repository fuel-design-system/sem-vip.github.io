import { useEffect } from 'react';
import '../styles/PixPaymentSheet.scss';

interface PixPaymentSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyPix: () => void;
}

export default function PixPaymentSheet({ isOpen, onClose, onCopyPix }: PixPaymentSheetProps) {
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

  const handleWhatsAppShare = () => {
    const pixKey = '7192d4fd-1d90-4b2c-90fa-67a4akfl';
    const message = encodeURIComponent(`Minha chave Pix: ${pixKey}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <>
      <div className={`sheet-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`pix-payment-sheet ${isOpen ? 'open' : ''}`}>
        <div className="sheet-content">
          {/* Header */}
          <div className="sheet-header">
            <div className="sheet-handle"></div>
            <div className="close-button-container">
              <button className="close-button" onClick={onClose}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 13L13 3Z" fill="#636B7E"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 3L13 13Z" fill="#636B7E"/>
                  <path d="M3 13L13 3M3 3L13 13" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Icon + Title */}
          <div className="icon-title-section">
            <div className="pix-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.589 22.2031C19.9112 21.881 20.4729 21.88 20.7951 22.2031L25.385 26.7929C26.2339 27.6414 27.3632 28.1093 28.5637 28.1093H29.1164L23.2863 33.9385C21.4708 35.7538 18.5274 35.7538 16.7121 33.9385L10.8996 28.1259H11.8039C13.0044 28.1259 14.1336 27.6581 14.9826 26.8095L19.589 22.2031ZM9.5978 13.1757C9.67184 13.2036 9.75021 13.2235 9.83413 13.2235H11.8039C12.6319 13.2235 13.4424 13.5597 14.0275 14.1454L18.6349 18.7519C19.0643 19.1809 19.6282 19.3964 20.1926 19.3964C20.7563 19.3963 21.3208 19.1813 21.7502 18.7519L26.3391 14.162C26.9242 13.5765 27.7356 13.2411 28.5637 13.2411H30.1652C30.2538 13.2411 30.3378 13.2213 30.4152 13.1903L33.9377 16.7128C35.7531 18.5283 35.7531 21.4716 33.9377 23.287L30.4152 26.8105C30.3378 26.7794 30.2538 26.7598 30.1652 26.7597H28.5637C27.7356 26.7597 26.9242 26.4234 26.3391 25.8378L21.7502 21.249C20.9184 20.4164 19.4666 20.417 18.634 21.249L14.0275 25.8544C13.4424 26.44 12.6319 26.7763 11.8039 26.7763H9.83413C9.75024 26.7764 9.67195 26.7963 9.5978 26.8242L6.06068 23.287C4.24546 21.4715 4.24533 18.5282 6.06068 16.7128L9.5978 13.1757ZM16.7121 6.06139C18.5273 4.24605 21.4707 4.24622 23.2863 6.06139L29.1164 11.8915H28.5627C27.3625 11.8916 26.2338 12.3587 25.385 13.2069L20.7951 17.7978C20.4626 18.1311 19.9208 18.1295 19.589 17.7978L14.9826 13.1903C14.1336 12.3418 13.0044 11.8739 11.8039 11.8739L10.8996 11.8749L16.7121 6.06139Z" fill="#0769DA"/>
              </svg>
            </div>
            <h2 className="sheet-title">Receba o pagamento do frete no Pix da sua Carteira Fretebras:</h2>
          </div>

          {/* Bank Info */}
          <div className="bank-info-section">
            <p className="bank-info-text">Valor será transferido automaticamente para:</p>
            <div className="bank-container">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.70045 11.6V6.06671H4.56711V11.6H3.70045ZM7.56712 11.6V6.06671H8.43378V11.6H7.56712ZM2.11328 13.2667V12.4H13.8876V13.2667H2.11328ZM11.4338 11.6V6.06671H12.3004V11.6H11.4338ZM2.11328 5.26671V4.05138L8.00045 1.17188L13.8876 4.05138V5.26671H2.11328Z" fill="#636B7E"/>
              </svg>
              <span className="bank-name">Itaú Unibanco SA.</span>
            </div>
          </div>

          {/* Pix Card */}
          <div className="pix-card-section">
            <div className="pix-card">
              <div className="pix-key-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.82556 8.94134C7.96318 8.80376 8.20275 8.80333 8.34041 8.94134L10.3013 10.9015C10.664 11.264 11.1463 11.464 11.6592 11.464H11.8951L9.40525 13.9546L9.25369 14.0906C8.52569 14.6842 7.47536 14.6842 6.74744 14.0906L6.59666 13.9546L4.11306 11.471H4.49978C4.94845 11.471 5.37394 11.3184 5.71619 11.0374L5.8576 10.9093L7.82556 8.94134ZM3.55681 5.08509C3.58847 5.09701 3.62249 5.1054 3.65838 5.1054H4.49978C4.85345 5.10545 5.19987 5.249 5.44978 5.49915L7.41775 7.46712C7.60115 7.65028 7.84238 7.74212 8.08338 7.74212C8.32411 7.74202 8.56484 7.64972 8.74822 7.46634L10.7092 5.50618C10.9279 5.28726 11.2204 5.1503 11.5271 5.11946L11.6592 5.11243H12.3435C12.3812 5.11238 12.4168 5.10375 12.4498 5.09055L13.9553 6.59602C14.7304 7.3715 14.7304 8.62834 13.9553 9.40384L12.4498 10.9093C12.4168 10.8961 12.3812 10.8875 12.3435 10.8874H11.6592C11.3054 10.8874 10.9591 10.7438 10.7092 10.4937L8.74822 8.53352C8.39291 8.17793 7.77343 8.17822 7.41775 8.53352L5.44978 10.5007C5.19987 10.7508 4.85345 10.8944 4.49978 10.8945H3.65838C3.62249 10.8945 3.58853 10.9029 3.55681 10.9148L2.04666 9.40384C1.31963 8.67679 1.27386 7.52681 1.90994 6.7468L2.04666 6.59602L3.55681 5.08509ZM6.59666 2.04602C7.37215 1.27047 8.62964 1.27047 9.40525 2.04602L11.8951 4.53587H11.6592C11.1463 4.53587 10.664 4.73588 10.3013 5.09837L8.34041 7.0593C8.1984 7.20151 7.96724 7.20079 7.82556 7.0593L5.8576 5.09134C5.49498 4.72889 5.01255 4.52889 4.49978 4.52884H4.11306L6.59666 2.04602Z" fill="#636B7E"/>
                </svg>
                <div className="pix-key-text-container">
                  <span className="pix-key-label">Sua chave Pix aleatória:</span>
                  <span className="pix-key-value">7192d4fd-1d90-4b2c-90fa-67a4akfl</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="button-group">
                <button className="primary-button" onClick={onCopyPix}>
                  <span>Copiar Pix</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8 3.29688V1.6125C10.8 1.27423 10.5258 1 10.1875 1H1.6125C1.27423 1 1 1.27422 1 1.6125V10.1875C1 10.5258 1.27423 10.8 1.6125 10.8H3.29688M5.2 5.8125C5.2 5.47422 5.47423 5.2 5.8125 5.2H14.3875C14.7258 5.2 15 5.47423 15 5.8125V14.3875C15 14.7258 14.7258 15 14.3875 15H5.8125C5.47422 15 5.2 14.7258 5.2 14.3875V5.8125Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="secondary-button" onClick={handleWhatsAppShare}>
                  <span>Enviar para WhatsApp</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9373 9.78543C11.8914 9.70036 11.7603 9.64364 11.5702 9.54439C11.3801 9.44514 10.4295 8.94179 10.259 8.87089C10.0886 8.8 9.95089 8.76455 9.82633 8.97723C9.70177 9.18992 9.49854 9.49476 9.38709 9.62946C9.27564 9.76416 9.16419 9.78543 8.96751 9.67909C7.84566 9.15042 6.89905 8.26524 6.25339 7.14107C6.14194 6.93547 6.25339 6.82204 6.33862 6.72279C6.65985 6.37541 6.66641 6.42503 6.74508 6.25489C6.80223 6.14229 6.80223 6.00592 6.74508 5.89332C6.64674 5.7728 6.28617 4.7661 6.12227 4.35491C5.95838 3.94373 5.13234 3.86574 4.8111 4.24857C1.40206 8.13359 9.70832 14.7906 11.8324 10.7354C12.0097 10.462 12.0491 10.1109 11.9373 9.79961M8.00623 1.00005C4.15538 0.986156 1.02058 4.11707 1.00001 7.99759C0.997252 9.47282 1.46395 10.9101 2.33157 12.0983L1.46046 14.7004L4.14845 13.8414C6.29237 15.26 9.03416 15.3848 11.2962 14.1666C13.5583 12.9484 14.979 10.5821 15 7.99759C14.9794 4.12198 11.8522 0.993082 8.00623 1.00005Z" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Warning Callout */}
            <div className="warning-callout">
              <div className="callout-content">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.72266 16.584L10.0014 2.83398L18.2802 16.584H1.72266ZM9.99703 14.3404C10.1629 14.3404 10.3034 14.2843 10.4185 14.1721C10.5336 14.0599 10.5912 13.9209 10.5912 13.755C10.5912 13.5892 10.5351 13.4487 10.4229 13.3336C10.3106 13.2184 10.1716 13.1609 10.0058 13.1609C9.83995 13.1609 9.69946 13.217 9.58432 13.3292C9.46918 13.4414 9.41161 13.5804 9.41161 13.7463C9.41161 13.9121 9.46773 14.0526 9.57995 14.1677C9.69217 14.2829 9.8312 14.3404 9.99703 14.3404ZM9.45974 12.1609H10.5431V8.16086H9.45974V12.1609Z" fill="#111111"/>
                </svg>
                <span className="callout-text">Receber por fora da carteira Fretebras pode bloquear sua conta.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
