import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      {/*Navigation Bar*/}
      <div className="NavigationBar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/"><img src=''></img></a></li>
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
            <video width="854" height="480" controls>
              <source src="./Timeline.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

        {/* Image and Video Section */}
      <div className="media-section">
          {/* Small Rectangle - Profile Image */}
        <div className="profile-image">
          <img src="./aditya.jpg" alt="Profile" />
        </div>

        {/* Button */}
        <p className="project-button">My First Unreal Project !!</p>
      </div>
    </div>
  </div>
  );
};

export default App;
