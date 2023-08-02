import {Avatar, Descriptions, Tag} from "antd";
import InlineEdit from "../../components/inline-edit";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userDetail} from "../../reducers/user.reducer.ts";
import {useDispatch} from "react-redux";
import {updateUserRequest} from "../../reducers/actions/user.action.ts";

const MyInfo = () => {
    const user = useAppSelector(userDetail)
    const dispatch = useDispatch();

    const handleUpdate = (data: string) => {
        dispatch(updateUserRequest({id: user.id, displayName: data}))
    }

    return (
        <div className='row'>
            <div className='col-2 me-4'>
                <Avatar src={user.avatar} shape='square' size={200}/>
                {/*<input*/}
                {/*    type="file"*/}
                {/*    name="myImage"*/}
                {/*    onChange={(event: any) => {*/}
                {/*        return handleUpload(event.target.files[0])*/}
                {/*    }}*/}
                {/*/>*/}
            </div>
            <div className='col-7'>
                <Descriptions>
                    <Descriptions.Item span={3} label="User Name">
                        <InlineEdit open={false} value={user.displayName} handleEdit={handleUpdate}/>
                    </Descriptions.Item>
                    <Descriptions.Item span={3} label="Email">
                        {user.email}
                    </Descriptions.Item>
                    <Descriptions.Item span={3} label="Password">******</Descriptions.Item>
                    <Descriptions.Item span={3} label="Role">
                        {user.role.type === 'user' && <Tag color='green'>User</Tag>}
                        {user.role.type === 'admin' && <Tag color='volcano'>Administrator</Tag>}
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    );
};

export default MyInfo;