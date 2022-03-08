import { styled } from '@stitches/react'
import React, { useEffect } from 'react'
import { Repository } from '../../pages'
import { TitleAsTag, WhiteContainer } from '../About'
import Project from './Project'

interface GitHubProjectsProps {
  repos: Repository[]
}

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '20px',
  margin: '50px 0',
  
  '@media (min-width: 45em)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  }
})

export default function GitHubProjects({ repos }: GitHubProjectsProps) {

  useEffect(() => {
    console.log({repos})
  }, [repos])

  return (
    <WhiteContainer>
      <TitleAsTag>
        github projects
      </TitleAsTag>
      <Grid>
        {repos.map(repository => <Project repository={repository}/>)}
      </Grid>
    </WhiteContainer>
  )
}

