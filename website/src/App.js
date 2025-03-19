import React from 'react';
import './App.css';
import videoSrc from "./media/Timeline.mp4";
import profileimg from "./media/aditya.jpg";

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
            Hey, I'm <span id='centrehigh'>Aditya Puranik</span>, a Third-Year Computer Science Engineering student at Atria Institute of Technology, Bangalore. I have a strong passion for building immersive digital experiences, whether it's through interactive websites, game development, or real-world problem-solving with technology.

I specialize in web development, game design, machine learning, and digital media production. I love pushing creative and technical boundaries by experimenting with 3D modeling, AI-driven applications, and real-time rendering in Unreal Engine. My projects range from developing AI-powered music generators to crafting cinematic storytelling experiences in game engines.

<br></br>Beyond coding, I have experience in live production, video editing, and VFX, having worked on esports tournaments, TEDx events, and cinematic projects. My goal is to combine technology with creativity to create seamless user experiences and innovative solutions that make an impact.

I'm always looking for new challenges, collaborations, and opportunities to grow. If you're working on an exciting project or have an idea worth exploring, feel free to reach out! 🚀
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
          <p id='nametag'>Aditya Puranik</p>
        </div>

        {/* Button */}
        <p className="project-button">My First Unreal Project !!</p>
      </div>
    </div>
  </div>
  
  
  );
};

export default App;
