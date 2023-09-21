import React from 'react'
import ProjectCardContainer from '../Components/ProjectCardContainer'
import projectsData from '../Data/ProjectsData'

function Projects () {
  return (
    <div className='h-full flex flex-col justify-center'>
      <div className='text-4xl'>Projects</div>
      <div className='min-w-0 min-h-0 w-full xl:w-[1100px] grow relative m-auto'>
        <div className='h-full w-full grid grid-cols-2 grid-rows-4 gap-4 p-4'>
          {projectsData.map((pData, index) => (
            <ProjectCardContainer
              key={index}
              title={pData.title}
              classes={pData.classes}
              imgSrc={pData.imgSrc}
              imgPOI={pData.imgPOI}
              desc={pData.desc}
              content={pData.content}
              tags={pData.tags}
               />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Projects
