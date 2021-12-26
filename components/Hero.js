import Button from "./Button";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[550px] pb-20">
          <div className="container mx-auto px-10 2xl:px-0">
            <Navbar/>
            <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
              <h1 className="text-white text-3xl font-semibold font-mono w-8/12 mx-auto xl:w-8/12 lg:w-10/12 w-11/12 leading-relaxed">Iam a junior full-stack web developer</h1>
              <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6 2xl:w-3/12 xl:w-5/12 lg:w-7/12 md:w-10/12 w-11/12  leading-relaxed">a self taught web developer, learning javascript programing language and their framework</p>
              <Button href='#profile' pill variant='yellow' className='mt-14'>Explore</Button>
            </div>
          </div>
      </div>
    )
}

export default Hero
