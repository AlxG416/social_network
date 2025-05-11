import React from "react";
import { useNavigate } from "react-router";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import "./Person.css";
import { IPerson } from "../../types/types";

var Person: React.FC<IPerson> = ({ id, name, surname, email}) => { // id - userId
    var navigate = useNavigate();

    return (
        <div className="person" onClick={() => navigate(`/profile/${id}`)}>
            {/* <span className="person-photo" style={{marginRight: '10px'}}></span> */}
            <Avatar shape="square" size={40} icon={<UserOutlined />} style={{marginRight: '10px'}} />
            <div className="person__info">
                <div className="person__info-fullname">{name} {surname}</div>
                <div className="person__additional-info">Почта: {email}</div>
            </div>
        </div>
    );
};

export default Person;
