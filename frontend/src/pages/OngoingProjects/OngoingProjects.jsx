// import Navbar from "../../components/Navbar/navbar";
// import Footer from "../../components/Footer/Footer";
// import "./OngoingProjects.css";

// const projects = [
//   {
//     id: 1,
//     project: "Chandlodiya B Station under Amrit Bharat Station Scheme",
//     tonnage: "250 MT",
//     structure: "Foot Over Bridge – Composite Girder",
//     client: "Western Railway – Ahmedabad Division",
//     completion: "January 2026",
//   },
//   {
//     id: 2,
//     project: "Chandlodiya B2 Station under Amrit Bharat Station Scheme",
//     tonnage: "748 MT",
//     structure: "Foot Over Bridge – Composite Girder",
//     client: "Western Railway – Ahmedabad Division",
//     completion: "March 2026",
//   },
//   {
//     id: 3,
//     project: "ROB Bridge 1A – 60M Bow String Arch Girder & 18M Composite Steel Girder",
//     tonnage: "820 MT",
//     structure: "Bow String Arch Grider",
//     client: "Northeast Frontier Railway",
//     completion: "March 2026",
//   },
//   {
//     id: 4,
//     project: "Ankleshwar FOB Station under Amrit Bharat Station Scheme",
//     tonnage: "400 MT",
//     structure: "Foot Over Bridge - composite Girder",
//     client: "Western Railway-Vadodara Division",
//     completion: "April 2026",
//   },
//    {
//     id: 5,
//     project: "Nandurbar FOB Station under Amrit Bharat Station Scheme",
//     tonnage: "150 MT",
//     structure: "Foot Over Bridge - composite Girder",
//     client: "Western Railway-Mumbai Division",
//     completion: "February 2026",
//   },
//   {
//     id: 6,
//     project: "Conveyor Gallery",
//     tonnage: "715 MT",
//     structure: "Conveyor Gallery",
//     client: "AM/NS Hazira,surat",
//     completion: "August 2025",
//   },

  

// ];

// export default function OngoingProjectDetails() {
//   return (
//     <>
//       <Navbar />

//       <section className="ongoing-hero">
//         <div className="ongoing-container">
//           <span className="hero-tag">OUR PROJECTS</span>

//           <h1>Ongoing Projects</h1>

//           <p>
//             Explore our ongoing infrastructure and steel fabrication projects
//             being executed with quality, safety and engineering excellence.
//           </p>
//         </div>
//       </section>

//       <section className="ongoing-table-section">
//         <div className="ongoing-container">

//           <div className="table-wrapper">

//             <table className="ongoing-table">

   

//              <thead>
//                 <tr>
//               <th>Sr. No.</th>
//              <th>Project</th>
//              <th>Tonnage</th>
//               <th>Structure</th>
//                <th>Client</th>
              
//               <th>Completion</th>
//                   </tr>
//                    </thead>

//               <tbody>

//                 {projects.map((item) => (
//                   <tr key={item.id}>

//                     <td>{item.id}</td>

//                     <td>{item.project}</td>

//                     <td>{item.tonnage}</td>

//                     <td>{item.structure}</td>

//                     <td>{item.client}</td>

//                     <td>{item.completion}</td>

//                   </tr>
//                 ))}

//               </tbody>

//             </table>

//           </div>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }