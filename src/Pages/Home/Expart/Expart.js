import React from 'react';

const Expart = (props) => {
    const {img,name,expertize}=props.expert;
    return (
        <div className='col-lg-3 col-sm-6 col-12'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>{expertize}</h5>
        </div>
    );
};

export default Expart;