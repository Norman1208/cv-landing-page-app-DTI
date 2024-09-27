import { FC } from "react";

interface NavLinkProps {
    href: string;
    text: string;
    
}

const NavLink: FC<NavLinkProps> = ({href, text}) => {
    return (
        <a className = 'no-underline text-black' href={href}>{text}</a>
    );
}

export default NavLink;