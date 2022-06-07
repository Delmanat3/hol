import styles from './about.module.css'

const balls = '/images/welcome.jpg'
const wackOutline = '/images/Outline.png'

export default function About() {
  const alterables = useWordPressContext()
  const socialMedia = alterables.alterables.optionsSocialMedia
  console.log(socialMedia)
  return (
    <div
      className={styles.redBox}
      style={{height: '302px', backgroundColor: '#B12A1B', display: 'flex'}}
    >
      {/* aPICTURE */}
      <div className={styles.cheesin}>
        <img className="welcome" src={balls} alt="welcome" />
      </div>
      {/* START TEXT */}
      <div className={styles.about}>
        <div>
          <h1 className={styles.welc}>Welcome</h1>

          <div className={placer}>
            {alterables.optionsSocialMedia.welcome_paragraph}
          </div>
        </div>
      </div>
      <div>
        <img src={wackOutline} alt="mountain view" />
      </div>
      {/* START WEIRD MOUNTAIN THING */}
    </div>
  )
}
