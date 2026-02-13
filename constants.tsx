import { 
  Milk, 
  Utensils, 
  Newspaper, 
  Box, 
  Beer, 
  Disc, 
  Wine, 
  GlassWater, 
  Apple, 
  Banana, 
  Cigarette, 
  ScrollText 
} from 'lucide-react';
import { WasteItem, BinColor } from './types';

export const BIN_COLORS: Record<BinColor, string> = {
  "Blanco": "#FFFFFF",
  "Azul": "#00CCFF",
  "Amarillo": "#FFFF00",
  "Verde": "#39FF14",
  "Marrón": "#A52A2A",
  "Gris": "#808080"
};

export const WASTE_ITEMS: WasteItem[] = [
  { id: '1', name: "Botellas Plástico", bin: "Blanco", icon: Milk },
  { id: '2', name: "Envases Alimento", bin: "Blanco", icon: Utensils },
  { id: '3', name: "Periódicos/Revistas", bin: "Azul", icon: Newspaper },
  { id: '4', name: "Cajas de Cartón", bin: "Azul", icon: Box },
  { id: '5', name: "Latas Aluminio", bin: "Amarillo", icon: Beer },
  { id: '6', name: "Tapas Metálicas", bin: "Amarillo", icon: Disc },
  { id: '7', name: "Botellas Vidrio", bin: "Verde", icon: Wine },
  { id: '8', name: "Frascos Vidrio", bin: "Verde", icon: GlassWater },
  { id: '9', name: "Restos Comida", bin: "Marrón", icon: Apple },
  { id: '10', name: "Cáscaras Fruta", bin: "Marrón", icon: Banana },
  { id: '11', name: "Colillas Cigarro", bin: "Gris", icon: Cigarette },
  { id: '12', name: "Papel Sanitario", bin: "Gris", icon: ScrollText }
];

export const TRIVIA_FACTS = [
  "¿Sabías que reciclar una botella de plástico ahorra energía suficiente para encender una bombilla de 60W por 3 horas?",
  "El aluminio es 100% reciclable y puede volver al estante como una lata nueva en solo 60 días.",
  "El vidrio tarda más de 4000 años en descomponerse en la naturaleza, pero es infinitamente reciclable.",
  "Reciclar papel ahorra un 60% de energía y reduce la contaminación del agua en un 35% comparado con papel virgen.",
  "Cada tonelada de papel reciclado salva 17 árboles y 26.500 litros de agua."
];