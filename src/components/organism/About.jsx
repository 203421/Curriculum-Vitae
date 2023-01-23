import Caption3 from "../atoms/Caption3";
import Widge3 from "../atoms/Widge3";

function About({about}) {

    return (
        <>
            <Caption3 msn3="About"/>
            {about.map( (item) => (<Widge3 item={item}/>))}
        </>
      );
}

export default About;