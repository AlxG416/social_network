import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import "./ChatPage.css";

var ChatPage: React.FC = () => {
    return (
        <>
            <div className="chat-top">
                <div>Евгений Белов</div>
                <div>В сети</div>
                <div style={{textAlign: 'end'}}>
                    <MenuOutlined />
                </div>
            </div>
            <div className="chat-middle">
                <div className="list">
                    <div className="chat__message chat__message_sended">
                        Привет!
                    </div>
                    <div className="chat__message chat__message_received">
                        Привет Игорь!
                    </div>
                    <div className="chat__message chat__message_sended">
                        Как твои дела?
                    </div>
                    <div className="chat__message chat__message_received">
                        Вот приехали из деревни. А ты как?
                    </div>
                </div>
            </div>
            <div className="chat-bottom">
                <Input style={{marginRight: '5px'}} />
                <Button>Send message</Button>
            </div>
        </>
    );
};

export default ChatPage;
