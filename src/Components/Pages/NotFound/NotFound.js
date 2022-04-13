import React from 'react';

const NotFound = () => {
    const notFoundImg = 'https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg';
    return (
        <div>
            <h2> Page Not Found</h2>
            <img src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;