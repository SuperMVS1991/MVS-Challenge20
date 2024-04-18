import Navigation from "../components/navigation";
import Mike from "../Mike.JPG";
function About() {
  return (
    <div>
      <Navigation />
      <div className="navbar navbar-expand-lg card">
        <img className="col-8"src={Mike} alt="Mike" />
        <h1>About</h1>
        <p>
          I am a web developer and desktop technician. I am a graduate of the
          University of Connecticut with a degree in Web Development. I have
          experience with HTML, CSS, JavaScript, and React. I am also graduate
          from Porter & Chester Institute of Technology in Hardware, Networking,
          and Software Troubleshooting. I have experience with Windows, MacOS,
          and Linux. I am also familiar with Active Directory, Group Policy, and
          PowerShell. I have experience with virtualization, networking, and
          cybersecurity. I am a quick learner and I am always looking to learn
          new technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
