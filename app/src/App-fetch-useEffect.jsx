import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    // **Only whenever something in the 2nd parameter array gets changed will it be called.**

    // Only gets called when resourceType changes, or whatever is in the 2nd parameter array.
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);




    //onMount = empty array
    // useEffect(() => {
    //     console.log('onMount')
    // }, []);

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )


}