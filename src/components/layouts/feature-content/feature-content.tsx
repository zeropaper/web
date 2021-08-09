import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'

import { pb16, pb24, pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './feature-content.module.css'

export interface PropTypes {
  id: string
  title: React.ReactElement
  overline: string
  description: React.ReactElement
  content: React.ReactElement
  buttons?: React.ReactNode
}

const FeatureContent = ({
  id,
  title,
  overline,
  description,
  content,
  buttons
}: PropTypes) => (
  <div id={id} className={styles.featureContent}>
    <Container fluid={true} alignItems={'center'}>
      <Grid className={pb32} lg={5} md={4} sm={12} xs={12}>
        <ContentText>
          <Molecule>
            <h3 className={cn('font-overline', pb16)}>{overline}</h3>
            <h2 className={cn('font-h3', pb32)}>{title}</h2>
            <p className={cn('font-p', pb24)}>{description}</p>
          </Molecule>
          {buttons && buttons}
        </ContentText>
      </Grid>
      <Grid lg={6} md={8} sm={12} xs={12}>
        <Container>{content}</Container>
      </Grid>
    </Container>
  </div>
)

export default FeatureContent
