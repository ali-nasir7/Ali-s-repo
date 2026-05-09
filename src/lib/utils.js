export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// OLD default booking (fallback)
const DEFAULT_BOOKING_URL =
  "https://app.acuityscheduling.com/schedule.php?owner=39145070&ref=booking_button";

// Generic booking opener (NOW FLEXIBLE)
export function openBooking(url = DEFAULT_BOOKING_URL) {
  window.open(url, "_blank", "noopener,noreferrer");
}