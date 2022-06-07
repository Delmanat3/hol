import Item from '@/components/organisms/Item'
import PropTypes from 'prop-types'

/**
 * Handle the ItemBlock block.
 *
 * @author WebDevStudios
 * @param  {object}  props            The props.
 * @param  {object}  props.attributes The attributes object.
 * @return {Element}                  The component.
 */
export default function ItemBlock({attributes}) {
  const {data} = attributes
  const {item_repeater} = data
  let items = []
  // Prepare repeater data for mapping
  for (let z = 0; z < item_repeater; z++) {
    let prices = []
    if (data[`item_repeater_${z}_item_prices`] > 0) {
      for (let i = 0; i < data[`item_repeater_${z}_item_prices`]; i++) {
        prices.push({
          title: data[`item_repeater_${z}_item_prices_${i}_item_price_title`],
          price: data[`item_repeater_${z}_item_prices_${i}_item_price`]
        })
      }
    }
    items.push({
      title: data[`item_repeater_${z}_item_title`],
      price: prices.length > 0 ? prices : data[`item_repeater_${z}_item_price`],
      description: data[`item_repeater_${z}_item_description`],
      info: data[`item_repeater_${z}_item_information`]
    })
  }
  return (
    <>
      {attributes ? (
        <Item {...attributes.data} items={items} />
      ) : (
        'There was a problem with attributes in Item.js.'
      )}
    </>
  )
}

ItemBlock.propTypes = {
  panels: PropTypes.object
}
