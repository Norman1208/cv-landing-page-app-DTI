import { FC } from "react";

const Index: FC = () => {
    return (
        <div className="bg-black flex h-[190px] w-[1440px] gap-[700px] pt-[85px]">
            <div> {/* left */}
                <span className="text-white text-lg text-center">Build with 💖 by Brightscout & Ayush </span>
            </div>
            <div className="flex gap-4 text-gray-400">
                <a href="https://www.linkedin.com/in/ayush-barnwal/">Linkedin</a>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://www.instagram.com">Instagram</a>
                <a href="https://www.webflow.com">Webflow</a>
            </div>
        </div>
    );
}

export default Index;