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
  shortDescription: "Für die Fortgeschrittenen mit Vorkenntnissen.",
  shortFacts: ["freitags und/oder sonntags", "Ab Bronze, Silber, Gold"],
  paragraphs: [
    "Wenn du schon Vorerfahrung mitbringst und Lust hast, deine Tanzfähigkeiten auszubauen, bist du im Tanzkreis goldrichtig. ",
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
    img: ["/assets/oh_1.jpg"],
  },
  {
    title: "Welttanz Tanzkreis",
    path: "/kurse/erwachsen/tanzkreis",
    label: "Erwachsene",
    description: adultAdvanced,
  },
  {
    title: "Tanzen für Menschen mit Handicap",
    path: "/kurse/",
    label: "Alle",
    description: handicapped,
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
