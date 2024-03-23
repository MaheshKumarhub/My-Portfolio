import { createContext } from "react";

const userContext = createContext({
  name: "Mahesh Kumar",
  role: "Front-End Web Developer",
  location: "Tamilnadu, India",
  mail: "mahesh199979@gmail.com",
  gitHubProfile: "https://github.com/MaheshKumarhub",
  linkedInProfile: "https://www.linkedin.com/in/mahesh-kumar-877299209/",
});

export default userContext;
