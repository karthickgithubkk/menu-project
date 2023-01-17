import React from 'react'

const Categories = ({courses,filterItem}) => {
    let categories= courses.map((course)=>course.category);
    categories= ["All",...new Set(categories)];
    console.log(categories);
  return (
    <div className="btn-container">
        {categories.map((category,index)=>{
return(
    <button className="filter-btn" key={index}  onClick={()=>filterItem(category)}   >
{category}
    </button>
)

        })}
    </div>
  )
}

export default Categories