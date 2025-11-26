export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  {name:"darkmode", link:"#darkmode  "}
];

export const gridItems = [
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-white",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 1,
    title: "I prioritize client collaboration.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-white",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-white",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-white",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 ",
    titleClassName: "justify-center md:justify-start lg:justify-center text-white",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  
  {
    id: 1,
    title: "NomNomNow",
    des: "A modern, full-stack restaurant discovery and review app built with Next.js, MongoDB, and OpenStreetMap/Foursquare APIs.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/re.svg","js-svgrepo-com.svg", "/node-js-svgrepo-com.svg", "/mongodb-svgrepo-com.svg", "/tailwind-svgrepo-com.svg"],
    link: "https://nom-nom-now-fullstackwebsite.vercel.app/",
    github: "https://github.com/LipsaDas0710/NomNomNow_FULLSTACKWEBSITE",
  },
  {
    id: 2,
    title: "Expense Tracker",
    des: "A secure and feature-rich full-stack expense tracking web application where users can log in, track daily expenses, encrypt entries, and share them with others — all with support for Google OAuth, JWT authentication, and MongoDB relationships.",
    img: "/p3.png",
    iconLists: ["html-5-svgrepo-com.svg", "/tailwind-svgrepo-com.svg","/js-svgrepo-com.svg","/node-js-svgrepo-com.svg", "/mongodb-svgrepo-com.svg"],
    link: "https://expense-tracker-5aov.onrender.com/",
    github: "https://github.com/LipsaDas0710/EXPENSE-TRACKER-FULLSTACKWEBSITE",
  },
  {
    id: 3,
    title: "ASL-Gesture-Recognition-Using-LSTM-OpenCV",
    des: "AI/ML-based project recognizes American Sign Language (ASL) gestures like \"Hello\", \"Thank You\", and \"I Love You\" in real time. It uses OpenCV for detecting hand and face gestures from live video and an LSTM-based neural network to understand gesture sequences.",
    img: "/p1.jpg",
    iconLists: ["/python-svgrepo-com.svg", "/tensorflow-svgrepo-com.svg", "/opencv-svgrepo-com.svg", "/numpy-svgrepo-com.svg"],
    link: "https://drive.google.com/file/d/1Jpt6mzGjeLdAGbK9b7P-z3uQudsjQYVa/view",
    github: "https://github.com/LipsaDas0710/ASL-Gesture-Recognition-Using-LSTM-OpenCV",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.png",
    iconLists: ["/next.svg", "/re.svg",  "/fm.svg", "/mongodb-svgrepo-com.svg", "node-js-svgrepo-com.svg"],
    link: "/ui.apple.com",
    github: "https://github.com/LipsaDas0710/NomNomNow_FULLSTACKWEBSITE",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/LipsaDas0710",
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/lipsadas0710",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/lipsa-das-45629134b/",
  },
];
