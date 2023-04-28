import React from 'react';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'


const Qzone = () => {
    return (
        <div className='bg-secondary text-center '>
            <h4 className='my-3'>Q zone</h4>
            <div>
                <img src={qzone1} alt="" />
            </div>
            <div>
                <img src={qzone2} alt="" />
            </div>
            <div>
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;