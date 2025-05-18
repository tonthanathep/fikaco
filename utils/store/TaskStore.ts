import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TaskStore = {
  storeTaskList: Task[];
  _hasHydrated: boolean;

  setHasHydrated: (hasHydrated: boolean) => void;
  updateTaskList: (taskList: Task[]) => void;
};

export type Task = {
  id: string;
  task: string;
  effort: number;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  startedAt: string;
  completedAt: string;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      storeTaskList: [],
      _hasHydrated: false,

      updateTaskList: (taskList: Task[]) => {
        console.log("Updating task list:", taskList);
        set({ storeTaskList: taskList });
      },

      setHasHydrated: (hasHydrated: boolean) => {
        set({ _hasHydrated: hasHydrated });
      },
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state) => {
        console.log("hydrating");
        return (state, error) => {
          if (error) {
            console.log("Rehydrate error", error);
          } else {
            console.log("Rehydrate success");
            state?.setHasHydrated(true);
          }
        };
      },
    }
  )
);

// if (process.env.NODE_ENV === "development") {
//   mountStoreDevtool("playerStore", useTaskStore);
// }

export default useTaskStore;
