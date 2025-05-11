import React from "react";

import Message from "../../components/Message/Message";

import "./MessagesPage.css";

var data = [
    {ilocName: 'Анатолий', ilocSurname: 'Рубликов', message: 'Верни мне мой пяточёк!', id: 1},
    {ilocName: 'Красный', ilocSurname: 'Баклажанчик', message: 'Приготовь меня', id: 2},
    {ilocName: 'Анастасия', ilocSurname: 'Шишкина', message: 'Как дела? Приходи ко мне, тут весело)))', id: 3}
];

var MessagesPage: React.FC = () => {
    return (
        <div className="list">
            {data.map((info, index) => 
                <Message key={index} {...info} />
            )}
        </div>
    );
};

export default MessagesPage;
