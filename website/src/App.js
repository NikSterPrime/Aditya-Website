import React from 'react';
import './App.css';
import videoSrc from "./media/Timeline.mp4";
import profileimg from "./media/aditya.jpg";
import gitimg from "./media/github.png";

function App() {
  return (
    <div className="container">
      {/*Navigation Bar*/}
      <div className="NavigationBar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Contact</a></li>
           </ul>
           <div className="Name">
                <h3>Aditya Puranik's Website</h3>
            </div>
        </div>
    <div className="content">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className='sidebarlink'>
        <a href="#3d-projects" className="sidebar-button">3D Projects</a>
        <a href="#projects" className="sidebar-button">Projects</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="sidebar-button">LinkedIn</a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="sidebar-button">GitHub</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="maincontent">
        <div className="about">
          <div className='aboutcontent'>
            <h1 className="about-heading">
              About <span>Me:</span>
            </h1>
            <p className="about-text">
              Hey, I'm a Third Year Computer Science Engineering student at Atria Institute of Technology, Bangalore.
              I'm passionate about building immersive websites, developing immersive video games, and leveraging technology 
              to solve real-world challenges effectively. I'm always looking for new opportunities to learn and grow.
            </p>
          </div>
        {/* Large Rectangle - Video Player */}
          <div className="video-container">
            <video width="854" height="480" autoPlay controls>
              <source src={videoSrc} type="video/mp4" />
              Your Browser does not support this format
            </video>
          </div>
        </div>
      </div>

      <div className="tech-stack">
  <div className="tech-stack-sidebar"></div> {/* Yellow Sidebar */}
  <div className="tech-stack-content">
    <h3 className="tech-stack-title">TECH STACK:</h3>
    <div className="tech-stack-list">
      <span className="tech-item">Python</span>
      <span className="tech-item">C</span>
      <span className="tech-item">Unreal Engine</span>
      <span className="tech-item">JavaScript</span>
      <span className="tech-item">HTML</span>
      <span className="tech-item">CSS</span>
      <span className="tech-item">ReactJS</span>
    </div>
  </div>
</div>



        {/* Image and Video Section */}
      <div className="media-section">
          {/* Small Rectangle - Profile Image */}
        <div className="profile-image">
          <img id='profilepic' src={profileimg} alt="Profile" />
        </div>

        {/* Button */}
        <p className="project-button">My First Unreal Project !!</p>
      </div>
    </div>
  </div>
  
  
  );
};

export default App;
