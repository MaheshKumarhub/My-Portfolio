
import frontEnd from "../images/certificates/GreatStack.png";

import reactBasics from "../images/certificates/Besant.jpeg";

function certificateObj(id, title,  description, image) {
  return {
    id,
    title,
   
    description,
    image,
  };
}

const CERTIFICATES = [
  certificateObj(
    1,
    "React Frontend",
   
    "GreatStack is a coding test and interview solution for hiring developers. Successfully Passed the GreatStack Assessment for the Skill (React)  with valid certification authorized by Avinash Kumar.",
    frontEnd
  ),
  certificateObj(
    2,
    "Frontend Developer (React)",
    "Besant Technology is a leading Software training sector. I join to learn Frontend Developer Course. Now I finished my Frontend Course with valid certification authorized by Besant Technology.",
    reactBasics
  ),
  
];
export default CERTIFICATES;

