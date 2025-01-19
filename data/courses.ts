type CourseDescription = {
  price: string;
  unit: "pro Kurs" | "pro Monat" | "für 4 Wochen";
  shortDescription: string;
  shortFacts: string[];
  dances: string[];
  paragraphs: string[];
};

// COURSE DESCRIPTIONS
// Erwachsene: Welttanz Anfänger
const adultBeginner: CourseDescription = {
  price: "120 €",
  unit: "pro Kurs",
  shortDescription: "Lerne Standard- und Lateintänze ohne Vorkenntnisse.",
  shortFacts: [
    "Dauer: 8 Wochen",
    "1 x kostenloses Probetraining",
    "2 Unterrichtsstunden pro Woche möglich",
    "Standard- und Lateintänze, Modetänze, Discofox",
  ],
  dances: [
    "Discofox",
    "Cha Cha Cha",
    "Rumba",
    "Jive",
    "Langsamer Walzer",
    "Wiener Walzer",
    "Tango",
    "Modetänze",
  ],
  paragraphs: [
    "Lerne bei deinem Tanzlehrer Ludwig zusammen mit deinem Tanzpartner oder deiner Tanzpartnerin Lateintänze (Chachacha, Rumba, Jive), Standardtänze (Langsamer Walzer, Tango) sowie Discofox und Modetänze. Für diesen Kurs sind keinerlei Vorkenntnisse nötig.",
    "Du kannst dich auch gerne ohne Tanzpartner/in anmelden.",
  ],
};

// Erwachsene: Welttanz Tanzkreis
const adultAdvanced: CourseDescription = {
  price: "36 €",
  unit: "pro Monat",
  dances: [
    "Discofox",
    "Cha Cha Cha",
    "Rumba",
    "Jive",
    "Langsamer Walzer",
    "Wiener Walzer",
    "Tango",
    "Modetänze",
  ],
  shortDescription: "Für die Fortgeschrittenen mit Vorkenntnissen.",
  shortFacts: ["freitags und/oder sonntags", "Ab Bronze, Silber, Gold"],
  paragraphs: [
    "Wenn du schon Vorerfahrung mitbringst und Lust hast, deine Tanzfähigkeiten auszubauen, bist du im Tanzkreis goldrichtig. ",
  ],
};

const adultLineDance: CourseDescription = {
  price: "120 €",
  unit: "pro Kurs",
  dances: ["Line Dance"],
  shortDescription: "Gemeinsam tanzen, lachen, den Rhythmus spüren!",
  shortFacts: [
    "freitags und/oder sonntags",
    "bis zu 2 Termine pro Woche",
    "1 x kostenlose Probestunde",
  ],
  paragraphs: [
    "Erlebe die Freude am Tanzen und entdecke Line Dance – den geselligen Tanzstil, der Rhythmus, Bewegung und Gemeinschaft verbindet. Ob Anfänger oder Tanzprofi, jung geblieben oder erfahren im Leben: Line Dance bietet dir die Möglichkeit, ohne Tanzpartner Schritt für Schritt in die Welt der Country-Musik und moderner Beats einzutauchen. Gemeinsam in der Gruppe tanzen wir zu eingängigen Melodien und lassen uns vom Takt mitreißen – Spaß und gute Laune garantiert!",
    "Unsere Line-Dance-Kurse sind perfekt, um neue Leute kennenzulernen, den Alltag hinter sich zu lassen und fit zu bleiben. Mit klaren Schrittfolgen und leicht verständlichen Anleitungen sorgen wir dafür, dass wirklich jeder den Einstieg findet. Komm vorbei und lass dich von der Begeisterung anstecken – dein nächster Lieblingshobby wartet schon auf dich!",
  ],
};

// Tanzworkshop für Menschen mit Handicap
const handicapped: CourseDescription = {
  price: "23 €",
  unit: "pro Monat",
  shortDescription: "Inklusives Tanzen für Menschen mit Handicap",
  shortFacts: [
    "3 x kostenloses Probetraining",
    "donnerstags (16:00 oder 17:30)",
  ],
  dances: [
    "Discofox",
    "Cha Cha Cha",
    "Rumba",
    "Jive",
    "Langsamer Walzer",
    "Wiener Walzer",
    "Tango",
    "Modetänze",
  ],
  paragraphs: [
    "Lerne bei deinem Tanzlehrer Ludwig zusammen mit deinem Tanzpartner oder deiner Tanzpartnerin Lateintänze (Chachacha, Rumba, Jive), Standardtänze (Langsamer Walzer, Tango) sowie Discofox und Modetänze. Für diesen Kurs sind keinerlei Vorkenntnisse nötig.",
    "Du kannst dich auch gerne ohne Tanzpartner/in anmelden.",
  ],
};

// Kinder: Welttanz Anfänger
// const childBeginner: CourseDescription = {
//   price: "28 €",
//   unit: "für 4 Wochen",
//   shortDescription:
//     "Standard-, Latein- und Modetänze für Kinder ohne Vorkenntnisse.",
//   shortFacts: [
//     "Dauer: 4 Wochen",
//     "Bis zu 3 x kostenloses Probetraining",
//     "dienstags und/oder freitags",
//   ],
// };

export const courses = [
  {
    title: "Welttanz Anfänger",
    path: "/kurse/erwachsen/amateur",
    label: "Erwachsene",
    description: adultBeginner,
    courseTimes: [
      {
        day: "Montag",
        time: "19:30 – 21:00",
      },
      {
        day: "Freitag",
        time: "19:30 – 21:00",
      },
      {
        day: "Sonntag",
        time: "16:30 – 18:00",
      },
    ],
    img: [
      "https://fuenf-gewinnt.de/wp-content/uploads/2023/06/20230602_202820.jpg",
    ],
  },
  {
    title: "Welttanz Tanzkreis",
    path: "/kurse/erwachsen/tanzkreis",
    label: "Erwachsene",
    description: adultAdvanced,
    img: [
      "https://fuenf-gewinnt.de/wp-content/uploads/2023/06/20230602_202820.jpg",
    ],
  },
  {
    title: "Line Dance",
    path: "/kurse/erwachsen/line-dance",
    label: "Erwachsene",
    description: adultLineDance,
    single: true,
    img: ["https://live.staticflickr.com/7439/9320362457_f59d6e815c_b.jpg"],
  },
  {
    title: "Tanzen für Menschen mit Handicap",
    path: "/kurse/alle/handicap",
    label: "Alle",
    description: handicapped,
    img: [
      "https://fuenf-gewinnt.de/wp-content/uploads/2023/05/20230511_170041.jpg",
    ],
  },
  // {
  //   title: "Welttanz Anfänger (3 – 6 Jahre)",
  //   path: "/kurse/",
  //   label: "Kinder",
  //   description: childBeginner,
  // },
  // {
  //   title: "Welttanz Anfänger (7 – 10 Jahre)",
  //   path: "/kurse/",
  //   label: "Kinder",
  //   description: childBeginner,
  // },
];

export function getCategories() {
  return courses.map((course) => course.label);
}

export function getCoursesSortedByLabel() {
  const obj: any = {};

  courses.forEach((course) => {
    if (obj[course.label]) {
      obj[course.label].push(course);
      return;
    }

    obj[course.label] = [course];
  });

  return obj;
}
