import React, { useContext } from "react";
import { Link } from "react-router";
import { Button, Form, Input } from "antd";

import { UserContext, UserContextValue } from "../context/UserContext.ts";
import { assertIPerson } from "../types/types.ts";
import { login } from "../http/authAPI.ts";
import type { LoginParams } from "../http/authAPI.ts";

var formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

var tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
};

var LoginForm: React.FC = () => {
    var userContext = useContext<UserContextValue | null>(UserContext);
    var [form] = Form.useForm();

    var loginUser = (obj: LoginParams) => {
        login(obj).then(serverReseponse => { 
            if(serverReseponse.serverMessage === "success") {
                var user = serverReseponse.payload;
                localStorage.setItem("user", JSON.stringify(user));
                assertIPerson(user);
                userContext && userContext.setUser(user);
            }
        });
    };

    return (
        <div style={{width: '800px'}}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={loginUser}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="Почта"
                    rules={[
                        {
                            type: 'email',
                            message: 'Неправильный формат'
                        },
                        {
                            required: true,
                            message: 'Введите Вашу почту!'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Введите Ваш пароль!'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button htmlType="submit" style={{marginRight: '5px'}}>
                        Войти
                    </Button>
                    <Link to={'/registration'}>
                        Нет аккаунта? Зарегистрируйся!
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
