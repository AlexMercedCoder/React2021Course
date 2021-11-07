/** @jsxImportSource @emotion/react */

import "./Styling.css"
import "./Styling.scss"
import Styled from "styled-components"
import {css} from "@emotion/react"
import {createUseStyles} from "react-jss"

const useStyles = createUseStyles({
    button: {
        backgroundColor: "blue",
            color: "white",
            fontSize: "2em",
            padding: "10px"
    }
})

const StyledButton = Styled.button`
background-color: pink;
color: crimson;
font-size: 2em;
border: none;
border-radius: 30px
padding: 10px;
`

function Styling(){

    const classes = useStyles()
    console.log(classes)

    return <main>

        <button style={{
            backgroundColor: "blue",
            color: "white",
            fontSize: "2em",
            padding: "10px"
        }}>inline style</button>

        <button className="css">CSS</button>

        <div className="sass"><button>SASS</button></div>

        <StyledButton>Styled Components</StyledButton>

        <button css={css`
        background-color: pink;
        color: crimson;
        font-size: 2em;
        border: none;
        border-radius: 30px
        padding: 10px;
        `}>Emotion</button>

        <button className={classes.button}>JSS</button>


    </main>
}

export default Styling