import adsImage from '../assets/bg.png'

const AdsComponent = () => {
    return (
        <div className='w-full bg-center bg-cover text-white h-120 flex flex-col justify-center text-center items-center space-y-5' style={{backgroundImage: `url(${adsImage})`}}>
            <h1 className='font-bold text-3xl'>Create an Amazing Newspaper</h1>
            <p className='text-base'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='text-white btn bg-[#D72050] border-none shadow-none'>Learn More</button>
        </div>
    );
};

export default AdsComponent;