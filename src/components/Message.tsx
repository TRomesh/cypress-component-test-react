import React from "react";
import styled from "styled-components";

interface MessageProps {
    message: string;
}

const MessageContainer = styled.div`
margin-top: 20px;
padding: 15px;
border: 1px solid #4caf50;
border-radius: 5px;
background-color: #e7f7e4;
color: #4caf50;
font-size: 16px;
`;

const Message: React.FC<MessageProps> = ({ message }) => {
    return <MessageContainer>{message}</MessageContainer>;
};

export default Message;
