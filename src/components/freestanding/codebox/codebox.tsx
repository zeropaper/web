import cn from 'classnames'
import Prism from 'prismjs'
import React, { Component } from 'react'

import Container from '../containers/container'

import * as styles from './codebox.module.css'

export enum Languages {
  HTML = 'html',
  YML = 'yml',
  JavaScript = 'javascript',
  Shell = 'shell',
  Go = 'go'
}

interface Tab {
  filename: string
  code: string
  language: Languages
}

export interface PropTypes {
  tabs: Tab[]
}

interface StateTypes {
  active: number
  tabs: Tab[]
}

class CodeBox extends Component<PropTypes, StateTypes> {
  state = {
    active: 0,
    tabs: []
  }

  componentDidMount() {
    this.setState({
      tabs: this.props.tabs.map(this.highlight)
    })
  }

  onSelectTab = (index: number) => () => {
    this.setState({ active: index })
  }

  highlight(tab: Tab) {
    return {
      ...tab,
      code: Prism.highlight(
        tab.code,
        Prism.languages[tab.language],
        tab.language
      )
    }
  }

  render() {
    const { tabs } = this.state
    return (
      <Container
        alignItems={'start'}
        xsHidden={true}
        className={cn(styles.box, 'background-is-dark')}
      >
        <Container justify={'start'} className={styles.editorHeader}>
          <div className={styles.windowActions}>
            <div className={cn(styles.windowAction, styles.primary)} />
            <div className={cn(styles.windowAction)} />
            <div className={cn(styles.windowAction)} />
          </div>
          <div className={styles.tabs}>
            {tabs.map(({ filename }, index) => (
              <p
                key={filename}
                className={cn(styles.tab, 'font-p', {
                  [styles.selected]: index === this.state.active
                })}
                onClick={this.onSelectTab(index)}
              >
                {filename}
              </p>
            ))}
          </div>
        </Container>
        <Container alignItems={'start'} className={styles.content}>
          {tabs.map(({ filename, code, language }, index) => (
            <pre
              key={filename}
              className={cn(
                `language-${language}`,
                'font-p-small',
                'is-monospace',
                {
                  [styles.active]: index === this.state.active
                }
              )}
            >
              <code dangerouslySetInnerHTML={{ __html: `${code}` }} />
            </pre>
          ))}
        </Container>
      </Container>
    )
  }
}

export default CodeBox
