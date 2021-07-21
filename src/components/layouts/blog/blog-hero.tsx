import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'

import { AuthorLink } from './blog-author'

import { pb16, pb24, pb32 } from '../../freestanding/utils/padding.module.css'
import { blogHero } from './blog-hero.module.css'

interface PropTypes {
  title: string
  date?: string
  author: string
  overline?: string
  subtitle?: string
}

const BlogHero = ({ title, date, author, overline, subtitle }: PropTypes) => (
  <div className={cn(blogHero)}>
    <Container fluid={true} alignItems={'center'} justify={'center'}>
      <Grid lg={7} md={10} sm={12} xs={12}>
        <ContentText>
          <Molecule>
            {overline && (
              <h3 className={cn('font-overline', pb16)}>{overline}</h3>
            )}
            <h2 className={cn('font-h3', pb32)}>{title}</h2>
            {subtitle && <p className={cn('font-p-small', pb24)}>{subtitle}</p>}
            <p className={cn('font-p-smaller')}>
              <AuthorLink name={author} /> -{' '}
              <span className={cn('is-mute-text')}>{date}</span>
            </p>
          </Molecule>
        </ContentText>
      </Grid>
    </Container>
  </div>
)

export default BlogHero
