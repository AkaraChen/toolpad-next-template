import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { STORAGE } from '@/modules/universal/constants/store';

// Define the state interface
interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the store with persistence
export const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // Initial state
        count: 0,

        // Actions
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
      }),
      {
        name: STORAGE.APP_STATE_STORAGE_KEY, // Name for the persisted state in storage
      }
    )
  )
);

