import { Position } from "@/types/Position";
import { create } from "zustand";

type State = {
  position: Position;
};

type Action = {
  updatePosition: (position: Position) => void;
};

export const usePosition = create<State & Action>()((set) => ({
  position: {
    lat: 35.6809773,
    lng: 139.7716954,
  },
  updatePosition: (position) => set(() => ({ position: position })),
}));
