export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function openBooking() {
  window.open(
    "https://app.acuityscheduling.com/schedule.php?owner=39145070&ref=booking_button",
    "_blank",
    "noopener,noreferrer"
  );
}
