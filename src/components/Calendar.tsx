// date-picker
import { endOfWeek, isWithinInterval, startOfWeek, format } from "date-fns";
import { DayPicker, Row, RowProps } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { sv } from "date-fns/locale";

export function showCalendar(props: RowProps) {
    const isDateInCurrentWeek = (dateToCheck: Date) => {
      const today = new Date();
      const start = startOfWeek(today);
      const end = endOfWeek(today);
      return isWithinInterval(dateToCheck, { start, end });
    };
    const isNotCurrentWeek = props.dates.every(
      (date) => !isDateInCurrentWeek(date)
    );
    if (isNotCurrentWeek) return <></>;
    return <Row {...props} />;
  }