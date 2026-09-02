export interface CalendarEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Sprint Planning",
    description: "Plan tasks and priorities for the upcoming sprint.",
    date: "2026-07-14",
    time: "09:00",
    location: "Meeting Room A",
  },
  {
    id: 2,
    title: "Client Presentation",
    description: "Present the latest project progress to the client.",
    date: "2026-07-16",
    time: "14:00",
    location: "Zoom",
  },
  {
    id: 3,
    title: "Design Review",
    description: "Review the updated UI/UX designs with the product team.",
    date: "2026-07-18",
    time: "11:00",
    location: "Design Studio",
  },
  {
    id: 4,
    title: "Backend Sync",
    description: "Discuss API integration progress with backend developers.",
    date: "2026-07-20",
    time: "10:30",
    location: "Conference Room B",
  },
  {
    id: 5,
    title: "Retrospective",
    description: "Review the completed sprint and identify improvements.",
    date: "2026-07-24",
    time: "15:00",
    location: "Meeting Room A",
  },
];

export function getEventDateTime(event: CalendarEvent) {
  return new Date(`${event.date}T${event.time}`);
}

export function sortEventsByDate(events: CalendarEvent[]) {
  return [...events].sort((a, b) => {
    return getEventDateTime(a).getTime() - getEventDateTime(b).getTime();
  });
}

export function getUpcomingEvents(events: CalendarEvent[], limit = 5) {
  const now = new Date();

  return sortEventsByDate(events)
    .filter((event) => getEventDateTime(event).getTime() >= now.getTime())
    .slice(0, limit);
}

export function filterEventsByDate(events: CalendarEvent[], date: string) {
  return events.filter((event) => event.date === date);
}

export function formatEventDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatEventTime(time: string) {
  return new Date(`1970-01-01T${time}`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function isEventToday(date: string) {
  const today = new Date();

  const eventDate = new Date(`${date}T00:00:00`);

  return (
    today.getFullYear() === eventDate.getFullYear() &&
    today.getMonth() === eventDate.getMonth() &&
    today.getDate() === eventDate.getDate()
  );
}

export function getEventsForMonth(
  events: CalendarEvent[],
  year: number,
  month: number,
) {
  return events.filter((event) => {
    const eventDate = new Date(`${event.date}T00:00:00`);

    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
}
