import {PropsWithChildren, useState} from "react";
import {Input} from 'antd';
import {CheckOutlined, CloseOutlined, EditOutlined} from '@ant-design/icons';

type InlineEditProps = {
    open: boolean;
    value: string;
    handleEdit: (value: string) => void
}

type EditFieldProps = {
    value: string;
    onClose: () => void
    handleEdit: (value: string) => void
}

type ActionsProps = {
    value: string,
    onClose: () => void
    handleEdit: (value: string) => void
}

const Actions = ({value, onClose, handleEdit} :ActionsProps) => {

    const onclick = () => {
        handleEdit(value)
        onClose();
    }

    return (
        <div className='d-flex align-items-center'>
            <span className='link me-2' onClick={onclick}>
                <CheckOutlined style={{color: 'green'}}/>
            </span>
            <span className='link' style={{color: 'red'}} onClick={onClose}>
                <CloseOutlined/>
            </span>
        </div>
    )
}


const Field = ({value, onClose, handleEdit}: EditFieldProps) => {

    const [val, setVal] = useState<string>(value)
    const handleOnChange = (e: any) => {
        setVal(e.target.value)
    }

    return (
        <div>
            <Input value={val} onChange={((e) => handleOnChange(e))} suffix={<Actions value={val} onClose={onClose} handleEdit={handleEdit}/>}/>
        </div>
    )
}
const InlineEdit = ({open, value, handleEdit}: PropsWithChildren<InlineEditProps>) => {

    const [openEdit, setOpenEdit] = useState<boolean>(open)

    return (
        <div>
            {openEdit ? <Field value={value} onClose={() => setOpenEdit(false)} handleEdit={handleEdit}/> :
                <div className='d-flex align-items-center'>
                    <span className='me-3'>
                        {value}
                    </span>
                    <span onClick={()=>setOpenEdit(true)} className='link'>
                        <EditOutlined  />
                    </span>
                </div>}
        </div>
    );
};

export default InlineEdit;