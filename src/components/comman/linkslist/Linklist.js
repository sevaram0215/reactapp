import { Link } from "react-router-dom"
const LinkList=({linkarr=[],containerClass="",linkClass=""})=>{
    return(
    
        <div className={containerClass}>
            {linkarr.map(ele=>{
                return <Link key={ele.key} to={`/${ele.key}`}  className={linkClass}>{
                    ele.lable
                }</Link>
            })}
        </div>
  
    )
}
export default LinkList
