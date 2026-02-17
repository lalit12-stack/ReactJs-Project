import { FaUsers, FaUser, FaBrain, FaHome } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const data = [
  {
    icon: <FaHome />,
    title: "Family Therapy",
    desc: "Strengthen family bonds and navigate life’s challenges—together.",
  },
  {
    icon: <FaUsers />,
    title: "Group Therapy",
    desc: "Grow together. Heal together. Share your journey with others.",
  },
  {
    icon: <FaUser />,
    title: "Individual Therapy",
    desc: "Discover clarity, build resilience, and reconnect with yourself.",
  },
  {
    icon: <FaBrain />,
    title: "Psychological Assessments",
    desc: "Personalized mental health support. Diagnose. Plan. Empower.",
  },
  {
    icon: <MdFamilyRestroom />,
    title: "Parental Skills Training",
    desc: "Empowered parenting begins with insight, tools, and compassion.",
  },
];

const Clinic_service = () => {
  return (
    <>
      <section className="Clinic-banner">
        <h1>Clinic Services</h1>
      </section>

      <section className="offer-section">
        <h2>What We Offer</h2>

        <div className="offer-cards">
          {data.map((item, index) => (
            <div className="offer-card" key={index}>
              <div className="card-header">
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Clinic_service;
