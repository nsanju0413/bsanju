import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanjeevlu Buggargani",
  initials: "SB",
  url: "https://www.bsanju.com/",
  location: "Montgomery,AL",
  locationLink: "https://www.google.com/maps/place/Montgomery",
  summary:
        "I am a Full Stack Developer with a Master’s in Computer Science and over 2.5 years of experience at Stonedge Technologies as an Android and Web App Developer. I developed user-friendly mobile and web applications, handling both frontend and backend tasks. Skilled in C, Python, JavaScript, and Java, I have experience with frameworks like Angular and React.js. My focus is on building efficient, scalable applications that enhance user experience and business processes.",
  description:
      "Software Engineer",
  avatarUrl: "/sanju.png",
  skills: [
    "C",
    "Python",
    "JavaScript",
    "Java",
    "MatLab",
    "Angular",
    "GoogleApp Script",
    "NLP",
    "Springboot",
    "HTML",
    "CSS",
    "SQL",
    "Oracle",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "buggargs@gmail.com",
    tel: "+1(334)781-3045",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nsanju0413",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nsanju0413/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.twitter.com/nsanju0413",
        icon: Icons.x,

        navbar: false,
      },
      HackerRank: {
        name: "HackerRank",
        url: "https://www.hackerrank.com/profile/nsanju0413",
        icon: Icons.openai,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Stonedge Technologies and Robotics",
      href: "https://www.stonedgetech.com/",
      badges: [],
      location: "Hyderabad,India",
      title: "Software Developer",
      logoUrl: "/stonedge.png",
      start: "Oct 2020",
      end: "July 2023",
      description:
        "I have worked with Java, Entity Framework, SQL Programming, jQuery, HTML, CSS, and SQL Database Administration. For the e-shoppy application, I implemented the Model-View-Controller (MVC) architecture, where the Model processes data, the View presents the user interface, and the Controller manages user requests and coordinates interactions between the Model and View.",
    }
  ],
  education: [
    {
      school: "Auburn University at Montgomery",
      href: "https://aum.edu",
      degree: "Masters in Computer Science",
      logoUrl: "/aum.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Mahahtma Gandhi  Institute of Techology",
      href: "https://mgit.ac.in",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/mgit.png",
      start: "2107",
      end: "2020",
    },
  ],
  projects: [
    
    {
      title: "Bonafide Generator",
      href: "",
      dates: "June 2017 - December 2018",
      active: true,
      description:
          "Developed an automated system for generating and issuing Bonafide certificates for\n" +
          "educational institutions",
      technologies: [
        "HTML & CSS",
        "Java",
        "SQL",
        "C++"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/nsanju0413/bonafide-generator",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nsanju0413/bonafide-generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.shutterstock.com/shutterstock/videos/1045132327/preview/stock-footage--authentic-or-phony-original-real-sincerity-unique-different-d-animation.webm",
    },
    {
      title: "Online Doctor Appointment System",
      href: "",
      dates: "January 2019 - May 2019",
      active: true,
      description:
          "Created a platform for scheduling and managing doctor appointments online, improving healthcare accessibility.",
      technologies: [
        "HTML & CSS",
        "Java",
        "SQL",
        "React.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/nsanju0413/online-doctor-appointmen",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nsanju0413/online-doctor-appointmen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.shutterstock.com/shutterstock/videos/1085169659/preview/stock-footage-senior-adult-talking-to-doctor-on-online-videoconference-using-smartphone-for-remote-medical.webm",
    },
    {
      title: "E-commerce Website (Online Shopping)",
      href: "",
      dates: "June 2019 - December 2019",
      active: true,
      description:
          "Built a comprehensive online shopping platform, enabling seamless browsing, purchasing, and payment processes.",
      technologies: [
        "HTML & CSS",
        "Java",
        "SQL",
        "C++"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/nsanju0413/ecommerce-websit",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nsanju0413/ecommerce-websit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.shutterstock.com/shutterstock/videos/3529079821/preview/stock-footage-online-marketplace-application-and-website-animation-e-commerce-and-shopping-for-furniture.webm",
    },  {
      title: "Ecops Mobile App",
      href: "",
      dates: "Janaury 2020 - April 2020",
      active: true,
      description:
          "Developed a mobile app for reporting and tracking local law enforcement issues, enhancing\n" +
          "community safety.",
      technologies: [
        "HTML & CSS",
        "Java",
        "SQL",
        "C++"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/nsanju0413/ecops",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nsanju0413/ecops",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.shutterstock.com/shutterstock/videos/3437524389/preview/stock-footage-this-is-the-animation-of-cyber-crime-man-with-cyber-crime-police.webm",
    },
    {
      title: "Accident Detection System",
      href: "",
      dates: "Janaury 2020 - April 2020",
      active: true,
      description: "Designed an IoT-based system to automatically detect vehicle accidents and send real-time alerts to emergency services.",
      technologies: [
        "IoT",
        "Real-Time Systems",
        "Sensors",
        "Wireless Communication"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/nsanju0413/accident-detection-system",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nsanju0413/accident-detection-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.shutterstock.com/shutterstock/videos/3392904017/preview/stock-footage-multi-vehicle-accident-during-winter-storm-line-cartoon-animation-traffic-collision-k-video.webm",
    },
    {
      title: "Secure File Transfer Cloud Project",
      href: "",
      dates: "Janaury 2020 - April 2020",
      active: true,
      description: "Implemented a cloud-based, encrypted file transfer system to ensure secure data transmission between users.",
      technologies: [
        "Cloud Computing",
        "Encryption",
        "Data Security",
        "Web Services"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/nsanju0413/secure-file-transfer-cloud",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nsanju0413/secure-file-transfer-cloud",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.shutterstock.com/shutterstock/videos/3425051791/preview/stock-footage-abstract-complex-grid-with-file-and-folder-icons-futuristic-document-management-system-concept-of.webm",
    },
    {
      title: "Art Gallery Management System",
      href: "",
      dates: "Janaury 2020 - April 2020",
      active: true,
      description: "Developed a management tool for art galleries, streamlining the administration of artwork, exhibitions, and sales.",
      technologies: [
        "Management Tools",
        "Database Systems",
        "Web Development",
        "UI/UX Design"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/nsanju0413/art-gallery",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nsanju0413/art-gallery",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.shutterstock.com/shutterstock/videos/1106444687/preview/stock-footage-mother-and-son-in-an-art-gallery-looking-at-paintings-view-from-the-back-a-family-in-an-art.webm",
    },
    {
      title: "TeamUp Project Management Tool",
      href: "",
      dates: "Janaury 2024 - April 2024",
      active: true,
      description: "Created a collaborative project management tool with real-time communication features to enhance team productivity.",
      technologies: [
        "Project Management",
        "Real-Time Communication",
        "Collaboration Tools",
        "Web Sockets"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/nsanju0413/teamup",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nsanju0413/teamup",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.shutterstock.com/shutterstock/videos/1063172881/preview/stock-footage-close-up-of-diverse-multiethnic-team-having-conversation-in-meeting-room-in-a-creative-office.webm",
    },


],
} as const;
