import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import "./ChatPage.css";

var ChatPage: React.FC = () => {
    return (
        <>
            <div className="chat-top">
                <div>Влад Корнюшончик</div>
                <div>В сети</div>
                <div style={{textAlign: 'end'}}>
                    <MenuOutlined />
                </div>
            </div>
            <div className="chat-middle">
                <div className="list">
                    <div className="chat__message chat__message_sended">
                        Я вчера ущипнул Машку за ляшку!
                    </div>
                    <div className="chat__message chat__message_received">
                        Ничего себе какой смелый! Хех :-)
                    </div>
                    <div className="chat__message chat__message_sended">
                        Мне понравилось
                    </div>
                    <div className="chat__message chat__message_received">
                        Ещё бы. Что делаешь?
                    </div>
                    <div className="chat__message chat__message_sended">
                        Ничего!!! Я вообще никогда ничего не делаю, я самый настоящий бездельник!!! ИИИУуУ
                    </div>
                    <div className="chat__message chat__message_received">
                        Пойдём погуляем чтоль?
                    </div>
                    <div className="chat__message chat__message_sended">
                        Погнали!
                    </div>
                    <div className="chat__message chat__message_received">
                        Давай, выходи. Уже 20 минут жду тебя!!!!!!
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
