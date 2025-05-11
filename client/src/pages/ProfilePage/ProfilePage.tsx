import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Button } from "antd";

import { storeFillPosts, storeCreatePost, storeDeletePost, storeChangePost } from "../../features/posts/postsSlice";
import { serverCreatePost, serverDeletePost, serverGetAllPosts, serverChangePost } from "../../http/postsAPI";
import { storeFillUser } from "../../features/user/userSlice";
import { UserContext } from "../../context/UserContext";
import { serverGetUser } from "../../http/usersAPI";
import { RootState } from "../../store/store";

import CreatePostModal from "../../components/CreatePostModal/CreatePostModal";
import ProfileBlock from "../../components/ProfileBlock/ProfileBlock";
import Post from "../../components/Post/Post";

import "./ProfilePage.css";

var ProfilePage: React.FC = () => {
    var [modalIsShown, setModalIsShown] = useState(false);
    var { posts } = useSelector((state: RootState) => state.posts);
    var { user } = useSelector((state: RootState) => state.user);
    var dispatch = useDispatch();

    var userContext = useContext(UserContext);
    var { userId } = useParams();

    var isOwn = userId !== undefined && Number(userId) === userContext?.user?.id;

    function createPost(title: string, content: string) {
        userId && serverCreatePost({title, content, userId}).then(serverResponse => {
            serverResponse.serverMessage === "success" && 
            serverResponse.payload && 
            dispatch(storeCreatePost(serverResponse.payload));
        });
    }

    function deletePost(id: number) {
        userId && serverDeletePost({id, userId}).then(serverResponse => {
            serverResponse.serverMessage === "success" && 
            serverResponse.payload && 
            dispatch(storeDeletePost(serverResponse.payload));
        });
    }

    function changePost(id: number, title: string, content: string) {
        userId && serverChangePost({id, userId, title, content}).then(serverResponse => {
            serverResponse.serverMessage === "success" && 
            serverResponse.payload && 
            dispatch(storeChangePost(serverResponse.payload));
        });
    }

    useEffect(() => {
        userId && serverGetAllPosts({ userId }).then(serverResponse => {
            if(serverResponse.serverMessage === 'success') {
                var posts = serverResponse.payload;
                posts && dispatch(storeFillPosts(posts));
            }
        });
        userId && serverGetUser({ id: userId }).then(serverResponse => {
            if(serverResponse.serverMessage === 'success') {
                var user = serverResponse.payload;
                user && dispatch(storeFillUser(user));
            }
        });
    }, [userId]);

    return (
        <>
            {user !== null && 
                <>
                    <ProfileBlock 
                        isOwn={isOwn} 
                        user={user}
                    />
                    <div className="posts-block">
                        <div style={{marginBottom: '10px'}} className="posts-controllers">
                            <h3 style={{marginRight: '10px'}}>
                                Список постов
                            </h3>
                            {isOwn && 
                                <Button
                                    size='small'
                                    onClick={() => setModalIsShown(!modalIsShown)}
                                >
                                    Создать пост
                                </Button>
                            }
                        </div>
                        <h4>
                            {isOwn ? 
                                posts.length === 0 && 'У вас пока нет постов' 
                                : 
                                posts.length === 0 && 'У этого пользователя нет постов'
                            }
                        </h4>
                        <div className="list">
                            {posts.map((post, index) => 
                                <Post 
                                    key={post.id} 
                                    listNumber={index + 1} 
                                    post={post} 
                                    deletePost={deletePost} 
                                    changePost={changePost} 
                                    isOwn={isOwn} 
                                />
                            )}
                        </div>
                    </div>
                    {modalIsShown && 
                        <CreatePostModal 
                            isShown={modalIsShown} 
                            setIsShown={setModalIsShown} 
                            createPost={createPost}  
                        />
                    }
               </>
            }
        </>
    );
};

export default ProfilePage;
