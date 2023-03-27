import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./datePicker.module.scss";
import enGB from "date-fns/locale/en-GB";
registerLocale("en-GB", enGB);

export const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };

  // const handleChangeRaw = (value) => {
  //   if (value === "Check-in") {
  //     setStartDate(new Date());
  //   }
  // };
  return (
    // <DatePicker
    //   locale="en-GB"
    //   selected={startDate}
    //   onChange={onChange}
    //   startDate={startDate}
    //   endDate={endDate}
    //   // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
    //   selectsRange
    //   // selectsDisabledDaysInRange
    //   inline
    // />
    <div className={styles.datePicker}>
      <h2 className={styles.datePicker__heading}>Reservation</h2>
      <label className={styles.datePicker__label}>Check-in</label>
      <DatePicker
        className={styles.datePicker__inputContainer}
        wrapperClassName={styles.datePicker__wrapper}
        locale="en-GB"
        onChange={(date) => setStartDate(date)}
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Add date"
      />
      <label className={styles.datePicker__label}>Check-out</label>
      <DatePicker
        className={styles.datePicker__inputContainer}
        wrapperClassName={styles.datePicker__wrapper}
        locale="en-GB"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Add date"
      />
      <a href="#" className={styles.datePicker__bookButton}>
        <p className={styles.datePicker__bookButtonText}>Continue</p>
      </a>
    </div>
  );
};
