import cn from 'classnames'
import React, {
  ChangeEvent,
  MouseEvent,
  Component,
  ReactNode,
  FormEvent,
  useState
} from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Form from '../forms/forms'

import { pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './newsletter.module.css'

const projects = {
  kratos: '&group[17097][4]=1',
  hydra: '&group[17097][8]=1',
  oathkeeper: '&group[17097][16]=1',
  keto: '&group[17097][32]=1'
}

interface PropTypes {
  special?: ReactNode
  preselect?: keyof typeof projects
}

const Newsletter = ({ preselect, special }: PropTypes) => {
  const [email, setEmail] = useState('')

  const onSubmit = (
    e: MouseEvent<HTMLInputElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    window.open(
      'https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53&MERGE0=' +
        encodeURIComponent(email) +
        (preselect ? projects[preselect] : '')
    )
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className={cn(styles.newsletter, 'background-is-dark')}>
      <Container fluid={true} justify={'center'}>
        <Grid lg={5} md={8} sm={10} xs={12} className={cn(pb32)}>
          <ContentText>
            <Container justify={'center'} className={cn(styles.textAlign)}>
              {special ? (
                special
              ) : (
                <>
                  <h3 className={cn('font-h3', pb32)}>Never miss a patch</h3>
                  <p className={cn('font-p', pb32)}>
                    Ory ships regular product patches and updates. Subscribe to
                    our newsletter to get the good stuff, and stay up to date.
                  </p>
                </>
              )}
            </Container>
          </ContentText>
          <Form
            isSingleLine={true}
            content={[
              {
                type: 'email',
                name: 'email',
                placeholder: 'Enter your email',
                required: true,
                onChange: onChange,
                value: email
              },
              {
                type: 'submit',
                name: 'submit',
                value: 'Subscribe'
              }
            ]}
            onSubmit={onSubmit}
          />
        </Grid>
      </Container>
    </div>
  )
}

export default Newsletter
