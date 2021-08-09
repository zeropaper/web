import cn from 'classnames'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'
import React from 'react'

import Button from '../../freestanding/button/button'
import Footer from '../footer/footer'
import Navigation from '../navigation/navigation'

import * as styles from './layout.module.css'

import logoOryFooter from '../../../images/logo/logo-ory-footer.svg'
import oryLogoPrimary from '../../../images/logo/logo-ory-primary.svg'

interface PropTypes {
  theme?: string
  children?: React.ReactNode
}

const Layout = ({ children, theme }: PropTypes) => {
  const ArrowRight = <i className="ph-arrow-right-bold themed-primary size16" />
  const SignIn = <i className="ph-sign-in themed-primary size24" />

  return (
    <div className={cn(styles.layout)}>
      <Navigation
        logo={oryLogoPrimary}
        sideNav={[
          <Button
            to={'https://console.ory.sh/login'}
            style={'text'}
            openInNewWindow={false}
            iconRight={SignIn}
          >
            Login
          </Button>,
          <Button
            to={'https://console.ory.sh/registration'}
            style={'filled'}
            openInNewWindow={false}
          >
            Request Access
          </Button>
        ]}
        dropdownMenu={[
          {
            title: 'Product',
            mainMenu: [
              {
                description: 'Never Build Auth Again',
                button: (
                  <Button
                    to={'https://console.ory.sh/registration'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={ArrowRight}
                  >
                    Ory Cloud
                  </Button>
                )
              },
              {
                description: "Ory's heart is Open Source",
                button: (
                  <Button
                    to={'/open-source'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={ArrowRight}
                  >
                    Open Source Ecosystem
                  </Button>
                )
              },
              {
                description: 'Identity & User Management',
                button: (
                  <Button
                    className={cn('font-h5')}
                    to={'/kratos'}
                    style={'link'}
                    openInNewWindow={true}
                    iconRight={ArrowRight}
                  >
                    Kratos
                  </Button>
                )
              },
              {
                description: 'OAuth 2.0 & OpenIDConnect',
                button: (
                  <Button
                    className={cn('font-h5')}
                    to={'/hydra'}
                    style={'link'}
                    openInNewWindow={true}
                    iconRight={ArrowRight}
                  >
                    Hydra
                  </Button>
                )
              },
              {
                description: 'Authorization Server',
                button: (
                  <Button
                    className={cn('font-h5')}
                    to={'/keto'}
                    style={'link'}
                    openInNewWindow={true}
                    iconRight={ArrowRight}
                  >
                    Keto
                  </Button>
                )
              },
              {
                description: 'Zero Trust Networking',
                button: (
                  <Button
                    className={cn('font-h5')}
                    to={'/oathkeeper'}
                    style={'link'}
                    openInNewWindow={true}
                    iconRight={ArrowRight}
                  >
                    Oathkeeper
                  </Button>
                )
              }
            ]
          },
          {
            title: 'Developers',
            mainMenu: [
              {
                description: 'Be a part of the Ory Community',
                button: (
                  <Button
                    to={'/community'}
                    style={'link'}
                    iconRight={ArrowRight}
                  >
                    Community
                  </Button>
                )
              },
              {
                description: 'Articles & Guides',
                button: (
                  <Button
                    to={'/blog'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={ArrowRight}
                  >
                    Blog
                  </Button>
                )
              },
              {
                description: 'Participate in Development',
                button: (
                  <Button
                    to={'https://github.com/ory'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={ArrowRight}
                  >
                    GitHub
                  </Button>
                )
              }
            ]
          },
          {
            title: (
              <Button to={'/pricing'} style={'link'}>
                Pricing
              </Button>
            )
          },
          {
            title: (
              <Button to={'/docs/'} style={'link'}>
                Docs
              </Button>
            )
          },
          {
            title: 'Company',
            mainMenu: [
              {
                description: '',
                button: (
                  <Button
                    to={'mailto:office@ory.sh'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={ArrowRight}
                  >
                    Contact
                  </Button>
                )
              },
              {
                description: '',
                button: (
                  <Button
                    to={'/about'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={ArrowRight}
                  >
                    About Us
                  </Button>
                )
              },
              {
                description: '',
                button: (
                  <Button
                    to={'/jobs'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={ArrowRight}
                  >
                    Jobs!
                  </Button>
                )
              },
              {
                description: '',
                button: (
                  <Button
                    to={'/identity-in-modern-applications-oreilly'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={ArrowRight}
                  >
                    Identity Report
                  </Button>
                )
              }
            ]
          }
        ]}
        mobileMenu={{
          headline: [
            {
              description: 'Never Build Auth Again',
              button: (
                <Button
                  className={cn('font-h5')}
                  to={'https://console.ory.sh/registration'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Ory Cloud
                </Button>
              )
            },
            {
              description: 'Start integrating Ory products',
              button: (
                <Button
                  className={cn('font-h5')}
                  to={'/docs/'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Documentation
                </Button>
              )
            },
            {
              description: 'Ory Open Source Community',
              button: (
                <Button
                  className={cn('font-h5')}
                  to={'/community'}
                  style={'link'}
                >
                  Community
                </Button>
              )
            }
          ],
          main: {
            title: 'Product',
            buttons: [
              <Button
                className={cn('font-h5')}
                to={'/pricing'}
                style={'link'}
                openInNewWindow={true}
              >
                Pricing
              </Button>,
              <Button
                className={cn('font-h5')}
                to={'/open-source'}
                style={'link'}
                openInNewWindow={true}
              >
                Ory Open Source
              </Button>,
              <Button
                className={cn('font-h5')}
                to={'/kratos'}
                style={'link'}
                openInNewWindow={true}
              >
                Kratos
              </Button>,
              <Button
                className={cn('font-h5')}
                to={'/hydra'}
                style={'link'}
                openInNewWindow={true}
              >
                Hydra
              </Button>,
              <Button
                className={cn('font-h5')}
                to={'/oathkeeper'}
                style={'link'}
                openInNewWindow={true}
              >
                Oathkeeper
              </Button>,
              <Button
                className={cn('font-h5')}
                to={'/keto'}
                style={'link'}
                openInNewWindow={true}
              >
                Keto
              </Button>
            ]
          },
          extra: [
            <Button
              className={cn('font-h5')}
              to={'https://github.com/ory'}
              style={'link'}
              openInNewWindow={true}
            >
              GitHub
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'/blog'}
              style={'link'}
              openInNewWindow={true}
            >
              Blog
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'mailto:hi@ory.sh'}
              style={'link'}
              openInNewWindow={true}
            >
              Contact Us
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'about'}
              style={'link'}
              openInNewWindow={true}
            >
              About Us
            </Button>,
            <Button
              className={cn('font-h5 font-nowrap')}
              to={'/jobs'}
              style={'link'}
              openInNewWindow={true}
            >
              Jobs
            </Button>,
            <Button
              to={'/identity-in-modern-applications-oreilly'}
              style={'link'}
              openInNewWindow={false}
            >
              Identity Report
            </Button>
          ]
        }}
      />
      <main className={`theme-${theme}`}>{children}</main>
      <Footer
        logo={
          <img
            width={'100%'}
            height={'100%'}
            loading="lazy"
            alt="Ory logo footer"
            src={logoOryFooter}
          />
        }
        copyright={<>© Copyright 2021 Ory Corp</>}
        contact={{
          contactEmail: (
            <Button to={'mailto:office@ory.sh'} style={'link'}>
              office@ory.sh
            </Button>
          ),
          contactText: <>👋 Say Hello</>
        }}
        social={[
          <Button
            to={'https://www.github.com/ory'}
            style={'none'}
            openInNewWindow={true}
          >
            <i className={'ph-github-logo-fill base-grey-200 size24'} />
          </Button>,
          <Button
            to={'https://www.youtube.com/channel/UC9hCxZZeviexX0GclD0brrw'}
            style={'none'}
            openInNewWindow={true}
          >
            <i className={'ph-youtube-logo-fill base-grey-200 size24'} />
          </Button>,
          <Button
            to={'https://twitter.com/orycorp'}
            style={'none'}
            openInNewWindow={true}
          >
            <i className={'ph-twitter-logo-fill base-grey-200 size24'} />
          </Button>,
          <Button
            to={'https://slack.ory.sh/'}
            style={'none'}
            openInNewWindow={true}
          >
            <i className={'ph-slack-logo-fill base-grey-200 size24'} />
          </Button>,
          <Button
            to={'https://www.linkedin.com/company/ory-corp/'}
            style={'none'}
            openInNewWindow={true}
          >
            <i className={'ph-linkedin-logo-fill base-grey-200 size24'} />
          </Button>
        ]}
        legal={[
          <Button
            to={'https://status.ory.sh/'}
            style={'link'}
            openInNewWindow={true}
          >
            Status
          </Button>,
          <Button to={'/privacy'} style={'link'}>
            Privacy
          </Button>,
          <Button to={'/tos'} style={'link'}>
            Terms
          </Button>
        ]}
        links={[
          {
            title: 'Product',
            links: [
              <Button
                to={'https://console.ory.sh/registration'}
                style={'link'}
                openInNewWindow={true}
              >
                Cloud
              </Button>,
              <Button to={'/open-source'} style={'link'} openInNewWindow={true}>
                Open Source
              </Button>,
              <Button to={'/hydra'} style={'link'} openInNewWindow={true}>
                Hydra
              </Button>,
              <Button to={'/kratos'} style={'link'} openInNewWindow={true}>
                Kratos
              </Button>,
              <Button to={'/keto'} style={'link'} openInNewWindow={true}>
                Keto
              </Button>,
              <Button to={'/oathkeeper'} style={'link'} openInNewWindow={true}>
                Oathkeeper
              </Button>,
              <Button to={'/pricing'} style={'link'} openInNewWindow={true}>
                Pricing
              </Button>
            ]
          },
          {
            title: 'Developers',
            links: [
              <Button to={'/docs/'} style={'link'} openInNewWindow={true}>
                Documentation
              </Button>,
              <Button to={'/community'} style={'link'}>
                Community
              </Button>,
              <Button
                to={'https://github.com/ory'}
                style={'link'}
                openInNewWindow={true}
              >
                GitHub
              </Button>,
              <Button to={'/blog'} style={'link'} openInNewWindow={true}>
                Blog
              </Button>
            ]
          },
          {
            title: 'Company',
            links: [
              <Button to={'/about'} style={'link'} openInNewWindow={true}>
                About Us
              </Button>,
              <Button to={'/jobs'} style={'link'} openInNewWindow={true}>
                Jobs&nbsp;
                <span className={cn('pill')}>hiring</span>
              </Button>,
              <Button
                to={'mailto:office@ory.sh'}
                style={'link'}
                openInNewWindow={true}
              >
                Contact Us
              </Button>,
              <Button
                to={'/identity-in-modern-applications-oreilly'}
                style={'link'}
                openInNewWindow={false}
              >
                Identity Report
              </Button>
            ]
          }
        ]}
      />
    </div>
  )
}

export default Layout
