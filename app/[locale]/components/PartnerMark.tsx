import Image from "next/image";
import { Landmark } from "lucide-react";
import type { Partner } from "@/lib/partners";

// Logo du partenaire, ou son sigle tant que le logo n'est pas fourni.
export default function PartnerMark({ partner, size = "lg" }: { partner: Partner; size?: "sm" | "lg" }) {
  const box = size === "lg" ? "w-20 h-20 rounded-2xl" : "w-full h-16 rounded-xl";
  if (partner.logo) {
    return (
      <div className={`${box} relative bg-white border border-gray-100 overflow-hidden`}>
        <Image src={partner.logo} alt={partner.nom} fill sizes="160px" className="object-contain p-2" />
      </div>
    );
  }
  return (
    <div className={`${box} flex items-center justify-center bg-[#1e5d2e]/10 border border-[#1e5d2e]/15`}>
      {partner.categorie === "Institution" ? (
        <Landmark size={size === "lg" ? 30 : 24} strokeWidth={1.5} className="text-[#1e5d2e]" />
      ) : (
        <span className={`font-black tracking-wider text-[#1e5d2e] ${size === "lg" ? "text-lg" : "text-base"}`}>{partner.sigle}</span>
      )}
    </div>
  );
}
