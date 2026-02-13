import { LucideIcon } from 'lucide-react';

export type BinColor = 'Blanco' | 'Azul' | 'Amarillo' | 'Verde' | 'Marrón' | 'Gris';

export interface WasteItem {
  id: string;
  name: string;
  bin: BinColor;
  icon: LucideIcon;
}

export interface WasteGroup {
  bin: BinColor;
  items: WasteItem[];
  hexColor: string;
}

export enum AppStep {
  SELECTION = 1,
  PROCESSING = 2,
  RESULTS = 3
}