import { useEffect } from 'react';

export function useLiveTaskUpdates(): void {
  useEffect(() => {
    const events = new EventSource('http://localhost:3001/tasks/stream/sse');
    events.onmessage = () => {
      // In production, dispatch cache updates or invalidation actions.
    };
    return () => events.close();
  }, []);
}
