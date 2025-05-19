import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

//TODO: Make store for current ongoing session

type StandupStore = {
  hasStandup: boolean;
  storeStandup: Standup;
  _hasHydrated: boolean;
  setStoreStandup: (standup: Standup) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export type Standup = {
  id: string;
  yesterday: string;
  today: string;
  barrier: string;
};

export const useStandupStore = create<StandupStore>()(
  persist(
    (set) => ({
      storeStandup: {
        yesterday: "-",
        today: "-",
        barrier: "-",
        id: "",
      },
      hasStandup: false,
      _hasHydrated: false,

      setStoreStandup: (standup: Standup) => {
        set({ storeStandup: standup });
        set({ hasStandup: true });
      },

      setHasHydrated: (hasHydrated: boolean) => {
        set({ _hasHydrated: hasHydrated });
      },
    }),
    {
      name: "standup-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state) => {
        console.log("hydrating");
        return (state) => {
          state?.setHasHydrated(true);
        };
      },
    }
  )
);

export default useStandupStore;
