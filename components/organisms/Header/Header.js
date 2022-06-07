import Logo from '@/components/atoms/Logo'
import Navigation from '@/components/molecules/Navigation'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Header.module.css'
import {useWordPressContext} from '@/components/common/WordPressProvider'

/**
 * Render the Header component.
 *
 * @author WebDevStudios
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.menu The header menu object.
 * @return {Element}            The Header component.
 */
export default function Header({menu}) {
  const telly = '/images/Phone.png'
  const pinMe = '/images/pin.png'
  const clock = '/images/clockICN.png'
  const {headlessConfig} = useWordPressContext()
  const {optionsSocialMedia}=headlessConfig
  console.log(optionsSocialMedia)
  const callNow = 'tel:' + headlessConfig.optionsSocialMedia.phoneNumber
  return (
    <>
      <header className={styles.sheader}>
        <div className={styles.boon}>
          <div className={styles.navItems}>MENU</div>
          <div className={styles.navItems}>INFO</div>
        </div>
        {/* START LOGO */}
        <div className={styles.log}>
          <Link href="https://www.basilginger.com/" target="_blank">
            <a>
              <Logo className={styles.logo} type="dark" />
            </a>
          </Link>
          <Navigation
            menu={menu}
            styles={styles}
            className={styles.primaryMenu}
          />
        </div>
        {/* START TOP RIGHT */}
        <div className={styles.haleRight} style={{lineHeight: '2'}}>
          <div className={styles.hell0}>
            <span className={styles.boon}>
              <img className={styles.phoneMe} src={telly} alt="telephone" />
              {optionsSocialMedia?.phoneNumber}
            </span>
          </div>
          <div className={styles.hell0}>
            <span className={styles.boon}>
              <img className={styles.phoneMe} src={pinMe} alt="Location" />

              {optionsSocialMedia?.address}
            </span>
          </div>
          <div className={styles.hell0}>
            <span className={styles.boon}>
              <img
                className={styles.phoneMe}
                src={clock}
                alt="Operating hours"
              />

              <u> {optionsSocialMedia?.operatingHours}</u>
            </span>
          </div>
          <div>
            
          </div>
        </div>
      </header>
      <div className={styles.alignLeft}></div>
      <div className={styles.alignRight}></div>
    </>
  )
}

Header.propTypes = {
  menu: PropTypes.array
}
