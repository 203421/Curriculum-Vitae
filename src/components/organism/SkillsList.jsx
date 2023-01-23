import Caption2 from "../atoms/Caption2";
import Widge2 from "../atoms/Widge2";
function SkillsList({skillsList}) {

    return (
        <>
            <Caption2 msn2="Skills"/>
            {skillsList.map( (item) => (<Widge2 item={item}/>))}
        </>
      );
}

export default SkillsList;