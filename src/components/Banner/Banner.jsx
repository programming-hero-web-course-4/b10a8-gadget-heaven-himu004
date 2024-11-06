import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <>
      <div className="bg-[#9538E2] h-[70vh] rounded-b-xl ">
        <div className="hero-content text-center mx-auto">
          <div className="max-w-5xl text-white">
            <h1 className="md:text-5xl text-2xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-center max-w-xl mx-auto text-sm md:text-base">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Link to="/dashboard">
            <button className="btn rounded-full font-bold text-[#9538E2] px-8 text-xl">
              Shop Now
            </button>
            </Link>
          </div>
        </div>
      </div>
     
        <div className='flex justify-center md:p-0 p-3'>
        <div className='md:-mt-52 -mt-28 md:w-2/3 border-4 border-gray-100 p-4 bg-[#ffffff34] rounded-xl'>
            <img className='rounded-xl' src={banner} alt="" />
        </div>
        </div>
    
    </>
  );
};

export default Banner;
