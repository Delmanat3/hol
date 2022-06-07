import {seoSocialPropTypes} from '@/functions/getPagePropTypes'
import PropTypes from 'prop-types'
import {useWordPressContext} from '@/components/common/WordPressProvider'
import styles from './Footer.module.css'
import Link from 'next/link'
import Logo from '@/components/atoms/Logo'
import Navigation from '@/components/molecules/Navigation'

/**
 * Render the Footer component.
 *
 * @author                           WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {object}  props.social    Yoast SEO social media data.
 * @param  {object}  props.menu      Arrary of menu items.
 * @param  {string}  props.siteTitle Yoast SEO site title.
 * @return {Element}                 The Footer component.
 */
//  {social, siteTitle, menu}
export default function Footer() {
  /*   const {alterables} = useWordPressContext()
  const socialMedia = alterables.optionsSocialMedia */
  const footLogo = '/images/footLogo.png'
  const facebookICN = '/images/facebook.svg'
  const phoneICN = '/images/Phone.png'
  const instaham = '/images/instaham.svg'
  return (
    <>
      <footer>
        <div className={styles.takeThree}>
          <Link href="https://www.basilginger.com/" target="_blank">
            <a className={styles.logoLink}>
              <img
                className={styles.logoMe}
                src={footLogo}
                alt="basil ginger"
              />
            </a>
          </Link>
          <Navigation styles={styles} className={styles.primaryMenu} />
          <div className={styles.footRight}>
            <div className={styles.rightLeft}>
              <h1 className={styles.heads}>Hours Of Operation</h1>
              <hr />
              <p className={styles.footPar}>
                {/* {alterables.optionsSocialMedia.operatingHours} */}
              </p>
            </div>
            <div className={styles.rightMid}>
              <h1 className={styles.heads}>Address</h1>
              <hr />
              <p className={styles.footPar}>
                {/* {alterables.optionsSocialMedia.address} */}
              </p>
            </div>
            <div className={styles.rightRite}>
              {/* <h1 className={styles.heads}>Social</h1> */}

              <a className={styles.paddMe} src={footLogo}>
                <img className={styles.footICN} src={facebookICN} />
              </a>
              <a className={styles.paddMe} src={footLogo}>
                <img className={styles.footICN} src={instaham} />
              </a>
              <a className={styles.paddMe} src={footLogo}>
                <img className={styles.footICN} src={phoneICN} />
              </a>
            </div>
          </div>

          <div></div>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = {
  ...seoSocialPropTypes,
  siteTitle: PropTypes.string
}
