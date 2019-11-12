import React from 'react';

const SimpleName: React.FunctionComponent = () => {
    const name: string = 'Robin';
    return (
        <span>Hello {name}!</span>
    );
};

export default SimpleName;