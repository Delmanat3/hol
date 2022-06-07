import getGfFormById from '@/functions/wordpress/gravityForms/getGfFormById'
import getMediaByID from '@/functions/wordpress/media/getMediaByID'

/**
 * Format and retrieve expanded block data.
 *
 * @author WebDevStudios
 * @param  {Array} blocks Basic block data.
 * @return {Array}        Formatted block data.
 */
export default async function formatBlockData(blocks) {
  if (!blocks || !blocks.length) {
    return []
  }

  return await Promise.all(
    blocks.map(async (block) => {
      const {name, attributes, innerBlocks} = block

      switch (name) {
        case 'acf/acf-media-text':
          // Retrieve additional image meta.
          attributes.data.imageMeta = await getMediaByID(
            attributes?.data?.image
          )
          break

        case 'core/image':
          // Retrieve additional image meta.
          attributes.imageMeta = await getMediaByID(attributes?.id)
          break

        case 'gravityforms/form':
          // Retrieve form data.
          attributes.formData = await getGfFormById(attributes?.formId)
          break

        case 'acf/slider':
          // Retrieve additional image meta.
          attributes.data.imageMetas = []
          for (let z = 0; z < attributes.data.image_repeater; z++) {
            attributes.data.imageMetas.push(
              await getMediaByID(
                attributes?.data[`image_repeater_${z}_imageRepeater_image`]
              )
            )
          }
          break
      }

      const innerBlocksFormatted = await formatBlockData(innerBlocks)

      return {name, attributes, innerBlocks: innerBlocksFormatted}
    })
  )
}
