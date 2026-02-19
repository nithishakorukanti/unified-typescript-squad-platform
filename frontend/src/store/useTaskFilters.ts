import { create } from 'zustand';
import type { TaskStatus } from '../../../shared-types/src';

type FilterState = {
  statusFilter: TaskStatus | 'all';
  search: string;
  setStatusFilter: (value: TaskStatus | 'all') => void;
  setSearch: (value: string) => void;
};

export const useTaskFilters = create<FilterState>((set) => ({
  statusFilter: 'all',
  search: '',
  setStatusFilter: (value) => set({ statusFilter: value }),
  setSearch: (value) => set({ search: value }),
}));
