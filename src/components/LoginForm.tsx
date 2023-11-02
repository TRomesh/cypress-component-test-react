import React, { useState } from "react";
import styled from "styled-components";
import Message from "./Message";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your login logic here
        console.log("Username:", username);
        console.log("Password:", password);
        setSubmitted(true);
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    data-test="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <Input
                    type="password"
                    data-test="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button data-test='submit' type="submit">Login</Button>
            </form>
            {submitted && (
                <Message data-test='message' message={`Welcome ${username}!`} />
            )}
        </FormContainer>
    );
};

export default LoginForm;
