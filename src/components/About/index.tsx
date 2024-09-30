import { FC, useState, useEffect } from "react";
import './style.css'
import burger from '../../assets/icons/burger.svg'

const Index: FC = () => {
    const [showBurger, setShowBurger] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.about');
            if(aboutSection) {
                const rect = aboutSection.getBoundingClientRect();

                // check if the section is in the viewpoort 
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setShowBurger(true);
                } else {
                    setShowBurger(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }
    }, []);


    return (
        <>
            <div className="about">
                {showBurger && (
                    <div className="fixed top-4 right-4"> 
                        <img src={burger} alt="" />
                    </div>
                )}
                <div className="left">
                    About
                </div>
                <div className="right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </div>
            </div>
        </>
    );
}

export default Index;