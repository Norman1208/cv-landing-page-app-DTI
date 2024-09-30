import { FC } from "react";
import DiagonalArrow from '../../../assets/icons/diagonal_arrow.svg'

// use object destructuring to get the properties of the project object
const Project: FC<Project> = ({name, roles, link}) => {
    return (
        <div className="project-wrapper">
            <div className="project-details">
                <div className="project-name">{name}</div>
                <div className="project-roles">
                    {roles.map((role, index) => (
                        <>
                            <span key={index}>{role}</span>
                            {index < roles.length - 1 && <span>-</span>}                        
                        </>
                    ))}
                </div>
            </div>
            <div className="project-link">
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={DiagonalArrow} alt="arrow" className="hover:bg-black" />
                </a>
            </div>
        </div>
    );
}
export default Project;