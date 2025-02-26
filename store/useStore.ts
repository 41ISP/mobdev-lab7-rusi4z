import { create } from 'zustand';

interface StoreState {
    userId: string;
    setUserId: (id: string) => void;
    resetUserId: () => void;
}

const useUserStore = create<StoreState>()((set) => ({
    userId: '',
    setUserId: (id: string) => set({ userId: id }),
    resetUserId: () => set({ userId: '' }),
}));

export default useUserStore;