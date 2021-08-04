import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import * as styles from './forms.module.css'

interface InputPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputPropTypes) => <input {...props} />

export interface PropTypes extends React.FormHTMLAttributes<HTMLFormElement> {
  content: Array<InputPropTypes>
  isSingleLine?: boolean
}

const Form = ({ content, isSingleLine, ...rest }: PropTypes) => {
  return (
    <form className={cn(rest.className)} {...rest}>
      <Container className={cn(isSingleLine ? styles.singleLine : '')}>
        {content
          .filter(({ type }) => type !== 'hidden')
          .map((props, index) =>
            !isSingleLine ? (
              <Grid
                key={index}
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={cn(styles.multiline)}
              >
                <Input {...props} />
              </Grid>
            ) : (
              <Input key={index} {...props} />
            )
          )}
      </Container>
      {content
        .filter(({ type }) => type === 'hidden')
        .map((props, index) => (
          <Input key={index + content.length} {...props} />
        ))}
    </form>
  )
}

export default Form
