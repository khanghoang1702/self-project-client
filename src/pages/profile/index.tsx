import {HighlightOutlined, UserOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getUserBlogsRequest} from "../../reducers/actions/user.action.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userDetail} from "../../reducers/user.reducer.ts";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to='' replace>My Information</Link>, 'sub1', <UserOutlined/>,),
    getItem(<Link to='my-blogs' replace>My Blogs</Link>, 'sub2', <HighlightOutlined/>),
    getItem('Others', 'sub4', <SettingOutlined/>, [
        getItem(<Link to='/' replace>Home</Link>, '9',),
    ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Profile = () => {
    const dispatch = useDispatch();
    const user = useAppSelector(userDetail);
    const [openKeys, setOpenKeys] = useState(['sub4']);

    useEffect(() => {
        dispatch(getUserBlogsRequest(user.id))
    }, [])

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <div className='row m-auto'>
            <div className='col-2'>
                <Menu
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    style={{height: '100%'}}
                    items={items}
                />
            </div>
            <div className='col-10 py-5'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Profile;