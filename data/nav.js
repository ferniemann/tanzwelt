const store = useCoursesStore();

if (!store.courses) store.getAllCourses();

const courses = store.courses.map((course) => {
  return { title: course.titel, path: "/kurse/" + course.id };
});

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
