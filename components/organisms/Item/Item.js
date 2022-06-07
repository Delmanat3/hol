import InnerHTML from 'dangerously-set-html-content'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Item.module.css'

/**
 * Render the ITem component.
 *
 * @param  {object}  props           Item component props.
 * @param  {string}  props.className The className.
 * @param  {object}  props.items     If subheader, items
 * @return {Element}                 The Item component.
 */
export default function Item({items}) {
  // http://basil.alopexnxt.dev/wp-content/uploads/sites/7/2021/10/Spicy.svg
  return (
    <>
      {items.map((item, index) => {
        let multiPrice = typeof item.price === 'object'
        let sheSpicy
        item.info &&
          item.info.forEach((x) => {
            if (x === 'spicy') {
              sheSpicy = true
            }
          })
        return (
          <div className={styles.Item} key={index}>
            <div className={multiPrice ? styles.multiPrice : styles.heading}>
              <h4>
                {item.title}
                {sheSpicy && <span className={styles.spicy}></span>}
                <div className={multiPrice && styles.multi}>
                  {multiPrice ? (
                    item.price.map((pricing, index) => {
                      return (
                        <p key={index}>
                          {pricing.title}
                          <span>{pricing.price}</span>
                        </p>
                      )
                    })
                  ) : (
                    <span>{item.price}</span>
                  )}
                </div>
              </h4>
            </div>
            {!!item.description && (
              <div className={styles.description}>
                <InnerHTML html={item.description} />
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

Item.propTypes = {
  items: PropTypes.array
}
