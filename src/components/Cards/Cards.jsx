import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Cards.css'

function Cards() {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
                setIsError(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getUsers();
    }, []);

    if (isError) return <div className="error-message">Something went wrong while fetching users.</div>;
    
    if (isLoading) return <div className="spinner"></div>;

    return (
        <div className="card-container">
            {users.map((user) => (
                <div className="card" key={`user-${user.id}`}>
                    <h3 className="card-title">{user.username}</h3>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    <p><strong>City:</strong> {user.address.city}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;