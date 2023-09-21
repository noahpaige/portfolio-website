import React, { memo } from 'react'
import ProjectImage from './ProjectImage'
import ProjectTitle from './ProjectTitle'
import Scroller from './Scroller'

const ProjectCard = ({ isOpen, title, imgSrc, imgPOI, content, tags }) => {
  return (
    <div className='backdrop-blur-xl bg-[rgba(20,30,40,0.7)] h-full'>
      <Scroller height={isOpen ? '100%' : 'fit-content'} allowScroll={isOpen}>
        <ProjectImage isOpen={isOpen} imgSrc={imgSrc} width={'800px'} height={'400px'} imgPOI={imgPOI} title={title}>
          <ProjectTitle isOpen={isOpen} title={title} tags={tags} width={'800px'} height={'400px'} />
        </ProjectImage>

        <div className='p-4' >
          { content }
        </div>
      </Scroller>
    </div>
  )
}

export default memo(ProjectCard)
