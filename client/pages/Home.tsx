export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '100%' }}>
        {/* Busca e Perfil */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
          {/* Campo de Busca */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flex: '1',
            height: '53px',
            padding: '0 16px',
            borderRadius: '48px',
            backgroundColor: '#FFF',
            boxShadow: '0 14px 64px -4px rgba(17, 17, 17, 0.08), 0 8px 22px -6px rgba(17, 17, 17, 0.12)',
            cursor: 'pointer'
          }}>
            <div style={{
              flex: '1',
              color: '#111',
              fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '1.5'
            }}>
              Busque fretes agora
            </div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_search)">
                <path d="M12.9908 11.4056L10.416 8.85556C11.1199 7.79963 11.4512 6.53849 11.3572 5.27247C11.2632 4.00646 10.7494 2.80819 9.89733 1.86801C9.04526 0.927835 7.90381 0.299673 6.65432 0.0833158C5.40483 -0.133041 4.11896 0.0748142 3.00098 0.673863C1.88299 1.27291 0.997011 2.2288 0.483781 3.38967C-0.0294478 4.55054 -0.140492 5.84982 0.168289 7.08111C0.47707 8.3124 1.18797 9.40508 2.18805 10.1856C3.18813 10.9661 4.42004 11.3896 5.68808 11.3889C6.81344 11.39 7.9133 11.0533 8.84555 10.4222L11.4259 13.0056C11.6338 13.2125 11.9151 13.3287 12.2083 13.3287C12.5015 13.3287 12.7828 13.2125 12.9908 13.0056C13.0982 12.9019 13.1836 12.7776 13.242 12.6402C13.3003 12.5027 13.3304 12.3549 13.3304 12.2056C13.3304 12.0562 13.3003 11.9084 13.242 11.7709C13.1836 11.6335 13.0982 11.5092 12.9908 11.4056ZM5.68808 1.63334C6.48355 1.63334 7.26116 1.86943 7.92264 2.31176C8.58412 2.75409 9.09978 3.38282 9.40444 4.11847C9.7091 4.85413 9.7891 5.6637 9.63432 6.44486C9.47953 7.22602 9.09691 7.94371 8.53482 8.50722C7.97273 9.07074 7.2564 9.45479 6.47635 9.61083C5.69631 9.76686 4.88756 9.68789 4.15234 9.38389C3.41711 9.07989 2.7884 8.56451 2.34566 7.90287C1.90293 7.24124 1.66604 6.46306 1.66495 5.66667C1.66494 4.59793 2.08863 3.57288 2.84296 2.81664C3.59728 2.0604 4.62057 1.63481 5.68808 1.63334Z" fill="#111111"/>
              </g>
              <defs>
                <clipPath id="clip0_search">
                  <rect width="13.3333" height="13.3333" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Avatar e Avaliação */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#636B7E',
                color: '#FFF',
                fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '1.5'
              }}>
                A
              </div>
              <svg style={{ position: 'absolute', right: '-3px', top: '-2px', width: '16px', height: '16px' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="6" fill="#F4F4F5"/>
                <circle cx="8" cy="8" r="4" fill="#0C884C"/>
              </svg>
            </div>
            <div style={{
              display: 'flex',
              height: '23px',
              padding: '2px 8px',
              alignItems: 'center',
              gap: '4px',
              borderRadius: '500px',
              backgroundColor: '#F4F4F5',
              marginTop: '-8px'
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.32286 1.19811L7.80986 4.14441L10.6719 4.42798C10.811 4.43954 10.9307 4.53098 10.9784 4.66218C11.0262 4.79339 10.9932 4.94038 10.8941 5.03866L8.53869 7.37339L9.41196 10.5459C9.44846 10.6834 9.40094 10.8294 9.29057 10.9191C9.18019 11.0088 9.02749 11.0254 8.90045 10.9615L5.99889 9.52456L3.10133 10.9597C2.97429 11.0236 2.82158 11.007 2.71121 10.9173C2.60084 10.8277 2.55332 10.6816 2.58982 10.5441L3.46308 7.37161L1.10593 5.03688C1.00677 4.9386 0.973838 4.79161 1.02158 4.66041C1.06932 4.5292 1.18901 4.43776 1.32813 4.4262L4.19014 4.14264L5.67491 1.19811C5.73717 1.0765 5.86228 1 5.99889 1C6.1355 1 6.2606 1.0765 6.32286 1.19811Z" fill="#F5963D"/>
              </svg>
              <span style={{
                color: '#636B7E',
                fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '12px',
                fontWeight: '700',
                lineHeight: '1.6'
              }}>4.8</span>
            </div>
          </div>
        </div>

        {/* Filtros com Chips */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}>
          <div style={{
            display: 'flex',
            minWidth: 'fit-content',
            minHeight: '32px',
            maxHeight: '32px',
            padding: '0 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '500px',
            border: '1px solid #0769DA',
            backgroundColor: '#FFF',
            cursor: 'pointer',
            flexShrink: '0',
            whiteSpace: 'nowrap'
          }}>
            <span style={{
              color: '#111',
              fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>Tipo de carga</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6L8.18844 9.91964C8.13849 9.97109 8.0707 10 8 10C7.9293 10 7.86151 9.97109 7.81156 9.91964L4 6" stroke="#111111" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div style={{
            display: 'flex',
            minWidth: 'fit-content',
            minHeight: '32px',
            maxHeight: '32px',
            padding: '0 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '500px',
            border: '1px solid rgba(0, 43, 92, 0.16)',
            backgroundColor: '#FFF',
            cursor: 'pointer',
            flexShrink: '0',
            whiteSpace: 'nowrap'
          }}>
            <span style={{
              color: '#111',
              fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>Veículo</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6L8.18844 9.91964C8.13849 9.97109 8.0707 10 8 10C7.9293 10 7.86151 9.97109 7.81156 9.91964L4 6" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div style={{
            display: 'flex',
            minWidth: 'fit-content',
            minHeight: '32px',
            maxHeight: '32px',
            padding: '0 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '500px',
            border: '1px solid rgba(0, 43, 92, 0.16)',
            backgroundColor: '#FFF',
            cursor: 'pointer',
            flexShrink: '0',
            whiteSpace: 'nowrap'
          }}>
            <span style={{
              color: '#111',
              fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>Carroceria</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6L8.18844 9.91964C8.13849 9.97109 8.0707 10 8 10C7.9293 10 7.86151 9.97109 7.81156 9.91964L4 6" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div style={{
            display: 'flex',
            minWidth: 'fit-content',
            minHeight: '32px',
            maxHeight: '32px',
            padding: '0 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '500px',
            border: '1px solid rgba(0, 43, 92, 0.16)',
            backgroundColor: '#FFF',
            cursor: 'pointer',
            flexShrink: '0',
            whiteSpace: 'nowrap'
          }}>
            <span style={{
              color: '#111',
              fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>Raio</span>
          </div>
        </div>
      </div>
    </div>
  );
}
