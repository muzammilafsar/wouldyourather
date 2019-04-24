import React from 'react';
import '../css/BarLoader.css';

const BarLoader = ({status}) => {
    return (
        <React.Fragment>

            {(status) ? <div className="progress">
                <div className="indeterminate"></div>
            </div>: ''}
        </React.Fragment>
    )
}
export default BarLoader;