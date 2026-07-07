interface collegeCourse {
  title: string;
  dept: string; // Expanded to support other departments like MATH, MUSIC, etc.
  code: string;
  link?: string;
}

interface majorCourse {
  name: string;
  courses: collegeCourse[];
}

export const COURSES = {
  computerScience: {
    name: "Computer Science",
    courses: [
      {
        title: "Introduction to Microelectronic Circuits",
        dept: "EECS",
        code: "16A",
        link: "https://undergraduate.catalog.berkeley.edu/courses/eecs/",
      },
      {
        title: "Designing Information Devices and Systems II",
        dept: "EECS",
        code: "16B",
        link: "https://undergraduate.catalog.berkeley.edu/courses/eecs/",
      },
      {
        title: "The Beauty and Joy of Computing",
        dept: "COMPSCI",
        code: "10",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "The Structure and Interpretation of Computer Programs",
        dept: "COMPSCI",
        code: "61A",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Data Structures",
        dept: "COMPSCI",
        code: "61B",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Great Ideas of Computer Architecture (Machine Structures)",
        dept: "COMPSCI",
        code: "61C",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Discrete Mathematics and Probability Theory",
        dept: "COMPSCI",
        code: "70",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Software Engineering",
        dept: "COMPSCI",
        code: "W169A",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Efficient Algorithms and Intractable Problems",
        dept: "COMPSCI",
        code: "170",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Foundations of Computer Graphics",
        dept: "COMPSCI",
        code: "184",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Introduction to Database Systems",
        dept: "COMPSCI",
        code: "W186",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Introduction to Artificial Intelligence",
        dept: "COMPSCI",
        code: "188",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Field Study",
        dept: "COMPSCI",
        code: "197",
        link: "https://undergraduate.catalog.berkeley.edu/courses/compsci/",
      },
      {
        title: "Music and Computing",
        dept: "MUSIC",
        code: "158A",
        link: "https://undergraduate.catalog.berkeley.edu/courses/music/",
      },
      {
        title: "Foundations of Data Science",
        dept: "STAT",
        code: "C8",
        link: "https://undergraduate.catalog.berkeley.edu/courses/stat/",
      },
      {
        title: "Principles and Techniques of Data Science",
        dept: "DATA",
        code: "C100",
        link: "https://undergraduate.catalog.berkeley.edu/courses/data/",
      },
    ],
  },
  cognitiveScience: {
    name: "Cognitive Science",
    courses: [
      {
        title: "Introduction to Cognitive Science",
        dept: "COGSCI",
        code: "1",
        link: "https://undergraduate.catalog.berkeley.edu/courses/cogsci/",
      },
      {
        title: "Basic Issues in Cognition",
        dept: "COGSCI",
        code: "C100",
        link: "https://undergraduate.catalog.berkeley.edu/courses/cogsci/",
      },
      {
        title: "Computational Models of Cognition",
        dept: "COGSCI",
        code: "131",
        link: "https://undergraduate.catalog.berkeley.edu/courses/cogsci/",
      },
      {
        title: "Special Topics in Cognitive Science",
        dept: "COGSCI",
        code: "190",
        link: "https://undergraduate.catalog.berkeley.edu/courses/cogsci/",
      },
      {
        title: "Brain, Mind, and Behavior",
        dept: "PSYCH",
        code: "C61",
        link: "https://undergraduate.catalog.berkeley.edu/courses/psych/",
      },
      {
        title: "Human Neuropsychology",
        dept: "PSYCH",
        code: "117",
        link: "https://undergraduate.catalog.berkeley.edu/courses/psych/",
      },
      {
        title: "Introduction to Linguistic Science",
        dept: "LINGUIS",
        code: "100",
        link: "https://undergraduate.catalog.berkeley.edu/courses/linguis/",
      },
      {
        title: "History of Information",
        dept: "INFO",
        code: "103",
        link: "https://undergraduate.catalog.berkeley.edu/courses/info/",
      },
    ],
  },
  miscellaneous: {
    name: "Misc.",
    courses: [
      {
        title: "Modern Middle East",
        dept: "MELC",
        code: "11",
        link: "https://undergraduate.catalog.berkeley.edu/courses/melc/",
      },
      {
        title: "Backpacking",
        dept: "GEOG",
        code: "198",
        link: "https://undergraduate.catalog.berkeley.edu/courses/geog/",
      },
      {
        title: "Blaxploitation films",
        dept: "MEDIAST",
        code: "24",
        link: "https://undergraduate.catalog.berkeley.edu/courses/mediast/",
      },
      {
        title: "The Craft of Writing",
        dept: "RHETOR",
        code: "R1A",
        link: "https://undergraduate.catalog.berkeley.edu/courses/rhetor/",
      },
      {
        title: "Introductory Filipino",
        dept: "FILIPN",
        code: "1A",
        link: "https://undergraduate.catalog.berkeley.edu/courses/filipn/",
      },
      {
        title: "Introductory Filipino",
        dept: "FILIPN",
        code: "1B",
        link: "https://undergraduate.catalog.berkeley.edu/courses/filipn/",
      },
      {
        title: "Elementary German 1",
        dept: "GERMAN",
        code: "1",
        link: "https://undergraduate.catalog.berkeley.edu/courses/german/",
      },
      {
        title: "Basic Musicianship",
        dept: "MUSIC",
        code: "20A",
        link: "https://undergraduate.catalog.berkeley.edu/courses/music/",
      },
      {
        title: "Music in American Cultures",
        dept: "MUSIC",
        code: "N26AC",
        link: "https://undergraduate.catalog.berkeley.edu/courses/music/",
      },
      {
        title: "Voices of the Celtic World",
        dept: "CELTIC",
        code: "R1B",
        link: "https://undergraduate.catalog.berkeley.edu/courses/celtic/",
      },
      {
        title: "Introduction to Logic",
        dept: "PHILOS",
        code: "W12A",
        link: "https://undergraduate.catalog.berkeley.edu/courses/philos/",
      },
    ],
  },
} as const satisfies Record<string, majorCourse>;
