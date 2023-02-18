function Light(props) {
    return(
        <div className="circle" onClick={()=>props.activateLight(props.light)} style={props.color}></div>
    );
}
export default Light;