import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      {/*Navigation Bar*/}
      <div className="NavigationBar">
            <div className="Name">
                <h3>Aditya Puranik websites</h3>
            </div>
            <div className="NavPanel">
                <button><a href="/" className="Home"><p>Home</p></a></button>
                <button><a href="/" className="Contact"><p>Contact</p></a></button>
                <button><a href="/" className="Github"><img src="/"></img></a></button>
            </div>
        </div>
      <div className="content">
      {/* Left Sidebar */}
      <div className="sidebar">
        <a href="#3d-projects" className="sidebar-button">3D Projects</a>
        <a href="#projects" className="sidebar-button">Projects</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="sidebar-button">LinkedIn</a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="sidebar-button">GitHub</a>
      </div>

      {/* Main Content */}
      <div className="maincontent">
        <div className="about">
        <h1 className="about-heading">
          About <span>Me:</span>
        </h1>
        <p className="about-text">
          Hey, I'm a Third Year Computer Science Engineering student at Atria Institute of Technology, Bangalore.
          I'm passionate about building immersive websites, developing immersive video games, and leveraging technology 
          to solve real-world challenges effectively. I'm always looking for new opportunities to learn and grow.
        </p>
        {/* Large Rectangle - Video Player */}
        <div className="video-container">
            <video controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </div>

        {/* Image and Video Section */}
        <div className="media-section">
          {/* Small Rectangle - Profile Image */}
          <div className="profile-image">
            <img src="/path-to-your-image.jpg" alt="Profile" />
          </div>

        {/* Button */}
        <button className="project-button">My First Unreal Project !!</button>
      </div>
    </div>
  </div>
  );
};

export default App;
