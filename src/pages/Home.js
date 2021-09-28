import React from 'react'
import { Button } from 'reactstrap'

const Home = (props) => {
    return (
        <div>
            <h1>Home Page</h1>
            <Button onClick={() => {console.log(props);props.history.push('/sell')}}>Cambiar de pagina</Button>
        </div>
    )
}
 export default Home;