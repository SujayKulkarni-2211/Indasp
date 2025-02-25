import React from "react";
import "./App.css";
import ScrollEffect from "./components/ScrollEffect";
import Trainer from "./components/Trainer";
import Team from "./components/Team";
import EventSchedule from "./components/EventSchedule";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="hero">
        <h1>Bring Your Ideas to Reality</h1>
        <h2>Introduction to Data Science with Python (InDaSP)</h2>
        <p className="tagline">Opportunities await you!</p>
      </header>

      <ScrollEffect />

      <section className="about">
        <h2>About the Workshop</h2>
        <p>
          This workshop is designed to introduce students to Data Science using Python. 
          As the Data Science Student Body, we aim to provide hands-on learning, industry 
          exposure, and research opportunities to help students grow.
        </p>
      </section>

      <section className="learning">
        <h2>What You Will Learn</h2>
        <ul>
          <li>Python Basics for Data Science</li>
          <li>Data Cleaning and Preprocessing</li>
          <li>Exploratory Data Analysis</li>
          <li>Machine Learning Fundamentals</li>
          <li>Building and Evaluating Models</li>
          <li>Real-world Case Studies</li>
        </ul>
      </section>

      <section className="prerequisites">
        <h2>Prerequisites</h2>
        <ul>
          <li>Python installed on your system</li>
          <li>VS Code (or Jupyter Notebook/Anaconda)</li>
        </ul>
      </section>

      <section className="outcome">
        <h2>Outcome of the Workshop</h2>
        <p>
          By the end of this workshop, you will have a solid understanding of data science fundamentals, 
          hands-on experience with Python, and projects to showcase in your portfolio.
        </p>
      </section>

      <section className="prizes">
        <h2>Prizes</h2>
        <p>Exciting rewards for top performers!</p>
      </section>

      <Trainer />
      <Team />
      <EventSchedule />

      <section className="contact">
        <h2>Contact</h2>
        <p>For any queries, reach out to us!</p>
      </section>
    </div>
  );
};

export default App;
