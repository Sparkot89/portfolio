import React, { useState } from 'react'
import Skill from './Skill'
const Skills = () => {
  return (
    <section id="skills">
      <div className='App-skills' data-aos="flip-left" data-aos-duration="1000">
        <h3 >Mis conocimientos</h3>
        <div className='skillsContent'>
          <Skill porcentaje={100} nombre="JavaScript" path="./svgFiles/js.svg" alt="js" />
          <Skill porcentaje={100} nombre="HTML5" path="./svgFiles/html5.svg" alt="html5" />
          <Skill porcentaje={100} nombre="Css3" path="./svgFiles/css3.svg" alt="css3" />
          <Skill porcentaje={100} nombre="OpenUI5" path="./svgFiles/openui5.svg" alt="openui5" />
          <Skill porcentaje={100} nombre="Java" path="./svgFiles/java.svg" alt="java" />
          <Skill porcentaje={80} nombre="Npm" path="./svgFiles/npm.svg" alt="npm" />
          <Skill porcentaje={70} nombre="React" path="./svgFiles/react.svg" alt="react" />
          <Skill porcentaje={70} nombre="NodeJS" path="./svgFiles/nodejs.svg" alt="nodeJS" />
          <Skill porcentaje={60} nombre="TypeScript" path="./svgFiles/typescript.svg" alt="typescript" />
          <Skill porcentaje={60} nombre="Git" path="./svgFiles/git.svg" alt="git" />
          <Skill porcentaje={60} nombre="Github" path="./svgFiles/github.svg" alt="github" />
          <Skill porcentaje={60} nombre="Spring" path="./svgFiles/spring.svg" alt="spring" />
          <Skill porcentaje={60} nombre="Hibernate" path="./svgFiles/hibernate.svg" alt="hibernate" />
        </div>
      </div>
    </section>
  )
}

export default Skills