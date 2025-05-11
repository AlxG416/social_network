import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";

import "./ProfileBlock.css";
import { IPerson } from "../../types/types";

export interface ProfileBlockProps {
    user: IPerson;
    isOwn: boolean;
};

var ProfileBlock: React.FC<ProfileBlockProps> = ({user, isOwn}) => {
    return (
        <div className="profile-block" style={{marginBottom: '20px'}}>
            {/* <span className="profile-photo" style={{marginRight: '10px'}}></span> */}
            <Avatar shape="square" size={80} icon={<UserOutlined />} style={{marginRight: '10px'}} />
            <div>
                <h1>{user.name} {user.surname}</h1>
                <div style={{marginTop: '5px', display: 'flex'}}>
                    <h2 style={{marginRight: '10px'}}>{user.email}</h2>
                    {!isOwn &&
                        <>
                            <Button disabled style={{marginRight: '5px'}}>
                                Написать сообщение
                            </Button>
                            <Button disabled>Добавить в друзья</Button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfileBlock;
