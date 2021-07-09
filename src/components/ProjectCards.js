import React from "react";
import Project from "./Project.js";
import "./projectCards.css";

//gifs and images
import TinyApp from "../images/TinyApp.png";
import Tweeter from "../images/Tweeter.png";
import Portfolio from "../images/Portfolio.png";
import InterviewScheduler from "../images/InterviewScheduler.png";
import BucketListing from "../images/BucketListing.gif";
import WoFroH from "../images/WoFroH.gif";
import Jungle from "../images/Jungle.png";
// import MiTienda from "../images/MiTienda.gif";
// import MiCine from "../images/MiCine.gif";
// import Codewars from "../images/Codewars.png";
// import Yelp from "../images/Yelp.png";
// import Instagram from "../images/Instagram.png";
// import RecipeApp from "../images/RecipeApp.gif";

const ProjectCards = () => {
  return (
    <div className="flex justify-center justify-content">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {/* row one */}
        <div className="pt-32 px-10 ">
          <Project
            imgsrc={WoFroH}
            title="WoFroH(Workout From Home)"
            description="App that generates exercises and workouts based on user's preferred muscle groups and types of exercises."
            link="https://github.com/IevgenDilevskyi/wofroh"
            github="Check out the repository👈"
          />
        </div>
        <div className="pt-32 px-10">
          <Project
            imgsrc={InterviewScheduler}
            title="Interview Scheduler"
            description="Interview Scheduler is a React app that allows users to book and cancel interviews."
            link="https://github.com/IevgenDilevskyi/scheduler"
            github="Check out the repository👈"
          />
        </div>
        <div className="pt-32 px-10">
          <Project
            imgsrc={BucketListing}
            title="BucketListing"
            description="Smart ToDo app that uses APIs to automatically categorize inserted key words into Eat, Read, Watch, Buy categories.."
            link="https://github.com/IevgenDilevskyi/gitToDo"
            github="Check out the repository👈"
          />
        </div>
        <div className="pt-32 px-10">
          <Project
            imgsrc={Tweeter}
            title="Tweeter"
            description="Tweeter is a simple, single-page Twitter clone."
            link="https://github.com/IevgenDilevskyi/tweeter"
            github="Check out the repository👈"
          />
        </div>
        {/* row two */}
        <div className="pt-32 px-10">
          <Project
            imgsrc={TinyApp}
            title="TinyApp"
            description="Full-stack web app that allows users to shorten their URLs (à la bit.ly)."
            link="https://github.com/IevgenDilevskyi/tinyapp"
            github="Check out the repository👈"
          />
        </div>
        <div className="pt-32 px-10">
          <Project
            imgsrc={Jungle}
            title="Jungle"
            description="Jungle is an e-commerce application built with Rails and Ruby on Rails."
            link="https://github.com/IevgenDilevskyi/jungle-rails"
            github="Check out the repository👈"
          />
        </div>
        <div className="pt-32 px-10">
          <Project
            imgsrc={Portfolio}
            title="Portfolio"
            description="The repository contains details of this very portfolio."
            link="https://github.com/elliottthomlison/Portfolio"
            github="Check out the repository👈"
          />
        </div>
        {/* <div className="pt-32 px-10">
          <Project
            imgsrc={MiTienda}
            title="MiTienda"
            description="MiTienda is an e-commerce app that allows users to shop."
            link="https://github.com/elliottthomlison/MiTienda"
            github="Check out the repository👈"
          />
        </div>
        {/* row three */}
        {/* <div className="pt-32 px-10">
          <Project
            imgsrc={MiCine}
            title="MiCine"
            description="MiCine is a movie-searching app where users can read and see ratings."
            link="https://github.com/elliottthomlison/MiCine"
            github="Check out the repository👈"
          />
        </div>
        <div className="pt-32 px-10">
          <Project
            imgsrc={Codewars}
            title="Codewars"
            description="Codewars contains solutions of problems that I solved."
            link="https://github.com/elliottthomlison/Codewars"
            github="Check out the repository👈"
          />
        </div>
        <div className="pt-32 px-10">
          <Project
            imgsrc={Yelp}
            title="Yelp Clone"
            description="Yelp clone is a duplication of Yelp created via the PERN stack."
            link="https://github.com/elliottthomlison/Yelp-Clone"
            github="Check out the repository👈"
          />
        </div> */}
        {/* <div className="pt-32 px-10">
          <Project
            imgsrc={Instagram}
            title="Instagram Clone"
            description="Instagram Clone is a duplication created with React and Firebase."
            link="https://github.com/elliottthomlison/Instagram-Clone"
            github="Check out the repository👈"
          />
        </div> */}
        {/* row four */}
        {/* <div className="pt-32 px-10">
          <Project
            imgsrc={RecipeApp}
            title="React Projects"
            description="An ongoing repository of React projects created for the sake of practice."
            link="https://github.com/elliottthomlison/React-Projects"
            github="Check out the repository👈"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCards;
