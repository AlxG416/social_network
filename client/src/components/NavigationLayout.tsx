import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { UserOutlined, MessageOutlined, TeamOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import { UserContext, UserContextValue } from "../context/UserContext";
import { PEOPLE_ROUTE, MESSAGES_ROUTE, PROFILE_ROUTE } from "../routes";

type MenuItem = Required<MenuProps>['items'][number];

var items: MenuItem[] = [
  {
    key: 'grp',
    type: 'group',
    children: [
      { key: '1', icon: <UserOutlined />, label: 'Профиль' },
      { key: '2', icon: <MessageOutlined />, label: 'Сообщения' },
      { key: '3', icon: <TeamOutlined />, label: 'Люди' }
    ],
  },
];

var NavigationLayout: React.FC = () => {
    var userContext = useContext<UserContextValue | null>(UserContext);
    var navigate = useNavigate();

    var onClick: MenuProps['onClick'] = (e) => {
        switch(e.key) {
            case "1":
                navigate(PROFILE_ROUTE + `/${userContext?.user?.id}`);
                break;
            case "2":
                navigate(MESSAGES_ROUTE);
                break;
            case "3":
                navigate(PEOPLE_ROUTE);
                break;
            default:
                break;
        }
    };

    return (
        <div style={{display: 'flex', paddingInline: 200}}>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
            />
            <div style={{width: 700, margin: '20px'}}>
                <Outlet />
            </div>
        </div>
    );
};

export default NavigationLayout;
