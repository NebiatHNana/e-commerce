import React from "react";
import "./Portfolio.css"
import Project from "./Project";
//import Video from "./assets/components/video/vide";
export default function Tshirts() {
    return (
        <section>
        <div className="projects">
        <Project title="On Code"  videoUrl="/assets/on-code.mp4"/>
        <Project title="On Code"   imgUrl="/assets/tshirt-list.png"/>
        <Project title="On Code" imgUrl="/assets/workday-scheduler.png"/>
        <Project title="On Code"   imgUrl="/assets/code-quiz.png"/>
        <Project title="On Code"  imgUrl="/assets/runbuddy.png"/>
        <Project title="On Code" imgUrl="/assets/password.png"/>
        </div>
        </section>
    );
}
