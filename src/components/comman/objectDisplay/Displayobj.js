const DisplayObject=({objectData={}, title="" })=>{
    return(
        <div className="Display_child_cont">
       
        <h3>{title}</h3>
      {Object.keys(objectData).map((attr) => {
        return (
          <div key={attr}>
            <span>{attr}</span>:&nbsp;
            <span>{objectData[attr]}</span>
          </div>
        );
      })}
    </div>
    )
}
export default DisplayObject