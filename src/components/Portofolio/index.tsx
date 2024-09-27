import './style.css';
import { FC } from 'react';
import { DUMMY_PROJECTS } from '../../constants/projectList.ts';
import Project from './components/Project';

const Portofolio: FC = () => {
    return (
        <div className="flex p-20 w-[calc(100%-160px)]">
            <div className='left'>
                Recent Work
            </div>
            <div className='right'>
                {/* loop each of the project item so it become its own component */}
                {DUMMY_PROJECTS.map((project, index) => (
                    // object spreading
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Portofolio;