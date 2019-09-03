import React, { useState, useEffect } from 'react';
import { useHttpGet } from './hooks/http'
import './App.css';

export default function App() {
    const ApiEndPoint = 'https://reqres.in/api/users'
    const [fetchedData, ] = useHttpGet(ApiEndPoint, [])
    
    // console.log(fetchedData)

    return (
        <div className="App">
            <header className="App__header">
                <h1>Users Database</h1>
            </header>
            { fetchedData 
                ? 
                    <main className="container">
                        <ul className="card__list">
                            {fetchedData.map(item =>{
                                return (
                                    <li key={item.id} className="list-group-item card">
                                        <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} className="card__avatar" />
                                        <div className="card__info">
                                            <h3>{`${item.first_name} ${item.last_name}`}</h3>
                                            <p>{item.email}</p>
                                        </div>
                                        
                                    </li>
                                )
                            })}
                        </ul>
                    </main> 
                : <main><p>Loading...</p></main>
            }
        </div>
    );
}

