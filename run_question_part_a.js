import { findFreeSlots } from "./find_free_slots.js";

const examples = [
  {
    title: "Example 1",
    bookings: ["10:00-11:00", "09:30-10:30", "13:00-14:00", "13:15-13:45"],
    D: 30,
  },
  {
    title: "Example 2",
    bookings: ["09:00-10:00", "10:00-12:00", "16:00-17:50"],
    D: 15,
  },
  {
    title: "Example 3",
    bookings: ["08:00-09:20", "17:00-19:00,07:00-08:00"],
    D: 60,
  },
];

console.log(
  'Part A\nA meeting room has a list of bookings for one day. Each booking has a start and end time in 24-hour HH:MM format. Working hours are 09:00 to 18:00\nWrite a function "findFreeSlots(bookings, D)" which returns every free time slot within working hours that is atleast D minutes long.\n',
);
examples.map((example) => {
  const result = findFreeSlots(example.bookings, example.D);

  console.log(
    `\n${example.title}\nbookings: ${example.bookings}\nD: ${example.D}\nResult: ${result}`,
  );
});
