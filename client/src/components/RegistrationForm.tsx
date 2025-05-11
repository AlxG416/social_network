import React from "react";
import { Link, useNavigate } from "react-router";
import { Button, Form, Input } from "antd";

import { registrate } from "../http/authAPI.ts";
import type { RegistrateParams } from "../http/authAPI.ts"
import { LOGIN_ROUTE } from "../routes.tsx";

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

var RegistrationForm: React.FC = () => {
    var navigate = useNavigate();
    var [form] = Form.useForm();

    var registrateUser = (obj: RegistrateParams) => {
        registrate(obj).then(serverResponse => {
            if(serverResponse.serverMessage === "success") {
                navigate(LOGIN_ROUTE);
            }
        });
    };

    return (
        <div style={{width: '800px'}}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={registrateUser}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Имя"
                    rules={[{ required: true, message: 'Пожалуйста введите имя!', whitespace: true}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="surname"
                    label="Фамилия"
                    rules={[{ required: true, message: 'Пожалуйста введите фамилию!', whitespace: true}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Почта"
                    rules={[
                        {
                            type: 'email',
                            message: 'Неправильный формат введёной почты!'
                        },
                        {
                            required: true,
                            message: 'Введите свою почту!'
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
                            message: 'Придумайте пароль!'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Повторите пароль"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { 
                            required: true, 
                            message: 'Повторите пароль!'
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if(!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Этот пароль не соотвествует введеному Вами ранее!'));
                            }
                        })
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button htmlType="submit" style={{marginRight: '5px'}}>
                        Зарегистрироваться
                    </Button>
                    <Link to={'/login'}>
                        Уже есть аккаунт? Войдите!
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegistrationForm;
