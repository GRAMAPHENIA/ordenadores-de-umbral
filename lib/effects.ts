import { IconType } from "@/lib/constants/icons";

export const EFFECT_KEYS: IconType[] = ['energy', 'mood', 'time', 'bugs'];

export interface Effect {
  type: IconType;
  value: number;
}

export const getEffects = (effects: Partial<Record<IconType, number>>) => {
  return EFFECT_KEYS
    .filter(key => effects[key] !== undefined)
    .map(key => ({
      type: key,
      value: effects[key]!
    }));
};
