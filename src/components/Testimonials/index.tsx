import { FC } from "react";
import testimonial1 from "../../assets/imgs/testimonial1.svg"
import testimonial2 from "../../assets/imgs/testimonial2.svg"

const Index : FC = () => {
    return (
        <div className="flex w-[calc(100%-160px)] p-[80px]">
            <div className="w-[839px] gap-0 font-montreal text-[40px] font-medium"> {/* left */}
                Testimonials
            </div>
            <div className="flex flex-col"> {/* right */}
                <div className=""> {/* testimoni-wrapper */}
                    <div className="text-[27px]"> {/* testimoni */}
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” 
                    </div>
                    <div className="flex gap-4"> {/* person wrapper */}
                        <img src={testimonial1} className="w-[64px]" alt="testimonial1" />
                        <div className="flex flex-col">
                            <h3>Ayush Raj</h3>
                            <span>VP of Marketing @ Webflow </span>
                        </div>
                        
                    </div>
                </div>

                <div className=""> {/* testimoni-wrapper */}
                    <div className="text-[27px]"> {/* testimoni */}
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” 
                    </div>
                    <div className="flex gap-4"> {/* person wrapper */}
                        <img src={testimonial2} className="w-[64px]" alt="testimonial2" />
                        <div className="flex flex-col">
                            <h3>Alex Cattoni</h3>
                            <span>Founder @ CopyPossy</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;