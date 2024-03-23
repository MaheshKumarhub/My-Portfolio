import nike from "../images/projects/Nike.png";
import nostra from "../images/projects/Nostra.png";
import todo from "../images/projects/To-Do.png";
import vidtube from "../images/projects/VidTube.png";
import shopper from "../images/projects/Shopper.png";
import { AiFillYoutube } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { GiLargeDress } from "react-icons/gi";
import { RiTodoFill } from "react-icons/ri";

export const stacks = ["React", "Tailwind CSS", "Vercel","HTML", "CSS", "JavaScript"];

export const projects = [
  {
    title: "SHOPPER",
    id: 1,
    image: shopper,
    techStack: ["React", "Tailwind CSS", "Vercel" ],
    brand: FaOpencart,
    overView:
      " A sleek, modern e-commerce platform built with React and Tailwind CSS, offering a seamless shopping experience for men, women, and children's fashion with a login page. Leveraging intuitive design and robust functionality.",
    webUrl: "https://shoper-dun.vercel.app/",
    gitHubCode: "https://github.com/MaheshKumarhub/Shoper",
  },
  {
    title: "VIDTUBE",
    id: 2,
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
    id: 3,
    image: nike,
    techStack: ["React", "Tailwind CSS", "Vercel" ],
    brand: GiRunningShoe,
    overView:
      "Created a vibrant Nike shoe website from scratch using React and Tailwind CSS. Merging design finesse with robust development, the project delivers an engaging platform for browsing Nike shoes. Leveraged React's flexibility and Tailwind CSS's utility-first approach to streamline development and enhance user experience.",
    webUrl: "https://ni-kee.vercel.app/",
    gitHubCode: "https://github.com/MaheshKumarhub/NIkee",
  },

  {
    title: "NOSTRA",
    id: 4,
    image: nostra,
    techStack: ["HTML", "CSS", "JavaScript"],
    brand: GiLargeDress,
    overView:
      "Developed 'Nostra,' an e-commerce website, utilizing HTML, CSS, and JavaScript. Seamlessly integrated essential features including home, collection, and contact pages, enriched with intuitive navigation. Implemented a dynamic search bar functionality to enhance user experience and accessibility.",
    webUrl: "https://maheshkumarhub.github.io/E-Commers-Website/",
    gitHubCode: "https://github.com/MaheshKumarhub/E-Commers-Website",
  },
  {
    title: "TO-DO LIST",
    id: 5,
    image: todo,
    techStack: ["HTML", "CSS", "JavaScript"],
    brand: RiTodoFill,
    overView:
      "This is my first project using HTML and CSS to display the to-do list.Use JavaScript to add dynamic functionality to the to-do list. Allow users to add, edit, and remove tasks in real-time without the need for page reloads.Implement local storage in JavaScript to store users' to-do list data.",
    webUrl: "https://maheshkumarhub.github.io/To-Do-list/To-Do.html",
    gitHubCode: "https://github.com/MaheshKumarhub/To-Do-list",
  },
];
