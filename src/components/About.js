import React, { useContext } from "react";
import workDesk from "../images/workdesk.jpg";
import workingMan from "../images/WorkingMan.png";
import userContext from "../utils/userContext";
const About = () => {
  const { role } = useContext(userContext);
  return (
    <div id="about" className="max-w-6xl mx-auto  py-44">
      <div className="flex flex-col px-10 items-center gap-20 lg:flex-row ">
        <div className="max-w-sm md:max-w-lg relative mx-9 md:mx-0">
          <img className="rounded-xl" alt="workdesk" src={workDesk} />
          <div className="absolute h-32 w-32 md:h-44 md:w-44 flex justify-center items-center  -bottom-10 md:-right-16 -right-10 bg-white rounded-full">
            <img className="h-10 md:h-16" alt="man" src={workingMan} />
            <h1 className="w-full h-full absolute animate-spin-slow">
              {role.split("").map((text, i) => {
                return (
                  <span
                    key={i}
                    style={{ transform: "rotate(" + i * 14.2 + "deg)" }}
                    className={
                      "absolute font-semibold left-1/2 md:text-lg origin-[0_67px]  md:origin-[0_90px] "
                    }
                  >
                    {text.toUpperCase()}
                  </span>
                );
              })}
            </h1>
          </div>
        </div>
        <div className="max-w-lg text-center lg:text-justify">
          <h2 className="text-blue-600 font-bold  text-lg">ABOUT ME</h2>
          <h1 className="font-bold text-xl   my-5">
            A dedicated Front-end Developer based in Tamilnadu, India 📍
          </h1>
          <p className="text-gray-500 text-lg">
          I'm Mahesh, a graduate proficient in HTML, CSS, JavaScript, React, SQL, and Tailwind CSS. I excel in crafting dynamic and visually appealing user interfaces, leveraging React's component-based architecture. My experience with SQL enables efficient data management, while Tailwind CSS ensures streamlined styling workflows. Eager to apply my skills in a professional setting, I'm enthusiastic about contributing to front-end projects and continuously learning and growing as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
