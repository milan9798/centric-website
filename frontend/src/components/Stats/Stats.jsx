import "./Stats.css";
import {
  FaTasks,
  FaUsers,
  FaMedal,
  FaWarehouse,
} from "react-icons/fa";


function Stats() {
  const statsData = [
    {
      // icon: <FaProjectDiagram />,
       icon: <FaTasks />,
      number: "120+",
      title: "Projects Completed",
    },
    {
      icon: <FaUsers />,
      number: "500+",
      title: "Happy Clients",
    },
    {
      // icon: <FaAward />,
       icon: <FaMedal />,
      number: "15+",
      title: "Years Experience",
    },
    {
      // icon: <FaIndustry />,
       icon: <FaWarehouse />,
      number: "12000+",
      title: "MT Annual Capacity",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;  