import React, { useState } from 'react'

const Skill = ({ path, nombre, porcentaje }) => {

    const [src, setSrc] = useState(path)
    const [name, setName] = useState(nombre)
    const [percent, setPercentage] = useState(porcentaje)

    return (
        <div className='imgSkillContainer'>
            <div className='imgSkill'>
                <img src={src} alt="js" />
                <div style={{
                    width: "100%",
                    height: '0.5rem',
                    border: '1px solid white',
                    borderRadius: '20%'
                }} className='skillBar'>
                    <div style={{
                        width: percent + "%",
                        borderRadius: '20%',
                        borderTopRightRadius: percent === 100 ? '20%' : '0px',
                        borderBottomRightRadius: percent === 100 ? '20%' : '0px',
                        height: '0.5rem',
                        backgroundColor: '#32dc2a'
                    }}>
                    </div>
                </div>
            </div>
            <span className='skillName'>{name}</span>
        </div>
    )
}

export default Skill