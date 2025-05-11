import React from "react";
import { useNavigate } from "react-router";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import "./Message.css";

export interface MessageProps {
    ilocName: string; // ilocName - shorthand for interlocutorName
    ilocSurname: string; // ilocSurname - shorthand for interlocutorSurname
    message: string;
    id: number; // id - chatId
};

var Message: React.FC<MessageProps> = ({ ilocName, ilocSurname, message, id }) => {
    var navigate = useNavigate();

    return (
        <div className="message" onClick={() => navigate(`/messages/${id}`)}>
            {/* <span className="addressee-photo" style={{marginRight: '10px'}}></span> */}
            <Avatar shape="square" size={40} icon={<UserOutlined />} style={{marginRight: '10px'}} />
            <div className="message__content">
                <div>{ilocName} {ilocSurname}</div>
                <div className="message__last-message">{message}</div>
            </div>
        </div>
    );
};

export default Message;
