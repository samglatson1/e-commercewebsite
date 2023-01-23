import axios from 'axios';
import '../App.css'
import {Link, useParams} from 'react-router-dom';
import React, { useState,useEffect } from 'react';

export default function List() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        console.warn(id);
        var response = await fetch("http://localhost:3004/getpstudent/" + id);
        response = await response.json();
        setFirstname(response[0].firstname);
        setLastname(response[0].lastname);
        setEmail(response[0].email);
    }

    const adddata = () => {

        let datastring = { id: id, firstname: firstname, lastname: lastname, email: email };
        axios.post("http://localhost:3004/update", datastring)
            .then(function (response) {
                if (response.data.status === 'Updated') {
                    alert('inserted');
                    window.location.href = "/";
                }
            });
    };
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <p className="p_style">CRUD Application - Update</p>
                </div>
            </div>
            <div className="data_center_0">
                <div className="form-group">
                    <label>Firstname</label>
                    <input type="text" className="form-control" value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Lastname</label>
                    <input type="text" className="form-control" value={lastname}
                        onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email Id</label>
                    <input type="text" className="form-control" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary mt-4" onClick={adddata}>Update</button>&nbsp;
                    <Link to={"/"}><button className="btn btn-danger mt-4">Go Back</button></Link>
                </div>
            </div>
    </>
)

}