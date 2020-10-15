import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    // **Only whenever something in the 2nd parameter array gets changed will it be called.**
    useEffect(() => {
        console.log("running")
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);


    // This useEffect is listening for when the resourceType changes. It will change when the user clicks a button.
    // On button click it will attempt to fetch json data and insert it into a list which is stored in state.
    // We add all the json objects to the itemsList and display it.


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