// import Student from '../../models/student';
// import { getStudent } from '../../services/studentService';

// const Student = () => {

//   const { data, isLoading, isError } = useQuery('student', getStudent,{ enabled: true });
  
//   if(isLoading)
//     return <div>Loading...</div>

//   if(isError)
//     return <div>Error</div>

//   return (
//     <div>
//         <h1>{data?.firstName}</h1>
//         <img src={data?.image} alt="" />
//     </div>
//   )
// }

// export default Student