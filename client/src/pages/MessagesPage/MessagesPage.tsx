import React from "react";

import Message from "../../components/Message/Message";

import "./MessagesPage.css";

var data = [
    {ilocName: 'Анатолий', ilocSurname: 'Лебедев', message: 'Привет, как дела?', id: 1},
    {ilocName: 'Андрей', ilocSurname: 'Смирнов', message: 'Ты уже сходил в магазин?', id: 2},
    {ilocName: 'Евгений', ilocSurname: 'Белов', message: 'Я сегодня занят, встретиться не получится.', id: 3}
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
