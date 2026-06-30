// export const BOOKING_URL =
//   "https://app.acuityscheduling.com/schedule.php?owner=39145070&ref=booking_button";
//   export const QUICK_SHOT_URL =
//   "https://app.acuityscheduling.com/schedule.php?owner=39145070&appointmentType=category:QUICK-STOP%20BOOSTER%20SHOTS";

// export const MEMBERSHIP_URL =
//   "https://app.acuityscheduling.com/schedule/3d1ba793/appointment/92329131/calendar/13986440?appointmentTypeIds[]=92329131";

// export const NAV_LINKS = [
//   { label: "Home", to: "/" },
//   { label: "Services", to: "/services" },
//   { label: "Membership", to: "/membership" },
//   { label: "About", to: "/about" },
//   { label: "Contact", to: "/contact" },
//   { label: "Terms & Conditions", to: "/legal" },
// ];

// export const CONTACT = {
//   email: "contact@livlongmd.com",
//   phone: "(480) 269-3165",
//   address: ["8010 E. McDowell Rd", "Suite 209", "Scottsdale AZ 85257"],
//   hours: [
//     { day: "Mon — Fri", time: "9:00 AM — 6:00 PM" },
//     { day: "Saturday", time: "10:00 AM — 3:00 PM" },
//     { day: "Sunday", time: "By appointment" },
//   ],
// };

























export const BOOKING_URL =
  "https://app.acuityscheduling.com/schedule.php?owner=39145070&ref=booking_button";
  export const QUICK_SHOT_URL =
  "https://app.acuityscheduling.com/schedule.php?owner=39145070&appointmentType=category:QUICK-STOP%20BOOSTER%20SHOTS";

export const MEMBERSHIP_URL =
  "https://app.acuityscheduling.com/schedule/3d1ba793/appointment/92329131/calendar/13986440?appointmentTypeIds[]=92329131";

// Peptide Therapy booking — update this to the dedicated Acuity
// "Peptide Therapy" appointment-type/category link once it exists.
// Falls back to the main booking link in the meantime.
export const PEPTIDE_BOOKING_URL = BOOKING_URL;

// AJAX form-submission endpoint (FormSubmit.co — no backend required).
// First submission to a new email requires one manual confirmation click
// from that inbox; every submission after that is delivered automatically.
export const PEPTIDE_FORM_ENDPOINT =
  "https://formsubmit.co/ajax/contact@livlongmd.com";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Peptides", to: "/peptides" },
  { label: "Membership", to: "/membership" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Terms & Conditions", to: "/legal" },
];

export const CONTACT = {
  email: "contact@livlongmd.com",
  phone: "(480) 269-3165",
  address: ["8010 E. McDowell Rd", "Suite 209", "Scottsdale AZ 85257"],
  hours: [
    { day: "Mon — Fri", time: "9:00 AM — 6:00 PM" },
    { day: "Saturday", time: "10:00 AM — 3:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};
