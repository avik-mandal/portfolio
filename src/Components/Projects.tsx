import React from 'react';
import ProjectBox from './ProjectBox';
import WigglesImage from '../images/WigglesImage.png';

const Projects: React.FC = () => {
    return (
        <div>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
                <ProjectBox projectPhoto={WigglesImage} projectName="PRACTO" />
            </div>
        </div>
    );
};

export default Projects;