import nike from "../images/projects/Nike.png";
import passop from "../images/projects/passop.png"
import gym from "../images/projects/GYM.png"
import vidtube from "../images/projects/VidTube.png";
import shopper from "../images/projects/Shopper.png";
import { AiFillYoutube } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";


export const stacks = ["React", "Tailwind CSS", "Vercel","HTML", "CSS", "JavaScript"];

export const projects = [
  {
    title: "SHOPPER",
    id: 1,
    image: shopper,
    techStack: ["React", "Tailwind CSS", "FireBase" ],
    brand: FaOpencart,
    overView:
      " A sleek, modern e-commerce platform built with React, Tailwind CSS, and Firebase for login functionality, offering a seamless shopping experience for men, women, and children's fashion. The platform leverages intuitive design and robust functionality to enhance the user experience.",
    webUrl: "https://shoper-dun.vercel.app/",
    gitHubCode: "https://github.com/MaheshKumarhub/Shoper",
  },
  {
    title: "PassOP",
    id: 2,
    image: passop,
    techStack: ["MongoDB","Express", "React", "Node" ],
    brand: RiLockPasswordFill,
    overView:
      " PassOp is a secure and efficient application designed to store website links, usernames, and passwords. Built with a robust tech stack including React.js for the front end, MongoDB for the database, and Express with Node.js for the backend, PassOp ensures a seamless user experience and reliable data management. It offers users a centralized and secure solution to manage their credentials, enhancing both security and convenience.",
    webUrl: "https://passop-frontend.onrender.com/",
    gitHubCode: "https://github.com/MaheshKumarhub/passOpMongo",
  },
  {
    title: "Elite",
    id: 3,
    image: gym,
    techStack: ["Express", "React", "Node" ],
    brand: CgGym,
    overView:
      "This single-page gym website features a contact form enabling users to send messages, managed via SMTP to reach Gmail promptly. Developed using React for the frontend and Express with Node.js for the backend, it utilizes Nodemailer for SMTP operations. Additionally, the site incorporates a BMI calculator, enhancing user engagement with health-related calculations and providing a comprehensive interactive experience.",
    webUrl: "https://fitness-1-hkxi.onrender.com/",
    gitHubCode: "https://github.com/MaheshKumarhub/Fitness",
  },
  {
    title: "VIDTUBE",
    id: 4,
    image: vidtube,
    techStack: ["React", "Tailwind CSS", "Vercel"],
    brand: AiFillYoutube,
    overView:
      "VidTube: A dynamic YouTube clone developed in React, harnessing the power of YouTube's Live API for real-time streaming  capabilities. Seamlessly replicating the YouTube experience, VidTube offers users a familiar platform to engage with live content. With intuitive design and robust functionality.",
    webUrl: "https://vid-tub.vercel.app/",
    gitHubCode: "https://github.com/MaheshKumarhub/VidTube",
  },
  {
    title: "NIKE",
    id: 5,
    image: nike,
    techStack: ["React", "Tailwind CSS", "Vercel" ],
    brand: GiRunningShoe,
    overView:
      "Created a vibrant Nike shoe website from scratch using React and Tailwind CSS. Merging design finesse with robust development, the project delivers an engaging platform for browsing Nike shoes. Leveraged React's flexibility and Tailwind CSS's utility-first approach to streamline development and enhance user experience.",
    webUrl: "https://ni-kee.vercel.app/",
    gitHubCode: "https://github.com/MaheshKumarhub/NIkee",
  },

  
];
