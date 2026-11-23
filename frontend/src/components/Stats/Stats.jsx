

// import "./Stats.css";

// import {
//   FaTasks,
//   FaUsers,
//   FaMedal,
//   FaWarehouse,
// } from "react-icons/fa";


// function Stats() {
//   const statsData = [
//     {
   
//        icon: <FaTasks />,
//       number: "120+",
//       title: "Projects Completed",
//     },
//     {
//       icon: <FaUsers />,
//       number: "500+",
//       title: "Happy Clients",
//     },
//     {
      
//        icon: <FaMedal />,
//       number: "15+",
//       title: "Years Experience",
//     },

//     {
      
//        icon: <FaWarehouse />,
//       number: "12000+",
//       title: "MT Annual Capacity",
//     },
//   ];

//   return (
//     <section className="stats">
//       <div className="stats-container">
//         {statsData.map((item, index) => (
//           <div className="stat-card" key={index}>
//             <div className="stat-icon">{item.icon}</div>
//             <h2>{item.number}</h2>
//             <p>{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Stats;  






















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
      id: "projects",
      icon: FaTasks,
      number: "120+",
      title: "Projects Completed",
    },
    {
      id: "clients",
      icon: FaUsers,
      number: "500+",
      title: "Happy Clients",
    },
    {
      id: "experience",
      icon: FaMedal,
      number: "15+",
      title: "Years Experience",
    },
    {
      id: "capacity",
      icon: FaWarehouse,
      number: "12000+",
      title: "MT Annual Capacity",
    },
  ];

  return (
    <section className="stats" aria-label="Company statistics">
      <div className="stats-container">
        {statsData.map((item) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={item.id}>
              <div className="stat-icon">
                <Icon aria-hidden="true" />
              </div>

              <h2>{item.number}</h2>

              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
