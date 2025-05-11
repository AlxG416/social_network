import React, { useState } from "react";
import { Input, Button } from "antd";

import "./CreatePostModal.css";

export interface CreatePostModalProps {
    isShown: boolean;
    setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
    createPost: (title: string, content: string) => void;
};

var CreatePostModal: React.FC<CreatePostModalProps> = ({isShown, setIsShown, createPost}) => {
    var [title, setTitle] = useState<string>('');
    var [content, setContent] = useState<string>('');

    function handleClick() {
        createPost(title, content);
        setIsShown(!isShown);
    }

    function closeModal() {
        setIsShown(!isShown);
    }

    return (
        <>
            {isShown && 
                <div 
                    className="modal-overlay"
                    onClick={closeModal}
                >
                    <div 
                        className="modal"
                        onClick={e => e.stopPropagation()}
                    >
                        <Input 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Заголовок"
                            style={{marginBottom: '5px'}}
                        />
                        <Input 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            placeholder="Описание" 
                            style={{marginBottom: '5px'}}
                        />
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button onClick={handleClick} style={{marginRight: '5px'}}>Опубликовать</Button>
                            <Button onClick={closeModal}>Закрыть</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CreatePostModal;
