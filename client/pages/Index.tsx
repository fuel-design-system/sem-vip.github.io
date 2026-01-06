import { Search, Star, ChevronDown, Sparkles, Diamond, MessageCircle, Home, Send, Wallet } from "lucide-react";

export default function Index() {
  const freights = [
    {
      id: 1,
      price: "R$ 5.500",
      paymentType: "Pedágio a parte",
      priceBy: "Preço por kg",
      loadType: "Carga completa",
      weight: "250kg",
      distance: "1.639km",
      cargo: "Derivado de soja",
      origin: "Uberlândia, MG",
      destination: "Rondonópolis, MT",
      publisher: "Rodo Cargas",
      isNew: true,
      isVip: true,
      advancement: "100%",
      negotiations: 0
    },
    {
      id: 2,
      price: "R$ 5.500",
      paymentType: "Pedágio a parte",
      priceBy: "Preço por kg",
      loadType: "Carga completa",
      weight: "250kg",
      distance: "1.639km",
      cargo: "Derivado de soja",
      origin: "Uberlândia, MG",
      destination: "Sinop, SP",
      publisher: "Rodo Cargas",
      isNew: true,
      isVip: true,
      advancement: null,
      negotiations: 0
    },
    {
      id: 3,
      price: "R$ 5.500",
      paymentType: "Pedágio incluso",
      priceBy: "Preço por ton",
      loadType: "Complemento",
      weight: "34 ton",
      distance: "534km",
      cargo: "Fertilizantes",
      origin: "São José do Vale do Rio Preto, RJ",
      destination: "Várzea Grande, MG",
      publisher: "Rodo Cargas",
      isNew: false,
      isVip: true,
      advancement: "100%",
      negotiations: 3
    },
    {
      id: 4,
      price: "R$ 5.500",
      paymentType: "Pedágio incluso",
      priceBy: "Preço por ton",
      loadType: "Complemento",
      weight: "34 ton",
      distance: "534km",
      cargo: "Fertilizantes",
      origin: "São José do Vale do Rio Preto, RJ",
      destination: "Barra do Garças, PR",
      publisher: "Rodo Cargas",
      isNew: false,
      isVip: true,
      advancement: null,
      negotiations: 3
    },
    {
      id: 5,
      price: "A combinar",
      paymentType: "Pedágio incluso",
      priceBy: "Preço por ton",
      loadType: "Complemento",
      weight: "34 ton",
      distance: "534km",
      cargo: "Fertilizantes",
      origin: "São José do Vale do Rio Preto, RJ",
      destination: "Tangará da Serra, RJ",
      publisher: "Rodo Cargas",
      isNew: true,
      isVip: false,
      advancement: "100%",
      negotiations: 0
    },
    {
      id: 6,
      price: "A combinar",
      paymentType: "Pedágio incluso",
      priceBy: "Preço por ton",
      loadType: "Complemento",
      weight: "34 ton",
      distance: "534km",
      cargo: "Fertilizantes",
      origin: "São José do Vale do Rio Preto, RJ",
      destination: "Lucas do Rio Verde, SC",
      publisher: "Rodo Cargas",
      isNew: true,
      isVip: false,
      advancement: null,
      negotiations: 0
    },
    {
      id: 7,
      price: "A combinar",
      paymentType: "Pedágio incluso",
      priceBy: "Preço por ton",
      loadType: "Complemento",
      weight: "34 ton",
      distance: "534km",
      cargo: "Fertilizantes",
      origin: "São José do Vale do Rio Preto, RJ",
      destination: "Primavera do Leste, ES",
      publisher: "Rodo Cargas",
      isNew: false,
      isVip: false,
      advancement: "100%",
      negotiations: 3
    },
    {
      id: 8,
      price: "A combinar",
      paymentType: "Pedágio incluso",
      priceBy: "Preço por ton",
      loadType: "Complemento",
      weight: "34 ton",
      distance: "534km",
      cargo: "Fertilizantes",
      origin: "São José do Vale do Rio Preto, RJ",
      destination: "Sorriso, RS",
      publisher: "Rodo Cargas",
      isNew: false,
      isVip: false,
      advancement: null,
      negotiations: 3
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] font-satoshi">
      {/* Mobile container */}
      <div className="mx-auto max-w-[360px] bg-[#F4F4F5] min-h-screen relative">
        {/* Content */}
        <div className="px-4 pt-3 pb-24">
          {/* Search Bar + Avatar */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 h-[53px] rounded-[48px] shadow-[0_14px_64px_-4px_rgba(17,17,17,0.08),0_8px_22px_-6px_rgba(17,17,17,0.12)] flex items-center gap-4 px-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-[#111] leading-[150%]">
                  Busque fretes agora
                </p>
              </div>
              <Search className="w-[13.33px] h-[13.33px] text-[#111]" />
            </div>

            {/* Avatar with badge */}
            <div className="relative flex flex-col items-center -mt-2">
              <div className="w-10 h-10 rounded-full bg-[#636B7E] flex items-center justify-center">
                <span className="text-base font-medium text-white">A</span>
              </div>
              <svg className="absolute -right-0.5 top-6" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" fill="#F4F4F5"/>
                <circle cx="8" cy="8" r="4" fill="#0C884C"/>
              </svg>
              <div className="flex items-center gap-1 h-[23px] px-2 rounded-[500px] bg-white shadow-sm">
                <Star className="w-3 h-3 fill-[#F5963D] text-[#F5963D]" />
                <span className="text-xs font-bold text-[#636B7E]">4.8</span>
              </div>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex items-start gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
            <button className="flex items-center justify-center gap-2 min-w-fit h-8 px-3 rounded-[500px] border border-[rgba(0,43,92,0.16)] bg-white hover:bg-[rgba(0,43,92,0.06)] transition-colors whitespace-nowrap">
              <span className="text-xs font-medium text-[#111]">Tipo de carga</span>
              <ChevronDown className="w-4 h-4 text-[#111]" />
            </button>
            <button className="flex items-center justify-center gap-2 min-w-fit h-8 px-3 rounded-[500px] border border-[rgba(0,43,92,0.16)] bg-white hover:bg-[rgba(0,43,92,0.06)] transition-colors whitespace-nowrap">
              <span className="text-xs font-medium text-[#111]">Veículo</span>
              <ChevronDown className="w-4 h-4 text-[#111]" />
            </button>
            <button className="flex items-center justify-center gap-2 min-w-fit h-8 px-3 rounded-[500px] border border-[rgba(0,43,92,0.16)] bg-white hover:bg-[rgba(0,43,92,0.06)] transition-colors whitespace-nowrap">
              <span className="text-xs font-medium text-[#111]">Carroceria</span>
              <ChevronDown className="w-4 h-4 text-[#111]" />
            </button>
            <button className="flex items-center justify-center min-w-fit h-8 px-3 rounded-[500px] border border-[rgba(0,43,92,0.16)] bg-white hover:bg-[rgba(0,43,92,0.06)] transition-colors whitespace-nowrap">
              <span className="text-xs font-medium text-[#111]">Raio</span>
            </button>
          </div>

          {/* Freight Cards */}
          <div className="space-y-6">
            {freights.map((freight) => (
              <div key={freight.id} className="relative rounded-xl shadow-[0_1px_3px_rgba(17,17,17,0.06),0_1px_2px_rgba(17,17,17,0.12)] bg-white overflow-hidden">
                {/* Card Content */}
                <div className="p-4 space-y-4">
                  {/* Price and Details */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#111] leading-[150%]">
                      {freight.price}
                    </h3>
                    <div className="flex items-start gap-2 flex-wrap text-xs font-medium text-[#636B7E] leading-[160%]">
                      <span>{freight.paymentType}</span>
                      <span>•</span>
                      <span>{freight.priceBy}</span>
                      <span>•</span>
                      <span>{freight.loadType}</span>
                    </div>
                    <div className="flex items-start gap-2 flex-wrap text-xs font-medium text-[#636B7E] leading-[160%]">
                      <span>{freight.weight}</span>
                      <span>•</span>
                      <span>{freight.distance}</span>
                      <span>•</span>
                      <span>{freight.cargo}</span>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="flex items-center gap-2">
                    <svg width="7" height="46" viewBox="0 0 7 46" fill="none" className="flex-shrink-0">
                      <circle cx="3.5" cy="8.5" r="3" stroke="#DFE1E6"/>
                      <rect x="3" y="16" width="1" height="14" fill="#DFE1E6"/>
                      <path d="M6.19141 34.5L3.5 39.8818L0.808594 34.5H6.19141Z" stroke="#DFE1E6"/>
                    </svg>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-[#111] leading-[150%]">{freight.origin}</p>
                      <p className="text-sm font-medium text-[#111] leading-[150%]">{freight.destination}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="py-2">
                    <div className="h-px bg-[#DFE1E6]"></div>
                  </div>

                  {/* Publisher */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#DFE1E6] flex items-center justify-center relative">
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none" className="absolute -bottom-0.5 -right-0.5">
                        <path d="M5 1C7.20914 1 9 2.79086 9 5C9 7.20914 7.20914 9 5 9C2.79086 9 1 7.20914 1 5C1 2.79086 2.79086 1 5 1Z" fill="#0AB15F" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium text-[#636B7E]">Publicado por</span>
                      <span className="text-xs font-bold text-[#636B7E]">{freight.publisher}</span>
                    </div>
                  </div>
                </div>

                {/* Tags - Top Right */}
                <div className="absolute top-0 right-0 flex items-center h-7 rounded-bl-lg overflow-hidden">
                  {freight.isNew && (
                    <div className="h-full px-2 bg-[#0769DA] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-white fill-white" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-[0.4px]">NOVO</span>
                    </div>
                  )}
                  {freight.advancement && (
                    <div className="h-full px-2 bg-[#DAEDE0] flex items-center">
                      <span className="text-[10px] font-bold text-[#0C884C] uppercase tracking-[0.4px]">{freight.advancement}</span>
                    </div>
                  )}
                  {freight.isVip && (
                    <div className="h-full px-2 bg-[#0769DA] flex items-center gap-1">
                      <Diamond className="w-3 h-3 text-white fill-white" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-[0.4px]">VIP</span>
                    </div>
                  )}
                  {freight.negotiations > 0 && (
                    <div className="h-full px-2 bg-[#DFE1E6] flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-[#636B7E] fill-[#636B7E]" />
                      <span className="text-[10px] font-bold text-[#636B7E] uppercase tracking-[0.4px]">{freight.negotiations}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation - Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[rgba(0,43,92,0.06)] max-w-[360px] mx-auto">
          <div className="flex items-center justify-around h-[88px] px-2">
            <button className="flex flex-col items-center justify-center gap-1 flex-1 rounded-[100px] py-2">
              <Home className="w-6 h-6 fill-[#0769DA] text-[#0769DA]" />
              <span className="text-xs font-bold text-[#111]">Início</span>
            </button>
            <button className="relative flex flex-col items-center justify-center gap-1 flex-1 rounded-[100px] py-2">
              <MessageCircle className="w-6 h-6 text-[#636B7E]" />
              <span className="text-xs font-medium text-[#636B7E]">Chat</span>
              <div className="absolute top-1 right-6 w-4 h-4 rounded-full bg-[#E04747] border border-white flex items-center justify-center">
                <span className="text-[10px] font-bold text-white leading-none">2</span>
              </div>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 flex-1 rounded-[100px] py-2">
              <Send className="w-6 h-6 text-[#636B7E]" />
              <span className="text-xs font-medium text-[#636B7E]">Viagens</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 flex-1 rounded-[100px] py-2">
              <Wallet className="w-6 h-6 text-[#636B7E]" />
              <span className="text-xs font-medium text-[#636B7E]">Carteira</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
