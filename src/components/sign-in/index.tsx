import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {signInRequest} from "../../reducers/actions/auth.action.ts";

type Inputs = {
    email: string,
    password: string,
};
const SignIn = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(signInRequest(data))
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-outline mb-4'>
                    <input type='email' id='form2Example1' className='form-control py-2'
                           placeholder='example@gmail.com' {...register('email', { required: true })}/>
                    <span>{errors.email?.message}</span>
                </div>

                <div className='form-outline mb-4'>
                    <input type='password' id='form2Example2' placeholder='******' className='form-control py-2' {...register('password', { required: true })}/>
                    <span>{errors.password?.message}</span>
                </div>

                <div className='text-center form-outline mb-4'>
                    <button type='submit' className='w-100 btn btn-primary btn-block btn-lg mb-4'>Sign in</button>
                </div>

                <div className='text-center'>
                    <p>Not a member? <Link to='resgister'><span
                        style={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            color: '#0074D9'
                        }}>Register</span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignIn;