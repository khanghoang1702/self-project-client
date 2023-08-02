import banner1 from '../../assets/banner-1.png'
import banner2 from '../../assets/banner-2.png'
const Banner = () => {
    return (
        <div>
            <div style={{backgroundImage: `url(${banner1}), url(${banner2})`, backgroundRepeat: 'no-repeat, repeat', height: '300px'}}>

            </div>
            <div className='text-white text-center h3 font-weight-bold py-3'
                 style={{background: 'linear-gradient(to right, #8A3C52, #6A82FB)', fontSize: '20px'}}><a
                href="#" target="_blank" rel="noopener"
                className="text-white">
                &gt;&gt; Join the Facebook group "Golb Community" to learn and connect together &lt;&lt;
            </a></div>
        </div>
    );
};

export default Banner;