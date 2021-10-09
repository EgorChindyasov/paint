import React from 'react';

import toolState from '../store/toolState';

import '../styles/toolbar.scss';


const SettingBar = () => {

    const changeColor = e => {
        toolState.setStrokeColor(e.target.value);
    }

    return (
        <div className='setting__bar'>
            <label htmlFor='line-width'>Толщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)} 
                id='line-width' 
                style={{margin: '0 10px'}} 
                type="number" 
                defaultValue={1} 
                min={1} 
                max={50} />
            <label htmlFor='stroke-color'>Цвет обводки</label>
            <input 
                id='stroke-color'
                type='color'
                onChange={e => changeColor(e)} />
        </div>
    )
};

export default SettingBar;