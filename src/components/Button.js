function Button(props){
    console.log(props)
    return <button style={{
        backgroundColor: props.color,
        padding: "10px",
        color: "white",
        fontSize:"1.5em",
        fontWeight: "900",
        borderRadius: "30px",
        border: "none"
    }}>
        {props.children}
        </button>
}

export default Button