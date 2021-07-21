import React from 'react'

import Button from '../../freestanding/button/button'

const ArrowRight = <i className={'ph-arrow-right-bold themed-primary size16'} />
const Code = <i className={'ph-code-fill themed-primary size32'} />
const LockOpen = <i className={'ph-lock-open-fill themed-primary size32'} />
const UserPlus = <i className={'ph-user-plus-fill themed-primary size32'} />
const CirclesThreePlus = (
  <i className={'ph-circles-three-plus-fill themed-primary size32'} />
)

export const featuresDefault = {
  overline: 'Modular Integration',
  title: <>Auth integration in 1.. 2.. done'</>,
  buttons: (
    <Button
      to={'https://console.ory.sh/registration'}
      style={'link'}
      iconRight={ArrowRight}
    >
      Request Access
    </Button>
  ),

  feature: [
    {
      icon: Code,
      title: <>Ory is open source</>,
      description: (
        <>
          Ory's heart and soul are rooted in open source. Our commitment to open
          software will stay unchanged.
        </>
      )
    },
    {
      icon: UserPlus,
      title: <>No limits on identities</>,
      description: (
        <>
          Dont pay for Monthly Active Users. Pay for what you use.Choose a
          transparent plan that adapts to your needs.
        </>
      )
    },
    {
      icon: CirclesThreePlus,
      title: <>More features</>,
      description: (
        <>
          Ory draws from a large set of features: IAM, Permissions and Roles,
          Zero-Trust, OAuth2, OIDC, Integrations and more.
        </>
      )
    },
    {
      icon: LockOpen,
      title: <>No lock in</>,
      description: (
        <>
          We support the migration from Ory open source to Ory as a Service, and
          the other way around. Don't worry about lock in.
        </>
      )
    }
  ]
}
