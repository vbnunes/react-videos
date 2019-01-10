import React from 'react'
import '../css/Loading.css'

const Loading = () => {
    return(
        <div className="loading-display">
            <div className="load">
                <div className="spin"></div>
                <div className="loading">LOADING</div>
            </div>
        </div>
    );
}

export default Loading;