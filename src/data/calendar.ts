export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  type: "Meeting" | "Deadline" | "Review";
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Sprint Planning",
    date: "Sep 8",
    time: "09:00 AM",
    type: "Meeting",
  },
  {
    id: 2,
    title: "UI Design Review",
    date: "Sep 10",
    time: "02:00 PM",
    type: "Review",
  },
  {
    id: 3,
    title: "Project Deadline",
    date: "Sep 12",
    time: "05:00 PM",
    type: "Deadline",
  },
  {
    id: 4,
    title: "Client Meeting",
    date: "Sep 15",
    time: "11:00 AM",
    type: "Meeting",
  },
  {
    id: 5,
    title: "Backend Review",
    date: "Sep 18",
    time: "03:00 PM",
    type: "Review",
  },
  {
    id: 6,
    title: "Release Deadline",
    date: "Sep 20",
    time: "06:00 PM",
    type: "Deadline",
  },
];
