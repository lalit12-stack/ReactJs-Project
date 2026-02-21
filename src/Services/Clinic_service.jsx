import { FaUsers, FaUser, FaBrain, FaHome } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const data = [
  {
    icon: <FaHome />,
    title: "Family Therapy",
    desc: "Strengthen family bonds and navigate life’s challenges—together.",
    path: "/Family_therapy",
  },
  {
    icon: <FaUsers />,
    title: "Group Therapy",
    desc: "Grow together. Heal together. Share your journey with others.",
    path: "/grouptherapy",
  },
  {
    icon: <FaUser />,
    title: "Individual Therapy",
    desc: "Discover clarity, build resilience, and reconnect with yourself.",
    path: "/indivisual",
  },
  {
    icon: <FaBrain />,
    title: "Psychological Assessments",
    desc: "Personalized mental health support. Diagnose. Plan. Empower.",
    path: "/phychological",
  },
  {
    icon: <MdFamilyRestroom />,
    title: "Parental Skills Training",
    desc: "Empowered parenting begins with insight, tools, and compassion.",
    path: "/parentaltherapy",
  },
];

const Clinic_service = () => {
  const navigate = useNavigate();
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
              <button onClick={() => navigate(item.path)}>Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Clinic_service;
