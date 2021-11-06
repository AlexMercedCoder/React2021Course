import {Loop, Condition} from "merced-react-hooks"

function Iterate(){

    const dogs = ["Sparky", "spot", "Rover"]

    // const dogJsx = []

    // for (let dog of dogs){
    //     dogJsx.push(<h1>{dog}</h1>)
    // }

    const ifTrue = <h1>true</h1>

    const ifFalse = <h1>false</h1>


    return <div>
    <Loop 
    withthis={dogs}
    dothat={(dog, index) => <h1>{dog}</h1>}
    />
    <Condition  if={1 < 3} ifnot={ifFalse}>
    {ifTrue}    
    </Condition>
    </div>
}

export default Iterate