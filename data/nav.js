import { courses } from "@/data/courses";

export const mainNav = [
  {
    title: "Tanzkurse",
    isDropdown: true,
    links: courses,
  },
  {
    title: "Über die Tanzschule",
    path: "/ueber",
  },
  {
    title: "Kontakt",
    path: "/",
  },
];
