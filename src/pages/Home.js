import {useAppState} from "../ApplicationState"
import {useDataStore} from "../MoreAppState"
function Home(){

    const {dataStore, dispatch} = useDataStore()

    return <main style={{
        color: dataStore.font,
        backgroundColor: dataStore.background
    }}>Hello World</main>
}

export default Home