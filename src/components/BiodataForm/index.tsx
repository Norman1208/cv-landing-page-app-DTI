import { FC } from "react";
import FooterImg from "../../assets/imgs/footer_img.svg"


const Index: FC = () => {

    return (
        <div className="flex pt-[200px] pb-[100px] gap-[300px]"> {/* wrapper */}
            <div className="flex flex-col pl-[85px] gap-10"> {/* left */}
                <img className="w-[300px]" src={FooterImg} alt="profile picture" />
                <div className="flex flex-col">
                    <span className="text-lg">Contact Details</span>
                    <span className="text-[27px]">ayush.barnwal@brightscout.com</span>
                    <span className="text-[27px]">+91 8651447521</span>
                </div>
                <div>
                    <span className="text-lg">Social</span>
                    <div className="flex flex-col gap-4 text-black text-[27px]">{/* social links */}
                        <a href="https://www.linkedin.com/in/ayush-barnwal/">Linkedin</a>
                        <a href="https://www.instagram.com">Instagram</a>
                        <a href="https://twitter.com">Twitter</a>
                        <a href="https://www.webflow.com">Webflow</a>
                        <a href="https://figma.com">Figma</a>
                    </div>
                </div>

            </div>
            <div className="flex flex-col "> {/* right */}
                <h2 className="text-[60px] w-[624px]">Let’s build something cool together</h2>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col border-b border-black w-[624px]">
                        <span className="text-lg text-black">Name</span>
                        <span className="text-[#3C3D3E] text-[27px]">James Robert</span>
                    </div>
                    <div className="flex flex-col border-b border-black">
                        <span className="text-lg text-black">Email</span>
                        <span className="text-[#3C3D3E] text-[27px]">ayush.barnwal@brightscout.com</span>
                    </div>
                    <div className="flex flex-col border-b border-black">
                        <span className="text-lg text-black">Subject</span>
                        <span className="text-[#3C3D3E] text-[27px]">For web design work Enquire</span>
                    </div>
                    <div className="flex flex-col border-b border-black">
                        <span className="text-lg text-black">Message</span>
                        <span className="h-[158px] text-[#3C3D3E] text-[27px]">Type your Message</span>
                    </div>

                    <div>
                        <button className="bg-black text-white w-[200px] h-[70px] rounded-full">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Index;