import React from 'react';
import './sectionHeader.css';

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="section-header-wrapper">
            <div className="decoration-line top-line"></div>
            
            <div className="section-header">
                <h2>{title}</h2>
                {subtitle && <p>{subtitle}</p>}
            </div>

            <div className="decoration-line bottom-line"></div>
            
            <div className="decoration-line right-vertical"></div>
        </div>
    );
};

export default SectionHeader;
