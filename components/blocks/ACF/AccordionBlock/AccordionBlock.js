import Accordion from '@/components/organisms/Accordion'
import PropTypes from 'prop-types'

/**
 * Handle the AccordionBlock block.
 *
 * @author WebDevStudios
 * @param  {object}  props             The props.
 * @param  {object}  props.innerBlocks The array of inner blocks to display.
 * @param  {object}  props.attributes  The attributes object.
 * @return {Element}                   The component.
 */
export default function AccordionBlock({attributes, innerBlocks}) {
  return (
    <>
      {attributes ? (
        <Accordion
          {...attributes.data}
          id={attributes.id}
          innerBlocks={innerBlocks}
        />
      ) : (
        'There was a problem with attributes in Accordion.js.'
      )}
    </>
  )
}

AccordionBlock.propTypes = {
  innerBlocks: PropTypes.object
}
