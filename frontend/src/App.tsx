import { useMemo } from 'react';
import { useTaskFilters } from './store/useTaskFilters';
import { useGetTasksQuery } from './services/tasksApi';
import { useLiveTaskUpdates } from './hooks/useLiveTaskUpdates';

export function App() {
  useLiveTaskUpdates();
  const { statusFilter, search, setSearch, setStatusFilter } = useTaskFilters();
  const { data = [] } = useGetTasksQuery();

  const filtered = useMemo(
    () =>
      data.filter((task) => {
        const statusMatch = statusFilter === 'all' || task.status === statusFilter;
        const textMatch = task.title.toLowerCase().includes(search.toLowerCase());
        return statusMatch && textMatch;
      }),
    [data, search, statusFilter],
  );

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      <h1>Unified TypeScript Squad Platform</h1>
      <p>React + NestJS POC with shared DTOs, RTK Query, Zustand, and live updates.</p>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <input
          placeholder="Search task"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)}>
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <ul>
        {filtered.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.status} - {task.assignee}
          </li>
        ))}
      </ul>
    </main>
  );
}
