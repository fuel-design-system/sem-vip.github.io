import { useEffect } from "react";
import { ArrowLeft, Star, Box, MessageSquare } from "lucide-react";

export default function Index() {
  // Register service worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch((err) => console.error('Service Worker registration failed:', err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile container with max-width for larger screens */}
      <div className="mx-auto max-w-md bg-white min-h-screen relative pb-32">
        {/* Android Status Bar */}
        <div className="h-6 bg-white flex items-center justify-between px-3">
          <span className="text-sm font-medium text-[rgba(17,17,17,0.9)] font-roboto">12:30</span>
          <div className="flex items-center gap-1.5">
            {/* Cellular Icon */}
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M2.11719 7.5C2.70196 7.5 3.17676 8.00368 3.17676 8.625V10.875C3.17676 11.4963 2.70196 12 2.11719 12H1.05859C0.473928 11.9999 1.45508e-06 11.4962 0 10.875V8.625C0 8.00376 0.473927 7.50013 1.05859 7.5H2.11719ZM7.05859 5.25C7.64337 5.25 8.11719 5.75368 8.11719 6.375V10.875C8.11719 11.4963 7.64337 12 7.05859 12H6C5.41524 12 4.94141 11.4963 4.94141 10.875V6.375C4.94141 5.75369 5.41524 5.25001 6 5.25H7.05859ZM12 2.625C12.5848 2.62501 13.0586 3.12869 13.0586 3.75V10.875C13.0586 11.4963 12.5848 12 12 12H10.9414C10.3566 12 9.88281 11.4963 9.88281 10.875V3.75C9.88281 3.12868 10.3566 2.625 10.9414 2.625H12ZM16.9414 0C17.5261 0.000132092 18 0.503761 18 1.125V10.875C18 11.4962 17.5261 11.9999 16.9414 12H15.8828C15.298 12 14.8232 11.4963 14.8232 10.875V1.125C14.8232 0.50368 15.298 0 15.8828 0H16.9414Z" fill="rgba(17,17,17,0.9)"/>
            </svg>
            {/* WiFi Icon */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M5.68555 9.19238C7.02183 8.01196 8.97916 8.01192 10.3154 9.19238C10.3826 9.25585 10.4219 9.34583 10.4238 9.44043C10.4257 9.5351 10.3899 9.62704 10.3252 9.69336L8.23242 11.8984C8.17108 11.9633 8.08726 12 8 12C7.91292 11.9999 7.82979 11.9631 7.76855 11.8984L5.67578 9.69336C5.61113 9.62699 5.57523 9.5351 5.57715 9.44043C5.57909 9.3458 5.61829 9.25582 5.68555 9.19238ZM2.89355 6.25C5.77269 3.45271 10.2313 3.45254 13.1104 6.25C13.1753 6.31555 13.2119 6.40569 13.2129 6.5C13.2138 6.59424 13.1787 6.68502 13.1152 6.75195L11.9053 8.0293C11.7806 8.15955 11.579 8.16204 11.4512 8.03516C10.5057 7.14097 9.27541 6.64543 8 6.64551C6.7255 6.64617 5.49649 7.14155 4.55176 8.03516C4.42388 8.16207 4.22231 8.15967 4.09766 8.0293L2.88867 6.75195C2.82496 6.6851 2.78919 6.59433 2.79004 6.5C2.79096 6.40566 2.82858 6.31554 2.89355 6.25ZM0.100586 3.31543C4.5165 -1.10519 11.4835 -1.10519 15.8994 3.31543C15.9633 3.3811 15.9995 3.47081 16 3.56445C16.0005 3.65801 15.9654 3.74804 15.9023 3.81445L14.6914 5.09082C14.5666 5.22181 14.364 5.22366 14.2373 5.09473C12.5548 3.4239 10.3215 2.49229 8 2.49219C5.67846 2.4923 3.44526 3.42389 1.7627 5.09473C1.63607 5.22376 1.43422 5.22197 1.30957 5.09082L0.0976562 3.81445C0.0345837 3.748 -0.000547202 3.65803 0 3.56445C0.000589494 3.47086 0.0366912 3.38104 0.100586 3.31543Z" fill="rgba(17,17,17,0.9)"/>
            </svg>
            {/* Battery Icon */}
            <div className="relative w-6 h-3">
              <div className="absolute inset-0 border border-[rgba(17,17,17,0.35)] rounded-[2.667px] opacity-40"></div>
              <div className="absolute left-[2px] top-[2px] w-[18px] h-2 bg-[rgba(17,17,17,0.9)] rounded-[1.333px]"></div>
            </div>
          </div>
        </div>

        {/* Top Bar */}
        <div className="h-16 flex items-center justify-between px-2">
          <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-text-medium" strokeWidth={1.25} />
          </button>
          <h1 className="flex-1 text-center text-sm font-medium text-text-strong font-satoshi leading-[150%]">
            Frete MG-SP, Pedras
          </h1>
          <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Star className="w-5 h-5 text-text-medium" strokeWidth={1.25} />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 space-y-6">
          {/* Time and Location */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-text-medium font-satoshi leading-[150%]">
              Há 3min •  50km da sua localização
            </p>

            {/* Route */}
            <div className="flex gap-3">
              {/* Route Graphic */}
              <div className="flex flex-col items-center gap-1 py-1 pt-[7px]">
                <svg width="7" height="90" viewBox="0 0 7 90" fill="none">
                  <circle cx="3.5" cy="7.5" r="3" stroke="#BABEC9"/>
                  <rect x="3" y="15" width="1" height="60" fill="#DFE1E6"/>
                  <path d="M6.19141 79.5L3.5 84.8818L0.808594 79.5H6.19141Z" stroke="#BABEC9"/>
                </svg>
              </div>

              {/* Locations */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-base font-medium text-text-strong font-satoshi leading-[150%]">
                    Três Corações, MG
                  </h2>
                  <p className="text-xs font-medium text-text-medium font-satoshi leading-[160%] tracking-[0.24px]">
                    30/11/2023
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-medium text-text-strong font-satoshi leading-[150%]">
                    Guarujá, SP
                  </h2>
                  <p className="text-xs font-medium text-text-medium font-satoshi leading-[160%] tracking-[0.24px]">
                    01/12/2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">
              CARRETA DE 15 METROS / PESO 5 TON LIVRE DE CARGA E DESCARGA / 5 DIAS PARA DEPOSITO DEPOIS DO CANHOTO.
            </p>
          </div>

          {/* Cargo */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-text-medium font-satoshi leading-[150%]">Carga</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Box className="w-4 h-4 text-text-medium flex-shrink-0" strokeWidth={1} />
                <span className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">Pedras</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="14" height="15" viewBox="0 0 15 16" fill="none" className="flex-shrink-0">
                  <path d="M0.513672 4.68359L2.49121 0.774306C2.57631 0.606062 2.74883 0.5 2.93737 0.5H7.52892M14.1563 4.68359L12.5837 0.811849C12.5071 0.623319 12.324 0.5 12.1205 0.5H7.52892M12.5837 13.1121H8.32526M7.52892 0.5V4.34143M7.52892 4.34143H0.5V14.9979H14.1561V4.34143H7.52892Z" stroke="#636B7E" strokeLinejoin="bevel"/>
                </svg>
                <span className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">500 kg (total)</span>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <rect width="11" height="11" y="5" stroke="#636B7E"/>
                    <path d="M0.0732233 1.6533C-0.0244078 1.75093 -0.0244078 1.90922 0.0732233 2.00685L1.66421 3.59784C1.76184 3.69548 1.92014 3.69548 2.01777 3.59784C2.1154 3.50021 2.1154 3.34192 2.01777 3.24429L0.603553 1.83008L2.01777 0.415864C2.1154 0.318233 2.1154 0.159942 2.01777 0.062311C1.92014 -0.0353201 1.76184 -0.0353201 1.66421 0.062311L0.0732233 1.6533ZM11.4268 2.00685C11.5244 1.90922 11.5244 1.75093 11.4268 1.6533L9.83579 0.0623103C9.73816 -0.0353208 9.57986 -0.0353207 9.48223 0.0623104C9.3846 0.159941 9.3846 0.318233 9.48223 0.415864L10.8964 1.83008L9.48223 3.24429C9.3846 3.34192 9.3846 3.50021 9.48223 3.59784C9.57986 3.69548 9.73816 3.69548 9.83579 3.59784L11.4268 2.00685ZM0.25 1.83008L0.25 2.08008L11.25 2.08008L11.25 1.83008L11.25 1.58008L0.25 1.58008L0.25 1.83008Z" fill="#636B7E"/>
                    <path d="M1.66429 11.4268C1.76192 11.5244 1.92021 11.5244 2.01784 11.4268L3.60883 9.83579C3.70646 9.73816 3.70646 9.57986 3.60883 9.48223C3.5112 9.3846 3.35291 9.3846 3.25528 9.48223L1.84106 10.8964L0.426851 9.48223C0.32922 9.3846 0.170929 9.3846 0.0732974 9.48223C-0.0243337 9.57986 -0.0243337 9.73816 0.0732974 9.83579L1.66429 11.4268ZM2.01784 0.0732241C1.92021 -0.0244074 1.76192 -0.0244074 1.66429 0.0732241L0.0732971 1.66421C-0.024334 1.76184 -0.024334 1.92014 0.0732971 2.01777C0.170928 2.1154 0.329219 2.1154 0.426851 2.01777L1.84106 0.603554L3.25528 2.01777C3.35291 2.1154 3.5112 2.1154 3.60883 2.01777C3.70646 1.92014 3.70646 1.76184 3.60883 1.66421L2.01784 0.0732241ZM1.84106 11.25L2.09106 11.25L2.09106 0.25L1.84106 0.25L1.59106 0.25L1.59106 11.25L1.84106 11.25Z" fill="#636B7E"/>
                    <rect x="4" y="5" width="3" height="4" stroke="#636B7E"/>
                  </svg>
                  <span className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">1.00 m³ (unidade)</span>
                </div>
                <span className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">1 unidade</span>
              </div>
            </div>
          </div>

          {/* Vehicle Compatibility */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-primary-weakest flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.793 4.04004L5.79688 13.0361L1.20703 8.44629L2.28027 7.37305L5.79688 10.8896L13.7197 2.9668L14.793 4.04004Z" fill="#0769DA" stroke="#0769DA"/>
              </svg>
            </div>
            <p className="flex-1 text-sm font-satoshi leading-[150%]">
              <span className="font-medium text-text-medium">Seu veículo Bitruck | Graneleiro é compatível com a carga</span>
              <span className="font-bold text-text-primary">...Ver todos</span>
            </p>
          </div>

          {/* Service Fee Card */}
          <div className="space-y-2">
            <p className="text-base font-medium text-text-strong font-satoshi leading-[150%]">
              Uma taxa de serviço será cobrada caso você carregue esse frete
            </p>
            <div className="flex items-center justify-between">
              <div className="space-y-0">
                <p className="text-sm font-medium text-text-medium font-satoshi leading-[150%]">Valor da taxa:</p>
                <button className="text-xs font-medium text-text-primary font-satoshi leading-[160%] underline">
                  Saiba mais
                </button>
              </div>
              <p className="text-base font-bold text-text-strong font-satoshi leading-[150%]">R$ 49,90</p>
            </div>

            {/* Divider */}
            <div className="py-2">
              <div className="h-px bg-border"></div>
            </div>

            {/* VIP Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.7407 8.12682L9.77591 4.01953H10.0163L12.239 8.12682H7.7407ZM9.62841 16.7599L2.60612 8.87057H9.62841V16.7599ZM10.3722 16.7599V8.87057H17.3945L10.3722 16.7599ZM13.0836 8.12682L10.699 3.70703H15.8722L17.6236 8.12682H13.0836ZM2.37695 8.12682L4.12841 3.70703H9.11404L6.89612 8.12682H2.37695Z" fill="#0769DA"/>
                </svg>
                <p className="text-xs font-bold text-text-strong font-satoshi leading-[160%] text-center">
                  Motorista VIP fica isento de pagar a taxa.
                </p>
              </div>
              <button className="w-full min-h-[48px] px-4 rounded-pill bg-[rgba(0,43,92,0.06)] hover:bg-[rgba(0,43,92,0.1)] transition-colors">
                <span className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">
                  Assine o VIP por R$ 69,00/ mês
                </span>
              </button>
            </div>
          </div>

          {/* Transporter Info */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-medium text-text-strong font-satoshi leading-[150%]">
                Transportadora ativa há 4 anos
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-text-strong font-satoshi leading-[150%]">4.4</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.32286 1.19811L7.80986 4.14441L10.6719 4.42798C10.811 4.43954 10.9307 4.53098 10.9784 4.66218C11.0262 4.79339 10.9932 4.94038 10.8941 5.03866L8.53869 7.37339L9.41196 10.5459C9.44846 10.6834 9.40094 10.8294 9.29057 10.9191C9.18019 11.0088 9.02749 11.0254 8.90045 10.9615L5.99889 9.52456L3.10133 10.9597C2.97429 11.0236 2.82158 11.007 2.71121 10.9173C2.60084 10.8277 2.55332 10.6816 2.58982 10.5441L3.46308 7.37161L1.10593 5.03688C1.00677 4.9386 0.973838 4.79161 1.02158 4.66041C1.06932 4.5292 1.18901 4.43776 1.32813 4.4262L4.19014 4.14264L5.67491 1.19811C5.73717 1.0765 5.86228 1 5.99889 1C6.1355 1 6.2606 1.0765 6.32286 1.19811Z" fill="#F5963D"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-text-medium font-satoshi leading-[160%] tracking-[0.24px]">
                  (1.700 avaliações)
                </span>
              </div>
            </div>
            <button className="h-12 px-4 rounded-pill bg-[rgba(0,43,92,0.06)] hover:bg-[rgba(0,43,92,0.1)] transition-colors">
              <span className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">Ver perfil</span>
            </button>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-text-medium font-satoshi leading-[150%]">Formas de pagamento</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <path d="M0.5 9.5V15.5M0.5 14.5H11.5C11.5 13.9696 11.2893 13.4609 10.9142 13.0858C10.5391 12.7107 10.0304 12.5 9.5 12.5H7M7 12.5C7 11.9696 6.78929 11.4609 6.41421 11.0858C6.03914 10.7107 5.53043 10.5 5 10.5H0.5M7 12.5H4.5M12.0667 2.98667H10.62C10.4983 2.98311 10.3771 3.00358 10.2633 3.0469C10.1495 3.09021 10.0454 3.15553 9.95683 3.23911C9.86829 3.32269 9.7971 3.4229 9.74731 3.53401C9.69752 3.64513 9.67012 3.76496 9.66667 3.88667C9.66977 4.07018 9.72891 4.24835 9.83616 4.3973C9.9434 4.54625 10.0936 4.65885 10.2667 4.72L11.7333 5.28C11.9064 5.34115 12.0566 5.45375 12.1638 5.6027C12.2711 5.75165 12.3302 5.92982 12.3333 6.11333C12.3299 6.23504 12.3025 6.35487 12.2527 6.46599C12.2029 6.5771 12.1317 6.67731 12.0432 6.76089C11.9546 6.84447 11.8505 6.90979 11.7367 6.9531C11.6229 6.99642 11.5017 7.01689 11.38 7.01333H9.93333M11 2.98667V2.16667M11 7.83333V7.01333M15.5 5C15.5 7.48528 13.4853 9.5 11 9.5C8.51472 9.5 6.5 7.48528 6.5 5C6.5 2.51472 8.51472 0.5 11 0.5C13.4853 0.5 15.5 2.51472 15.5 5Z" stroke="#636B7E" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="flex-1 text-sm font-medium text-text-strong font-satoshi leading-[150%]">
                  Pix, Pix Fretebras
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <path d="M14 2L2 14M15 12.5C15 13.8806 13.8809 14.9998 12.5004 15C11.1198 15.0002 10.0004 13.8813 10 12.5007C9.99959 11.1202 11.1183 10.0006 12.4989 10C13.1621 9.99971 13.7983 10.263 14.2674 10.7318C14.7365 11.2007 15 11.8368 15 12.5ZM6 3.5C6 2.11943 4.88094 1.0002 3.50037 1C2.1198 0.999796 1.00041 2.11869 1 3.49926C0.999591 4.87983 2.11832 5.99939 3.49889 6C4.87978 6 5.99939 4.88089 6 3.5Z" stroke="#636B7E" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="flex-1 text-sm font-medium text-text-strong font-satoshi leading-[150%]">
                  Adiantamento 70%, Saldo 30%
                </span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-text-medium font-satoshi leading-[150%]">Problemas com o frete?</h3>
            <button className="h-12 px-4 rounded-[80px] bg-[rgba(0,37,91,0.04)] hover:bg-[rgba(0,37,91,0.08)] transition-colors flex items-center gap-2">
              <span className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">Atendimento</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M16 9.54412C15.9996 8.9299 15.8189 8.32993 15.4813 7.82188C15.1436 7.31383 14.6646 6.9211 14.1061 6.69452C14.075 6.68226 14.0483 6.66078 14.0293 6.63283C14.0102 6.60489 13.9998 6.57176 13.9994 6.53772V6.1355C13.9994 4.50827 13.3671 2.94768 12.2415 1.79705C11.116 0.646417 9.58943 0 7.99766 0C6.4059 0 4.87933 0.646417 3.75378 1.79705C2.62824 2.94768 1.99591 4.50827 1.99591 6.1355V6.53772C1.99548 6.57176 1.98508 6.60489 1.96607 6.63283C1.94705 6.66078 1.92028 6.68226 1.88921 6.69452C1.32262 6.92552 0.838346 7.32756 0.500923 7.84705C0.1635 8.36654 -0.0110473 8.97882 0.000541878 9.60229C0.0121311 10.2258 0.209306 10.8308 0.565791 11.3368C0.922277 11.8429 1.42114 12.2258 1.99591 12.4346C2.14656 12.4891 2.30778 12.5058 2.46607 12.4835C2.62436 12.4612 2.77512 12.4004 2.90572 12.3063C3.03631 12.2122 3.14295 12.0874 3.21671 11.9425C3.29046 11.7976 3.32919 11.6367 3.32963 11.4734V6.1355C3.32963 4.86988 3.82144 3.65608 4.69687 2.76115C5.57229 1.86621 6.75963 1.36345 7.99766 1.36345C9.2357 1.36345 10.423 1.86621 11.2985 2.76115C12.1739 3.65608 12.6657 4.86988 12.6657 6.1355V11.4734C12.6717 11.7299 12.7745 11.9742 12.9524 12.1551C12.9813 12.1894 12.9977 12.2327 12.9991 12.2778V12.5914C12.9991 13.5935 12.1389 13.9549 11.332 13.9549H10.2383C10.2108 13.9546 10.1838 13.9477 10.1595 13.9346C10.1351 13.9216 10.1141 13.9028 10.0983 13.8799C9.97732 13.6945 9.81378 13.5423 9.62196 13.4365C9.43015 13.3308 9.21589 13.2747 8.99796 13.2731C8.76712 13.2715 8.53983 13.3312 8.33831 13.4463C8.13679 13.5614 7.96794 13.728 7.84828 13.9298C7.72863 14.1316 7.66226 14.3617 7.65566 14.5976C7.64907 14.8335 7.70248 15.0671 7.81067 15.2756C7.91885 15.484 8.07812 15.6602 8.27288 15.7869C8.46764 15.9136 8.69123 15.9864 8.92178 15.9983C9.15233 16.0101 9.38194 15.9606 9.58816 15.8546C9.79439 15.7485 9.97015 15.5896 10.0983 15.3933C10.1141 15.3703 10.1351 15.3516 10.1595 15.3385C10.1838 15.3255 10.2108 15.3186 10.2383 15.3183H11.332C13.0992 15.3183 14.3328 14.1935 14.3328 12.5914V12.3664C14.3334 12.3359 14.3417 12.3061 14.3569 12.2798C14.3721 12.2535 14.3937 12.2317 14.4195 12.2165C14.8938 11.9576 15.291 11.5727 15.5691 11.1024C15.8473 10.6321 15.9962 10.0937 16 9.54412Z" fill="#636B7E"/>
              </svg>
            </button>
          </div>

          {/* Return Freight */}
          <div className="space-y-6 pb-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-text-strong font-satoshi leading-[150%]">Garanta sua volta</h3>
              </div>
              <p className="text-xs font-medium text-text-medium font-satoshi leading-[160%] tracking-[0.24px]">
                De Catalão e região para Aguaí, SP
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <path d="M10.5 6.5L8 4M8 4L5.5 6.5M8 4V11.5M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z" stroke="#636B7E" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium text-text-medium font-satoshi leading-[150%]">
                  25 fretes toda semana
                </span>
              </div>

              <div className="h-0.5 bg-bg-weak"></div>

              <div className="flex items-center gap-3">
                <Box className="w-4 h-4 text-text-medium flex-shrink-0" strokeWidth={1} />
                <span className="flex-1 text-sm font-medium text-text-medium font-satoshi leading-[150%]">
                  Pallets, soja e eletrônicos são as cargas mais comuns nessa região.
                </span>
              </div>
            </div>

            <button className="h-12 px-4 rounded-[80px] bg-[rgba(0,37,91,0.04)] hover:bg-[rgba(0,37,91,0.08)] transition-colors">
              <span className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">Ver fretes</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar - Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-icon-weak shadow-[0_8px_28px_-6px_rgba(38,47,74,0.12),0_18px_88px_-4px_rgba(38,47,74,0.14)] max-w-md mx-auto">
          <div className="px-4 py-6 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xl font-medium text-text-strong font-satoshi leading-[130%] tracking-[-0.8px]">
                R$ 3.000
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-text-medium font-satoshi leading-[160%] tracking-[0.24px]">
                  Pedágio incluso
                </span>
                <div className="flex items-center gap-1 px-1 bg-white rounded">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 11.625C9.1066 11.625 11.625 9.1066 11.625 6C11.625 2.8934 9.1066 0.375 6 0.375C2.8934 0.375 0.375 2.8934 0.375 6C0.375 9.1066 2.8934 11.625 6 11.625ZM6.35355 2.64645L8.22855 4.52145C8.42382 4.71671 8.42382 5.03329 8.22855 5.22855C8.03329 5.42382 7.71671 5.42382 7.52145 5.22855L6.5 4.20711V9C6.5 9.27614 6.27614 9.5 6 9.5C5.72386 9.5 5.5 9.27614 5.5 9V4.20711L4.47855 5.22855C4.28329 5.42382 3.96671 5.42382 3.77145 5.22855C3.57618 5.03329 3.57618 4.71671 3.77145 4.52145L5.64645 2.64645C5.84171 2.45118 6.15829 2.45118 6.35355 2.64645Z" fill="#0AB15F"/>
                  </svg>
                  <span className="text-[10px] font-bold text-text-medium font-satoshi uppercase tracking-[0.4px] leading-[100%]">
                    ANTT
                  </span>
                </div>
              </div>
            </div>

            <button className="min-h-[48px] px-4 rounded-pill bg-primary flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
              <span className="text-sm font-medium text-white font-satoshi leading-[150%]">Conversar</span>
              <MessageSquare className="w-5 h-5 text-white" fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
