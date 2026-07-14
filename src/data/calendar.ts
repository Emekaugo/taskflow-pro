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

export function sortEventsByDate(events: CalendarEvent[]) {
  return [...events].sort((a, b) => {
    const first = new Date(`${a.date}T${a.time}`).getTime();

    const second = new Date(`${b.date}T${b.time}`).getTime();

    return first - second;
  });
}

export function getUpcomingEvents(events: CalendarEvent[], limit = 5) {
  return sortEventsByDate(events).slice(0, limit);
}

export function filterEventsByDate(events: CalendarEvent[], date: string) {
  return events.filter((event) => event.date === date);
}
