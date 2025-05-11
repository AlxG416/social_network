import React, { useState } from "react";
import { Button, Input } from "antd";

import "./Post.css";
import { IPost } from "../../types/types";

export interface PostProps {
    listNumber: number;
    post: IPost;
    isOwn: boolean;
    deletePost: (id: number) => void;
    changePost: (id: number, title: string, content: string) => void;
};

var Post: React.FC<PostProps> = ({ listNumber, post, isOwn, deletePost, changePost }) => {
    var [isChanging, setIsChanging] = useState(false);
    var [title, setTitle] = useState(post.title);
    var [content, setContent] = useState(post.content);

    function handleClick(id: number, title: string, content: string) {
        changePost(id, title, content);
        setIsChanging(!isChanging);
    }

    return (
        <div className="post">
            <div>
                {isChanging ? 
                    <>
                        <div style={{marginBottom: '5px'}}>
                            <Input 
                                value={title} 
                                onChange={e => setTitle(e.target.value)} 
                            />
                        </div>
                        <div>
                            <Input 
                                value={content} 
                                onChange={e => setContent(e.target.value)}
                                style={{marginRight: '5px', width: '300px'}}
                            />
                            <Button onClick={() => handleClick(post.id, title, content)}>
                                Подтвердить
                            </Button>
                        </div>
                    </>
                    :
                    <>
                        <div>{listNumber}. {post.title}</div>
                        <div>{post.content}</div>
                    </>
                }
            </div>
            {isOwn &&
                <div>
                    <Button style={{marginRight: '5px'}} onClick={() => deletePost(post.id)}>Удалить</Button>
                    <Button onClick={() => setIsChanging(!isChanging)}>
                        {isChanging ? 'Закрыть' : 'Изменить'}
                    </Button>
                </div>
            }
        </div>
    );
};

export default Post;
