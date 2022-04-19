import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Typography } from './Typography'
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Wrapper = styled.header`
  text-align: center;
`
const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 89px;
`

const SubHeader = styled(Typography)`
  top: 8px;
  position: relative;
`
export const Header = () => {
  return (
    <Wrapper>
      <Logos>
        <AniLink fade to="/" style={{ height: 71 }}>
          <StaticImage src={'../images/header.png'} alt={'inno logo'} />
        </AniLink>
        <StaticImage src={'../images/sqalogo.png'} alt={'sqa logo'} style={{ marginRight: '0.25rem' }} />
      </Logos>
      <Typography fontSize={40} lineHeight={50} fontWeight={700} display="inline">
        INNOTECH
        <SubHeader fontSize={24} lineHeight={29} fontWeight={700} display="inline">
          QA
        </SubHeader>
      </Typography>
    </Wrapper>
  )
}
