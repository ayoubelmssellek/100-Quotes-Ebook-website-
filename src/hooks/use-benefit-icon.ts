import {
  BookOpenCheck,
  CalendarCheck,
  Dumbbell,
  Heart,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

export function useBenefitIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    "calendar-check": CalendarCheck,
    zap: Zap,
    sparkles: Sparkles,
    dumbbell: Dumbbell,
    heart: Heart,
    "book-open": BookOpenCheck,
  };

  return map[name] ?? Sparkles;
}
