import React,{useState} from 'react'
import "./App.css"
import data from "./data";
import Courses from './Component/Courses';
import Categories from './Component/Categories';

const App = () => {

  const [courses,setcourses]= useState(data);
  console.log(courses);
  
const filterItem= (category)=>{
if(category==="All"){
  setcourses(data);
}else{
  const newItem =  courses.filter((course)=>
   

    course.category === category,
   
   
  );
  setcourses(newItem);
  
}
}


  return (
   <menu>
<section className="menu section">
<div className="title">
  <h2>DEAL OF THE DAY</h2>
  <div className="underline"></div>
 </div>
 <Categories courses={courses} filterItem={filterItem}  /> 
 <Courses courses={courses}/>

</section>
    
   </menu>
  )
}

export default App