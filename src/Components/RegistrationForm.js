import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "./Regex.js";

export default function RegistrationForm(props) {

    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmpassword, setConfirmpassword] = useState(null);
    

    const { userId } = useParams(); // Get the Path Parameter from the URL
    const navigate = useNavigate();

    let User = {
        id: id,
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmpassword
    };

    let textChanged = (event) => {
        if (event.target.name === "id") {
            setId(event.target.value);
        } else if (event.target.name === "name") {
            setName(event.target.value);
        } else if (event.target.name === "email") {
            setEmail(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        } else if (event.target.name === "confirmpassword") {
            setConfirmpassword(event.target.value);
        }
    };

    let saveUser = (event) => {
        console.log("saveuser")
        event.preventDefault();

        axios
            .post("http://localhost:8080/registerUser", User)
            .then((response) => {
                if (response.data != null) {
                    alert("Record added successfully");
                    window.location.reload(false);
                }
            })
            .catch((error) => alert("danger", "Error"));
    };

    return (
        <div className="my-3">
            <Container>
                <Card>
                    <Form onSubmit={saveUser}>
                        <Card.Header>
                            <strong>{"User Registration"}</strong>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group className="mb-3" >
                                <Form.Label>Id</Form.Label>
                                <Form.Control
                                    name="id"
                                    value={id}
                                    type="text"
                                    placeholder="Enter id"
                                    onChange={textChanged}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    name="name"
                                    value={name}
                                    type="text"
                                    placeholder="Enter name"
                                    onChange={textChanged}
                                    required
                                />
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        value={email}
                                        type="email"
                                        placeholder="Enter Email"
                                        onChange={textChanged}
                                        required
                                    />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    value={password}
                                    type="password"
                                    placeholder="Enter password"
                                    onChange={textChanged}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    name="confirmpassword"
                                    value={confirmpassword}
                                    type="password"
                                    placeholder="Confirm password"
                                    onChange={textChanged}
                                    required
                                />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="primary" type="submit" >
                  {userId != null ? "Update" : "Submit"}
                </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </Container>
        </div>
    )
}
