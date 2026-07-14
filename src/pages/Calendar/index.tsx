import { useMemo, useState } from "react";

import CalendarGrid from "../../components/calendar/CalendarGrid";
import CalendarHeader from "../../components/calendar/CalendarHeader";
import UpcomingEvents from "../../components/calendar/UpcomingEvents";
import AddEventModal from "../../components/calendar/AddEventModal";

import useApp from "../../contexts/useApp";

import {
  getUpcomingEvents,
  sortEventsByDate,
  type CalendarEvent,
} from "../../data/calendar";

function Calendar() {
  const { events, setEvents } = useApp();

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [isModalOpen, setIsModalOpen] = useState(false);

  const upcomingEvents = useMemo(() => getUpcomingEvents(events), [events]);

  const sortedEvents = useMemo(
    () => sortEventsByDate(upcomingEvents),
    [upcomingEvents],
  );

  function handlePreviousMonth() {
    setCurrentMonth(
      (previous) =>
        new Date(previous.getFullYear(), previous.getMonth() - 1, 1),
    );
  }

  function handleNextMonth() {
    setCurrentMonth(
      (previous) =>
        new Date(previous.getFullYear(), previous.getMonth() + 1, 1),
    );
  }

  function handleAddEvent(event: CalendarEvent) {
    setEvents((previousEvents) => [event, ...previousEvents]);
  }

  function handleDeleteEvent(id: number) {
    setEvents((previousEvents) =>
      previousEvents.filter((event) => event.id !== id),
    );
  }

  return (
    <div className="space-y-8">
      <CalendarHeader
        currentMonth={currentMonth}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
        onAddEvent={() => setIsModalOpen(true)}
      />

      <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">
        <CalendarGrid currentMonth={currentMonth} events={events} />

        <UpcomingEvents events={sortedEvents} onDelete={handleDeleteEvent} />
      </div>

      <AddEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEvent={handleAddEvent}
      />
    </div>
  );
}

export default Calendar;
