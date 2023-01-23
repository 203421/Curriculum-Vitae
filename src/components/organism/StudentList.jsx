import Caption from "../atoms/Caption";
import Widge from "../atoms/Widge";
function StudentList({studentList}) {

    return (
        <>
            <Caption id="aa" msn="Datos"/>
            {studentList.map( (item) => (<Widge item={item}/>))}
        </>
      );
}

export default StudentList;