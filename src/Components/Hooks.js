import React, {useState, useEffect} from 'react';


export default props => {
    let [username, setUsername] = useState(''),
        [count , setCount] = useState(0);

    useEffect(() => {
        //example of componentDidMount leave the dependency array empty it will
        //fire only once 
        //you could put an axios request 
        setUsername('Aaron')
    }, [])

    useEffect(() => {
        //example of componentDidUpdate
        console.log('Count Changed')
    }, [count])
    return (
        <div>
            <h1>Hello, {username}</h1>
            <input
                placeholder='username'
                value={username}
                onChange={e => setUsername(e.target.value)}/>
            <br></br>
            {count}
            <br></br>
            <br></br>
            <button onClick={()=> setCount(count - 1)}>Count Down</button>
            <button onClick={()=> setCount(count + 1)}>Count Up</button>
        </div>
    )
}