import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="main-container">
        <h2>Our Team</h2>
        <h3>Brittany Whitsett</h3>
        <p>
          Brittany is best described as a mom, a gamer, a student, and now a
          future web developer.
        </p>
        <h3>Dusan Momcilovic</h3>
        <p>
          Dusan wanted to give special thanks to his wife Sarah and soon to
          arrive baby daughter Petra!
        </p>

        <h3>Steve Anderson</h3>
        <p>Steve was present for at least some of the project</p>
        <ul>
          <h3>Special Thanks To:</h3>
          <li>Mitch</li>
          <li>Andrea</li>
          <li>Carmen</li>
          <li>
            Elizabeth, Laura, Shauna and the rest of the Career Service Crew
          </li>
          <li>All the GC Staff</li>
          <li>Stella, Fiona, and Ward</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
