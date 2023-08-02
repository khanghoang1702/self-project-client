import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {signUpRequest} from "../../reducers/actions/auth.action.ts";


const schema = yup.object({
    displayName: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be more than 6 characters').required('Password is required'),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password')], 'Password must match')
}).required();
type FormData = yup.InferType<typeof schema>;

const SignUp = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>({resolver: yupResolver(schema)});


    const onSubmit = (data: any) => {
        data.confirmPassword && delete data.confirmPassword
        dispatch(signUpRequest(data))
        reset()
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='form-outline mb-4'>
                    <input type='text' id='form3Example1q' className='form-control py-2'
                           placeholder='Your name' {...register("displayName")}/>
                    {errors.displayName && <span className='text-danger'>{errors.displayName?.message}</span>}
                </div>

                <div className='form-outline mb-4'>
                    <input type='text' className='form-control py-2' id='exampleTxtField1'
                           placeholder='Your email' {...register("email")}/>
                    {errors.email && <span className='text-danger'>{errors.email?.message}</span>}
                </div>

                <div className='row'>
                    <div className='col-md-6 mb-4'>
                        <div className='form-outline'>
                            <input type='password' id='form3Example1q' className='form-control py-2'
                                   placeholder='Password' {...register("password")}/>
                            {errors.password && <span className='text-danger'>{errors.password?.message}</span>}
                        </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                        <div className='form-outline'>
                            <input type='password' id='form3Example1q' className='form-control py-2'
                                   placeholder='Confirm password' {...register("confirmPassword")}/>
                            {errors.confirmPassword &&
                                <span className='text-danger'>{errors.confirmPassword?.message}</span>}
                        </div>
                    </div>
                </div>

                <div className='text-center form-outline mb-4'>
                    <button type='submit' className='w-100 btn btn-primary btn-lg mb-1'>Register</button>
                </div>

                <div className='text-center'>
                    <p>Back to login? <Link to='../'><span
                        style={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            color: '#0074D9'
                        }}>Sign in</span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;