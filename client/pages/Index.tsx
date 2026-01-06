import { Search, Star, ChevronDown, Home, Send, Wallet, MessageCircle } from "lucide-react";
import { FreightCard } from "@/components/FreightCard";
import freightsData from "@/data/freights.json";
import type { Freight } from "@/shared/types";

export default function Index() {
  const freights = freightsData as Freight[];

  return (
    <div className="min-h-screen bg-[#F4F4F5] font-satoshi">
      {/* Mobile container */}
      <div className="w-full bg-[#F4F4F5] min-h-screen relative">
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
          <div className="space-y-2">
            {freights.map((freight) => (
              <FreightCard
                key={freight.id}
                freight={freight}
                onClick={() => console.log('Clicked freight:', freight.id)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Navigation - Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[rgba(0,43,92,0.06)]">
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
