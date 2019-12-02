import React from 'react'

import buttonStyles from './button.module.scss'

export const Button = ( { children, type, onClick, buttonStyle, buttonSize } ) => {

    return(
        <button onClick={onClick} type={type} class={buttonStyles.primaryButton}>
            {children}
        </button>
    )

}