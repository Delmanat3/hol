import styles from './about.module.css'

const balls = '/images/welcome.jpg'
const wackOutline = '/images/Outline.webp'

export default function About({heading, image, _background_image, paragraph}) {
  console.log(image)
  return (
    <div className={styles.redBox} style={{height: '302px', display: 'flex'}}>
      {' '}
      <img src={_background_image.mediaItemUrl} alt="mountain view" />
      {/* aPICTURE */}
      <div className={styles.cheesin}>
        <img className="welcome" src={image} alt="welcome" />
      </div>
      {/* START TEXT */}
      <div className={styles.about}>
        <div>
          <div className={styles.placer}></div>
        </div>
      </div>
    </div>
  )
}
