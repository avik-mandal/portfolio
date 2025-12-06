import React from 'react';
import Typewriter from 'typewriter-effect';

const Typed: React.FC = () => {
    return (
        <div className="TypeEffect">
            <Typewriter
                options={{
                    strings: ['Frontend Developer', 'Designer', 'Freelancer'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,
                }}
            />
        </div>
    );
};

export default Typed;
