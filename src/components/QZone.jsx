import swimming from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playGround from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-gray-100 p-4'>
      <h3 className="font-semibold text-xl mb-3 text-[#403F3F]">Q-Zone</h3>
            
            <div className='flex flex-col items-center gap-y-3'>
                <div><img src={swimming} alt="swimming" /></div>
                <div><img src={classImg} alt="class" /></div>
                <div><img src={playGround} alt="play ground" /></div>
            </div>
        </div>
    );
};

export default QZone;