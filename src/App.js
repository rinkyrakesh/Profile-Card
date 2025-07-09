import "./App.css";

const skills = [
  {
    skill: "HTML CSS",
    level: "beginner",
    color: "red",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "React",
    level: "advanced",
    color: "green",
  },
  {
    skill: "HTML CSS",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Javascript",
    level: "beginner",
    color: "red",
  },
  {
    skill: "React",
    level: "beginner",
    color: "red",
  },
];

function Avatar() {
  return <img className="avatar" src="avatar.png" alt="Rinky Singh" />;
}
function Intro() {
  return (
    <div>
      <h1>Rinky Singh</h1>
      <p>
        Creative and detail-oriented Front-End Developer with a passion for
        crafting seamless user experiences and clean, maintainable code. Skilled
        in translating UI/UX designs into responsive, interactive websites and
        web applications using modern frameworks and technologies.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😊"}
        {level === "intermediate" && "💪"}
        {level === "advanced" && "🌟"}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
