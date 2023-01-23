
import Header from "../components/atoms/Header";
import StudentList from "../components/organism/StudentList";
import SkillsList from "../components/organism/SkillsList";
import About from "../components/organism/About";
import Picture from "./Picture";
import Hoja from "../pages/Hoja";
import "../assets/styles/Landing.css"

function Landing() {
 
  const studentList = [
    {
      name: "Mauricio Dominguez Villatoro",
    },
  
    {
      name: "Correo:mauricio1dv5@gmail.com",
    },

    {
      name: "Facebook:Mauricio DV",
    },
    {
      name: "Github:Mauricio",
    },
  
  ];

  const skillsList = [
    {
      
      name: "Unity",
    },

    {
    
      name: "C++",
    },
    {
     
      name: "React",
    },
    {
     
      name: "Html",
    },
  
  ];



  const about= [
    {
      
      name: "Buenas,soy Mauricio, estudiante de la UP",
    },

    {
      name: "En la actualidad ando estudiando unity y diseño de 2d para videojuegos",
    },

    
    {
      name: "Mi meta es crear un videojuegos estilo harvest moon con mezclas de visual novels",
    }

  
  ];
 

  return (
    <>
      <Header />
      <Picture/>
      <Hoja/>
      <About about={about} />
      <SkillsList skillsList={skillsList} />
      <StudentList studentList={studentList} />
    
    </>
  );
}
export default Landing;
