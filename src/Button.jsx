export function Button(props) {

    const style = {
        "font-size": "24px",
        "background-color": "black",
        "color": "yellow",
        "width": "150px",
        "height": "50px"
    };

    return <div style={{"text-align":"center"}}>
        <button style={style} onClick={props.click}> {props.caption} </button>
    </div>
}