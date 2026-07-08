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
        title:
          "Foundations of Signals, Dynamical Systems, and Information Processing",
        dept: "EECS",
        code: "16A",
        link: "https://eecs16a.org",
      },
      {
        title: "Introduction to Circuits & Devices",
        dept: "EECS",
        code: "16B",
        link: "https://eecs16b.org",
      },
      {
        title: "The Beauty and Joy of Computing",
        dept: "COMPSCI",
        code: "10",
        link: "https://cs10.org",
      },
      {
        title: "The Structure and Interpretation of Computer Programs",
        dept: "COMPSCI",
        code: "61A",
        link: "https://cs61a.org",
      },
      {
        title: "Data Structures",
        dept: "COMPSCI",
        code: "61B",
        link: "https://www2.eecs.berkeley.edu/Courses/CS61B",
      },
      {
        title: "Great Ideas of Computer Architecture (Machine Structures)",
        dept: "COMPSCI",
        code: "61C",
        link: "https://cs61c.org",
      },
      {
        title: "Discrete Mathematics and Probability Theory",
        dept: "COMPSCI",
        code: "70",
        link: "https://www.eecs70.org",
      },
      {
        title: "Software Engineering",
        dept: "COMPSCI",
        code: "W169A",
        link: "https://www2.eecs.berkeley.edu/Courses/CS169/",
      },
      {
        title: "Efficient Algorithms and Intractable Problems",
        dept: "COMPSCI",
        code: "170",
        link: "https://cs170.org",
      },
      {
        title: "Foundations of Computer Graphics",
        dept: "COMPSCI",
        code: "184",
        link: "https://cs184.eecs.berkeley.edu",
      },
      {
        title: "Introduction to Database Systems",
        dept: "COMPSCI",
        code: "W186",
        link: "https://cs186berkeley.net",
      },
      {
        title: "Introduction to Artificial Intelligence",
        dept: "COMPSCI",
        code: "188",
        link: "https://inst.eecs.berkeley.edu/~cs188",
      },
      {
        title: "CS 10 Lab Assistant",
        dept: "COMPSCI",
        code: "197",
        link: "https://cs10.org/sp19/#:~:text=LA%20Hai%20Le-,LA%20Jared%20Tating,-LA%20Joey%20Stringer",
      },
      {
        title: "Music and Computing",
        dept: "MUSIC",
        code: "158A",
        link: "https://cnmat.berkeley.edu/content/music-158",
      },
      {
        title: "Foundations of Data Science",
        dept: "STAT",
        code: "C8",
        link: "https://data8.org",
      },
      {
        title: "Principles and Techniques of Data Science",
        dept: "DATA",
        code: "C100",
        link: "https://ds100.org",
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
        link: "https://graduate.catalog.berkeley.edu/courses/1039541/overview-aoYks",
      },
      {
        title: "Basic Issues in Cognition",
        dept: "COGSCI",
        code: "C100",
      },
      {
        title: "Computational Models of Cognition",
        dept: "COGSCI",
        code: "131",
        link: "https://undergraduate.catalog.berkeley.edu/courses/1039561/overview-aoYks",
      },
      {
        title: "Neuropsychology of Happiness",
        dept: "COGSCI",
        code: "190",
      },
      {
        title: "Brain, Mind, and Behavior",
        dept: "PSYCH",
        code: "C61",
      },
      {
        title: "Human Neuropsychology",
        dept: "PSYCH",
        code: "117",
      },
      {
        title: "Introduction to Linguistic Science",
        dept: "LINGUIS",
        code: "100",
        link: "https://undergraduate.catalog.berkeley.edu/courses/1139491",
      },
      {
        title: "History of Information",
        dept: "INFO",
        code: "103",
        link: "https://www.ischool.berkeley.edu/courses/info/103",
      },
    ],
  },
  miscellaneous: {
    name: "Misc.",
    courses: [
      {
        title: "The Modern Middle East",
        dept: "MELC",
        code: "11",
        link: "https://undergraduate.catalog.berkeley.edu/courses/1614211",
      },
      {
        title: "Backpacking",
        dept: "GEOG",
        code: "198",
      },
      {
        title: "Blaxploitation films",
        dept: "MEDIAST",
        code: "24",
      },
      {
        title: "The Craft of Writing",
        dept: "RHETOR",
        code: "R1A",
      },
      {
        title: "Introductory Filipino I",
        dept: "FILIPN",
        code: "1A",
      },
      {
        title: "Introductory Filipino II",
        dept: "FILIPN",
        code: "1B",
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
      },
      {
        title: "Music in American Cultures",
        dept: "MUSIC",
        code: "N26AC",
      },
      {
        title: "Voices of the Celtic World",
        dept: "CELTIC",
        code: "R1B",
      },
      {
        title: "Introduction to Logic",
        dept: "PHILOS",
        code: "W12A",
      },
    ],
  },
} as const satisfies Record<string, majorCourse>;
