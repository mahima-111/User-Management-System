import { Link } from 'react-router-dom';
import errorPic from '../assets/error_pic.jpg';
const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center pt-8">
        <div className='w-[70vw] flex flex-col items-center'>

            <div className='w-[30%]'><img src={errorPic} className='object-cover'/></div>
            <h2 className='text-4xl font-bold mb-4'>{`SOMETHING WENT WRONG :(`}</h2>
            <Link to='/'><button className=''>Go to HomePage</button></Link>
    
        </div>
        </div>
    )
}

export default ErrorPage