import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'




function SampleNextArrow(props) {
  const {className, style, onClick, sliderSize} = props
  let right_position = sliderSize == 'full' ? '4rem' : '2%';
  return (
    <>
      <div
        className={cn(className, 'z-10')}
        style={{
          ...style,
          display: 'block',
          right: right_position,
          right: '25px',
          transformOrigin: '0 50%'
        }}
        onClick={onClick}
      />
    </>
  )
}
SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

export const fuckedSlider=()=>{





  return(

  )
}

