import cn from 'classnames'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

import { useWindowSize } from '../../../hook/useWindowSize'
import { jobs } from '../../../page-content/navigation/navigation-announcement'
import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import DropdownItem from '../../freestanding/dropdown/dropdown-item'
import DropdownMenu from '../../freestanding/dropdown/dropdown-menu'
import DropdownMobileItem from '../../freestanding/dropdown/dropdown-mobile-item'
import { DropdownMobileMenu } from '../../freestanding/dropdown/dropdown-mobile-menu'
import MenuItem from '../../freestanding/dropdown/menu-item'
import Announcement from '../navigation/announcement'

import {
  pb24,
  pb8,
  pr32,
  pt16
} from '../../freestanding/utils/padding.module.css'
import * as styles from './navigation.module.css'

export interface DropdownMenuItem {
  title: string | React.ReactElement
  mainMenu?: Array<DropdownMainItem>
  sideMenu?: Array<DropdownSideItem>
}

export interface MobileMenu {
  mobileMenuCategories: Array<MobileMenuCategory>
}

export interface MobileMenuCategory {
  category: string
  mobileMenuItems: Array<MobileMenuItems>
}

export interface MobileMenuItems {
  title: string
  description?: string
  to: string
  openInNewWindow?: boolean
  className?: string
}

export interface DropdownMainItem {
  title: string
  description?: string
  to: string
  openInNewWindow?: boolean
  iconLeft?: React.ReactElement
  className?: string
}

export interface DropdownSideItem {
  button: React.ReactElement
  description: string
}

export interface PropTypes {
  logo: string
  dropdownMenu: Array<DropdownMenuItem>
  mobileMenu: MobileMenu
  sideNav: React.ReactNodeArray
}

const onClickOutsideRef = (
  refs: Array<React.MutableRefObject<any>>,
  handler: (e: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        refs.filter(
          (value) => !value.current || value.current.contains(event.target)
        ).length > 0
      ) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  })
}

const Navigation = ({ logo, dropdownMenu, mobileMenu, sideNav }: PropTypes) => {
  const [mobileOpenNav, setMobileOpenNav] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<string>()

  const currentNode = useRef<any>(null)
  const currentMobileNavBtnNode = useRef<any>(null)
  const currentMobileNode = useRef<any>(null)
  const windowSize = useWindowSize()

  let mobileNav = cn(styles.mobileContainer)
  if (mobileOpenNav) {
    mobileNav = cn(styles.mobileNavActive)
  }

  const List = <i className={'ph-list-fill themed-primary size32'} />

  // once clicked outside of the nav the menu will close
  onClickOutsideRef(
    [currentNode, currentMobileNode, currentMobileNavBtnNode],
    () => {
      setOpenMenu('')
      setMobileOpenNav(false)
    }
  )

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const overflow =
      mobileOpenNav && windowSize.width < 960 ? 'hidden' : 'inherit'
    document.body.style.overflow = overflow
    document.documentElement.style.overflow = overflow
  }, [mobileOpenNav, windowSize])

  return (
    <div
      className={cn(styles.navigation, {
        [styles.navigationMobileOpen]: mobileOpenNav
      })}
    >
      <Announcement {...jobs} />
      <Container
        fluid={true}
        noWrap={true}
        justify={'start'}
        alignItems={'center'}
        className={styles.navigationContainer}
      >
        <Button to={'/'} style={'none'} className={cn(styles.navLogo)}>
          <img src={logo} loading={'eager'} alt={'Ory logo'} />
        </Button>

        <nav role={'navigation'} ref={currentNode} className={styles.flex}>
          <Container justify={'start'} smHidden={true} xsHidden={true}>
            {dropdownMenu.map(({ title, mainMenu, sideMenu }, index) => (
              <MenuItem
                title={title}
                key={index}
                className={cn(pr32)}
                onClick={() =>
                  setOpenMenu((current) => {
                    if (current === String(index)) {
                      return ''
                    }
                    return String(index)
                  })
                }
              >
                <DropdownMenu show={openMenu === String(index)}>
                  {mainMenu &&
                    mainMenu.map(
                      (
                        {
                          title,
                          description,
                          to,
                          openInNewWindow,
                          iconLeft,
                          className
                        },
                        index
                      ) => (
                        <DropdownItem
                          className={className}
                          onClick={() => setOpenMenu('')}
                          key={index}
                          openInNewWindow={openInNewWindow}
                          to={to}
                          title={title}
                          description={description}
                          iconLeft={iconLeft}
                        />
                      )
                    )}
                  {sideMenu && (
                    <Container
                      flexContainer={'column'}
                      justify={'start'}
                      alignItems={'start'}
                    >
                      {sideMenu.map(({ description, button }, index) => (
                        <ContentText key={index} className={cn(pb24)}>
                          {button}
                          <p className={cn('font-p-small')}>{description}</p>
                        </ContentText>
                      ))}
                    </Container>
                  )}
                </DropdownMenu>
              </MenuItem>
            ))}
          </Container>
        </nav>

        <Container justify={'end'} smHidden={true} xsHidden={true}>
          {sideNav &&
            sideNav.map((x, index) => (
              <div className={cn(styles.sidenavButtons)} key={index}>
                {x}
              </div>
            ))}
        </Container>

        <Container
          lgHidden={true}
          mdHidden={true}
          ref={currentMobileNavBtnNode}
        >
          <Button
            to={() => setMobileOpenNav((current) => !current)}
            style={'link'}
          >
            {List}
          </Button>
        </Container>
      </Container>

      <div className={cn(mobileNav)} ref={currentMobileNode}>
        <DropdownMobileMenu>
          {mobileMenu.mobileMenuCategories.map(
            ({ category, mobileMenuItems }, index) => (
              <Container key={index} className={styles.mobileCategoryContainer}>
                <p className={cn(styles.mobileCategory, 'font-p-smaller')}>
                  {category}
                </p>
                {mobileMenuItems.map(
                  (
                    { title, description, to, openInNewWindow, className },
                    index
                  ) => (
                    <DropdownMobileItem
                      className={className}
                      onClick={() => setMobileOpenNav((current) => !current)}
                      key={index}
                      openInNewWindow={openInNewWindow}
                      to={to}
                      title={title}
                    />
                  )
                )}
              </Container>
            )
          )}

          <div className={cn(pb8, pt16)}>
            {sideNav.map((side, index) => (
              <div className={cn(pb8)} key={index}>
                {side}
              </div>
            ))}
          </div>
        </DropdownMobileMenu>
      </div>
    </div>
  )
}

export default Navigation
