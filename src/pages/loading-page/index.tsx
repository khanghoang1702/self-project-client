import {Spin} from "antd";

const LoadingPage = () => {
    return (
        <div className=''>
            <div className='m-auto text-center' style={{width: '100%', height:'100%', padding:'300px'}}>
                <Spin size='large' />
            </div>
        </div>
    );
};

export default LoadingPage;