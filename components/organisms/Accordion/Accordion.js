import cn from 'classnames'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import styles from './Accordion.module.css'
import displayBlock from '@/functions/wordpress/blocks/displayBlock'

/**
 * Render the Accordion component.
 *
 * @param  {object}  props                Accordion component props.
 * @param  {string}  props.className      The className.
 * @param  {object}  props.innerBlocks    The array of inner blocks to display.
 * @param  {string}  props.category_title Title of category
 * @param  {object}  props.category_level Level of category
 * @param  {string}  props.id             ID of block
 * @return {Element}                      The Accordion component.
 */
export default function ItemAccordion({
  className,
  id,
  innerBlocks,
  category_title,
  category_level
}) {
  const [accordionActive, setAccordionActive] = useState([])
  let categoryClassName
  let categoryHeading
  let accordionClassName
  let blockContent

  if (category_level == 'container') {
    blockContent = (
      <Accordion
        className={cn(
          styles.AccordionContainer,
          className,
          accordionActive.length != 0 && styles.itemExpanded
        )}
        allowZeroExpanded={true}
        onChange={(e) => {
          // const itemID =
          //   e.length != 0
          //     ? document.getElementById('accordion__panel-' + e[0]).dataset
          //         .title
          //     : ''
          // window.location.href = '#' + itemID
          setAccordionActive(e)
        }}
      >
        {!!innerBlocks?.length && (
          <>
            {innerBlocks.map((block, index) => {
              return displayBlock(block, index)
            })}
          </>
        )}
      </Accordion>
    )
  } else if (category_level == 'topCat') {
    categoryClassName = styles.topHeading
    accordionClassName = styles.topAccordion
    categoryHeading = <h2>{category_title}</h2>

    blockContent = (
      <>
        <div id={category_title.replace(' ', '')}></div>
        <AccordionItem uuid={id} className={accordionClassName}>
          <AccordionItemHeading
            className={styles.accordionHeading}
            onClick={(e) => {
              // window.location.href = '#' + category_title.replace(' ', '')
              setTimeout(() => {
                window.scrollTo({
                  top:
                    window.pageYOffset + e.target.getBoundingClientRect().top,
                  left: 0,
                  behavior: 'smooth'
                })
              }, 50)
            }}
          >
            <AccordionItemButton className={categoryClassName}>
              {categoryHeading}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.panel}>
            {!!innerBlocks?.length && (
              <>
                {innerBlocks.map((block, index) => {
                  return displayBlock(block, index)
                })}
              </>
            )}
          </AccordionItemPanel>
        </AccordionItem>
      </>
    )
  } else if (category_level == 'subCat') {
    categoryClassName = styles.subHeading
    accordionClassName = styles.subAccordion
    categoryHeading = <h3>{category_title}</h3>

    blockContent = (
      <>
        <div id={category_title.replace(' ', '')}></div>
        <AccordionItem uuid={id} className={accordionClassName}>
          <AccordionItemHeading
            className={styles.accordionHeading}
            onClick={(e) => {
              // window.location.href = '#' + category_title.replace(' ', '')
              setTimeout(() => {
                window.scrollTo({
                  top:
                    window.pageYOffset + e.target.getBoundingClientRect().top,
                  left: 0,
                  behavior: 'smooth'
                })
              }, 50)
            }}
          >
            <AccordionItemButton className={categoryClassName}>
              {categoryHeading}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.panel}>
            {!!innerBlocks?.length && (
              <>
                {innerBlocks.map((block, index) => {
                  return displayBlock(block, index)
                })}
              </>
            )}
          </AccordionItemPanel>
        </AccordionItem>
      </>
    )
  }
  return <>{blockContent}</>
}

ItemAccordion.propTypes = {
  id: PropTypes.string,
  innerBlocks: PropTypes.object,
  category_level: PropTypes.object,
  category_title: PropTypes.string
}
