import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center py-2 gap-2'>
           <div>
             <img className='w-[400px]' src={logo} alt="Logo" />
           </div>

            <h3 className='text-lg text-gray-600'>Journalism Without Fear or Favour</h3>

            <p className='font-medium text-xl'>{moment().format("dddd")}, <span className='text-gray-600'>{moment().format(" MMMM DD, YYYY")}</span></p>
        </div>
    );
};

export default Header;