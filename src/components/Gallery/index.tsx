import { FC } from "react";
import gallery1 from '../../assets/imgs/gallery1.svg';
import gallery2 from '../../assets/imgs/gallery2.svg';
import gallery3 from '../../assets/imgs/gallery3.svg';
import gallery4 from '../../assets/imgs/gallery4.svg';
import gallery5 from '../../assets/imgs/gallery5.svg';
import gallery6 from '../../assets/imgs/gallery6.svg';
import gallery7 from '../../assets/imgs/gallery7.svg';
import arrow from '../../assets/icons/arrow_forward.svg';


const Index: FC = () => {

    const images1 = [
        {src: gallery1},
        {src: gallery2},
        {src: gallery3},
        {src: gallery4},
    ];

    const images2 = [
        {src: gallery5},
        {src: gallery6},
        {src: gallery4},
        {src: gallery7},
    ];

    return (
        <div className="flex flex-col justify-center items-center h-[90vh] gap-10">
            <div className="relative w-[100%] overflow-hidden">
                {/* scrollable container */}
                <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
                    {images1.map((image, index) => (
                        <div 
                            key={index}
                            className=" w-[444px] h-[444px] bg-[#C7D0D9] rounded pl-10 hover:shadow-lg"
                        > {/* min-w-[300px] max-w-[300px] rounded-md*/}
                            <div className="flex justify-center items-center w-[348px] h-[300px] hover:shadow-lg group">
                                <img src={image.src} alt={`image-${index+1}`} className="w-full h-full object-contain" />
                                <div className="absolute bg-white flex invisible group-hover:visible">
                                    {/* <a href="" className="text-black"> Visit the Website</a> */}
                                    <a href="">Visit the Website</a>
                                    <img src={arrow} alt="" />
                                    {/* <button className="bg-white"></button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-[100%] overflow-hidden">
                {/* scrollable container */}
                <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
                    {images2.map((image, index) => (
                        <div 
                            key={index}
                            className="w-[444px] h-[444px] bg-[#C7D0D9] rounded pl-10"
                        >
                            <div className="flex justify-center items-center w-[348px] h-[300px]">
                                <img src={image.src} alt={`image-${index+1}`} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index;