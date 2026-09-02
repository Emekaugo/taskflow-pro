import { useMemo, useState } from "react";

import AddEventModal from "../../components/calendar/AddEventModal";
import CalendarGrid from "../../components/calendar/CalendarGrid";
import CalendarHeader from "../../components/calendar/CalendarHeader";
import UpcomingEvents from "../../components/calendar/UpcomingEvents";

import useApp from "../../contexts/useApp";

import {
  getUpcomingEvents,
  sortEventsByDate,
  type CalendarEvent,
} from "../../data/calendar";

function Calendar() {
  const { events, setEvents } = useApp();

  const [currentMonth, setCurrentMonth] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
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
    setSelectedDate(null);
  }

  function handleNextMonth() {
    setCurrentMonth(
      (previous) =>
        new Date(previous.getFullYear(), previous.getMonth() + 1, 1),
    );
    setSelectedDate(null);
  }

  function handleToday() {
    setCurrentMonth(new Date());
    setSelectedDate(null);
  }

  function handleSelectDate(date: string) {
    setSelectedDate((previous) => (previous === date ? null : date));
  }

  function handleClearDate() {
    setSelectedDate(null);
  }

  function handleAddEvent(event: CalendarEvent) {
    setEvents((previousEvents) => [...previousEvents, event]);
  }

  function handleDeleteEvent(id: number) {
    setEvents((previousEvents) => {
      const remainingEvents = previousEvents.filter((event) => event.id !== id);

      if (selectedDate) {
        const hasRemainingEvents = remainingEvents.some(
          (event) => event.date === selectedDate,
        );

        if (!hasRemainingEvents) {
          setSelectedDate(null);
        }
      }

      return remainingEvents;
    });
  }

  return (
    <div className="space-y-8">
      <CalendarHeader
        currentMonth={currentMonth}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
        onAddEvent={() => setIsModalOpen(true)}
      />

      <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">
        <CalendarGrid
          currentMonth={currentMonth}
          events={events}
          selectedDate={selectedDate}
          onSelectDate={handleSelectDate}
        />

        <UpcomingEvents
          events={sortedEvents}
          onDelete={handleDeleteEvent}
          selectedDate={selectedDate}
          onClearDate={handleClearDate}
        />
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
