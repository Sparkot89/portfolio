import React, { useState } from 'react'
const Skills = () => {
  return (
    <section data-aos="flip-left" data-aos-duration="1000">
      <h3 >Mis conocimientos</h3>
      <div className='App-skills'>
        <img className='imgSkill' src="./svgFiles/js.svg" alt="js" />
        <img className='imgSkill' src="./svgFiles/typescript.svg" alt="typescript" />
        <img className='imgSkill' src="./svgFiles/html5.svg" alt="html5" />
        <img className='imgSkill' src="./svgFiles/css3.svg" alt="css3" />
        <img className='imgSkill' src="./svgFiles/git.svg" alt="git" />
        <img className='imgSkill' src="./svgFiles/github.svg" alt="github" />
        <img className='imgSkill' src="./svgFiles/react.svg" alt="react" />
        <img className='imgSkill' src="./svgFiles/npm.svg" alt="npm" />
        <img className='imgSkill' src="./svgFiles/nodejs.svg" alt="nodeJS" />
        <img className='imgSkill' src="./svgFiles/openui5.svg" alt="openui5" />
        <img className='imgSkill'  src="./svgFiles/java.svg" alt="java" />
        <img className='imgSkill'  src="./svgFiles/spring.svg" alt="spring" />
        <img className='imgSkill'  src="./svgFiles/hibernate.svg" alt="hibernate" />
      </div>
    </section>
  )
}

export default Skills