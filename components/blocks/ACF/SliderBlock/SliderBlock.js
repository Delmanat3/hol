import ImageSlider from '@/components/organisms/Slider'
import PropTypes from 'prop-types'

/**
 * Handle the ImageSliderBlock block.
 *
 * @author WebDevStudios
 * @param  {object}  props            The props.
 * @param  {object}  props.attributes The attributes object.
 * @return {Element}                  The component.
 */
export default function ImageSliderBlock({attributes}) {
  const {data} = attributes
  const {image_repeater} = data
  let images = []
  console.log(data)
  // Prepare repeater data for mapping
  for (let z = 0; z < image_repeater; z++) {
    images.push({
      image: data[`image_repeater_${z}_imageRepeater_image`],
      link: data[`image_repeater_${z}_imageRepeater_link`]
    })
  }

  return (
    <>
      {attributes ? (
        <ImageSlider {...attributes.data} images={images} />
      ) : (
        'There was a problem with attributes in ImageSlider.js.'
      )}
    </>
  )
}

ImageSliderBlock.propTypes = {
  attributes: PropTypes.object
}
