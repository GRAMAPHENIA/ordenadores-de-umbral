"use client";

import Image from "next/image";
import { ICONS, IconType } from "@/lib/constants/icons";

interface EffectItemProps {
  type: IconType;
  value: number;
}

export default function EffectItem({ type, value }: EffectItemProps) {
  const icon = ICONS[type];
  const alt = type.charAt(0).toUpperCase() + type.slice(1);
  
  return (
    <div className="flex items-center">
      <Image 
        src={icon} 
        alt={alt} 
        width={20} 
        height={20} 
        className="w-5 h-5" 
      />
      <span className={value > 0 ? "text-lime-500" : "text-rose-500"}>
        {value}
      </span>
    </div>
  );
}
