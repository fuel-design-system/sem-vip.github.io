import { Sparkles, Diamond, MessageCircle } from "lucide-react";
import type { Freight } from "@/shared/types";

interface FreightCardProps {
  freight: Freight;
  onClick?: () => void;
}

export function FreightCard({ freight, onClick }: FreightCardProps) {
  return (
    <div 
      className="relative rounded-xl shadow-[0_1px_3px_rgba(17,17,17,0.06),0_1px_2px_rgba(17,17,17,0.12)] bg-white overflow-hidden cursor-pointer hover:shadow-[0_2px_4px_rgba(17,17,17,0.08),0_2px_3px_rgba(17,17,17,0.14)] transition-shadow"
      onClick={onClick}
    >
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
  );
}
