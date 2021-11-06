import { useParams } from "react-router"

function Param(){
    const words = ["cheese", "bread", "fun", "woaahhh"]
    const params = useParams()
    console.log(params)
    console.log(params)
    return <main>{words[params.first]} {params.second}</main>
}

export default Param