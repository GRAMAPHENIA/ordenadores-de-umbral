export const ICONS = {
  energy: '/icons/energy.svg',
  mood: '/icons/mood.svg',
  time: '/icons/time.svg',
  bugs: '/icons/bugs.svg',
} as const;

export type IconType = keyof typeof ICONS;
