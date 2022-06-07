/* eslint-disable */
import Container from '@/components/atoms/Container'
import DisplayImage from '@/components/atoms/Image'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styles from './slider.module.css'
import  displayBlock  from '@/functions/wordpress/blocks/displayBlock';

/**
 * @param  {object}  props             SliderContainer component props.
 * @param  {string}  props.className   Optional className.
 * @param  {string}  props.style
 * @param  {object}  props.onClick     onClick
 */
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

/**
 * @param  {object}  props             SliderContainer component props.
 * @param  {string}  props.className   Optional className.
 * @param  {string}  props.style
 * @param  {object}  props.onClick     onClick
 */
function SamplePrevArrow(props) {
  const {className, style, onClick, sliderSize} = props
  let arrow_bg = sliderSize == 'full' ? 'rgba(255, 255, 255, 0.5)' : '' ;
  return (
    <div
      className={cn(className, 'z-10')}
      style={{
        ...style,
        display: 'block',
        left: '25px',
      }}
      onClick={onClick}
    />
  )
}
SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

/**
 * Render the ImageSlider component.
 *
 * @param  {object}  props              ImageSlider component props.
 * @param  {string}  props.className    The className.
 * @param  {Array}   props.iamges       The testimonaials from ImageSliderBlock
 * @param  {Array}   props.imageMetas   The images metadata
 * @param            props.size
 * @return {Element}                    The ImageSlider component.
 */
export default function ImageSlider({ className, images, imageMetas, imageRepeater_size }) {
  // Slider settings
  const quotesSliderSettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow sliderSize={imageRepeater_size} />,
    prevArrow: <SamplePrevArrow sliderSize={imageRepeater_size} />,
    arrows: false,
    waitForAnimate: false,
    adaptiveHeight: false
  }
  console.log(images)
  return (
    <Container>
      <Slider
        className={cn(styles.ImageSlider, className)}
        {...quotesSliderSettings}
      >
        {images.map((item, i) => {
          let currImage
          let currImageLink
          let currMeta = imageMetas[i]
          if (item.image) {
            currImage =
              <DisplayImage
                className={styles.imageWrap}
                id={item.image}
                alt={currMeta?.altText}
                imageMeta={currMeta}
              />
          }

          if (item.link) {
            currImageLink =
              <a href={item.link} target="_blank">
                {currImage}
              </a>
          }

          return (
            <div key={i} className={cn(styles.imageWrap)}>
              {currImageLink != null ? currImageLink : currImage}
            </div>
          )
        })}
      </Slider>
    </Container>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.array,
  imageMetas: PropTypes.array,
  size: PropTypes.string
}
