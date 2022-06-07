import PropTypes from 'prop-types'
import React from 'react'

/**
 * Render the Logo component.
 *
 * @author WebDevStudios
 * @param  {object}  props           Logo props.
 * @param  {string}  props.className Optional classname for the element.
 * @return {Element}                 The Logo component.
 */
export default function Logo({className}) {
  // prettier-ignore
  return (
    // <svg className={className} fill={type === 'dark' ? '#414141' : '#f9fbfd'} width="538" height="185" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 538 185" xmlSpace="preserve"><path d="M42.2 167.4c0 4.5-1.4 8.1-4.3 10.8-2.9 2.7-6.7 4-11.5 4-3.3 0-6.2-.8-8.7-2.5-2.5-1.7-4.3-4-5.4-7.1l2.9-1.5c.9 2.5 2.4 4.4 4.4 5.8 2 1.4 4.4 2.1 7.1 2.1 3.8 0 6.8-1 8.9-3.1 2.2-2.1 3.3-4.9 3.3-8.5 0-2.7-.9-5.1-2.6-7-1.8-2-4.6-3.9-8.7-5.8-5-2.3-8.4-4.5-10.3-6.5-1.9-2-2.8-4.7-2.8-8.1 0-3.5 1.2-6.4 3.7-8.6 2.4-2.2 5.7-3.3 9.6-3.3 2.4 0 4.5.5 6.4 1.5 1.8 1 3.3 2.4 4.5 4.4l-2.6 1.9c-.9-1.5-2.1-2.6-3.6-3.4-1.5-.8-3.2-1.2-5-1.2-3 0-5.3.8-7 2.4-1.7 1.6-2.6 3.7-2.6 6.5 0 2.2.6 4 1.7 5.4 1.1 1.4 3.1 2.9 6 4.4.8.4 1.9 1 3.4 1.7 8.8 4.3 13.2 9.6 13.2 15.7zM115.3 131.9h-12.7v49.7h-3.4v-49.7H86.6v-3.1h28.7v3.1zM199.4 161.9c0 7.2-1.4 12.4-4.1 15.5-2.8 3.2-7.2 4.7-13.4 4.7s-10.6-1.6-13.4-4.7c-2.8-3.2-4.1-8.3-4.1-15.5v-33.2h3.4v34.1c0 5.7 1.1 9.8 3.4 12.4 2.3 2.6 5.9 3.8 10.8 3.8s8.5-1.3 10.8-3.8c2.3-2.6 3.4-6.7 3.4-12.4v-34.1h3.4v33.2zM289.5 155.2c0 8.9-2.5 15.5-7.4 19.8-4.9 4.3-12.5 6.5-22.7 6.5H253v-52.8h7.4c9.5 0 16.7 2.3 21.7 6.9 5 4.6 7.4 11.1 7.4 19.6zm-3.3-.1c0-7.6-2.2-13.4-6.7-17.4-4.4-3.9-11-5.9-19.7-5.9h-3.5v46.5h2.5c9.7 0 16.7-1.9 20.9-5.6 4.4-3.6 6.5-9.5 6.5-17.6zM343.7 181.5h-3.4v-52.8h3.4v52.8zM448.6 155.1c0 7.5-2.7 13.9-8 19.2-5.3 5.3-11.8 7.9-19.4 7.9-7.5 0-13.9-2.6-19.2-7.9-5.3-5.3-7.9-11.7-7.9-19.2 0-7.7 2.6-14.2 7.8-19.3 5.2-5.2 11.7-7.8 19.4-7.8 7.7 0 14.2 2.6 19.5 7.8 5.2 5.2 7.8 11.6 7.8 19.3zm-3.3 0c0-6.7-2.3-12.4-7-17-4.6-4.6-10.3-6.9-17-6.9-6.7 0-12.3 2.3-16.9 6.9-4.6 4.6-6.9 10.3-6.9 17 0 6.7 2.3 12.4 6.9 17 4.6 4.6 10.2 6.9 16.9 6.9 6.7 0 12.4-2.3 17-6.9 4.6-4.6 7-10.3 7-17zM525.2 167.4c0 4.5-1.4 8.1-4.3 10.8-2.9 2.7-6.7 4-11.5 4-3.3 0-6.2-.8-8.7-2.5-2.5-1.7-4.3-4-5.4-7.1l2.9-1.5c.9 2.5 2.4 4.4 4.4 5.8 2 1.4 4.4 2.1 7.1 2.1 3.8 0 6.8-1 8.9-3.1 2.2-2.1 3.3-4.9 3.3-8.5 0-2.7-.9-5.1-2.6-7-1.8-2-4.6-3.9-8.7-5.8-5-2.3-8.4-4.5-10.3-6.5-1.9-2-2.8-4.7-2.8-8.1 0-3.5 1.2-6.4 3.7-8.6 2.4-2.2 5.7-3.3 9.6-3.3 2.4 0 4.5.5 6.4 1.5 1.8 1 3.3 2.4 4.5 4.4l-2.6 1.9c-.9-1.5-2.1-2.6-3.6-3.4-1.5-.8-3.2-1.2-5-1.2-3 0-5.3.8-7 2.4-1.7 1.6-2.6 3.7-2.6 6.5 0 2.2.6 4 1.7 5.4 1.1 1.4 3.1 2.9 6 4.4.8.4 1.9 1 3.4 1.7 8.7 4.3 13.2 9.6 13.2 15.7z"/><g><path d="M513.3 28.7l-.6 1.7L492.4 83l-21-54.3h-16.3l30.3 76.7h14l30.2-76.7zM102.1 30.1L84.6 82.8 69.4 36.5H57.3L42.2 82.8 24.6 30.1H8.4l26.7 76.8h13.5l14.6-45.7L78 106.9h13.6l26.5-76.8zM197.2 60.7h-69.5c2.2-10.2 11.7-18.7 24.5-18.7h.7c8.6 0 16.2 4.9 20.5 11.4l.8 1.3h16.1l-1.8-3.9c-2-4.3-4.8-8.3-8.3-11.7-7.3-7-17.3-10.8-28-10.8-11.4 0-21.5 4.5-28.7 11.8-7.2 7.3-11.5 17.5-11.5 28.7 0 9.5 3.4 19.5 10.2 27.2 6.8 7.7 17 13 30.1 13h.1c7.8 0 15.3-2.1 21.8-6.3 6.6-4.1 12-10.4 15.5-18.6l1.7-3.8H175l-.8 1.5c-4.2 8.4-12 13.1-22 13.2h-.3c-5.4 0-11.6-2-16.3-5.9-4.2-3.5-7.3-8.3-8.2-14.9h69.9l.2-2.5c.1-1.2.2-2.5.2-3.7 0-1.6-.1-3.2-.3-4.7l-.2-2.6zM461.3 60.7h-69.5C394 50.5 403.6 42 416.4 42h.7c8.6 0 16.2 4.9 20.5 11.4l.8 1.3h16.1l-1.8-3.9c-2-4.3-4.8-8.3-8.3-11.7-7.3-7-17.3-10.8-28-10.8-11.4 0-21.5 4.5-28.7 11.9-7.2 7.3-11.5 17.5-11.5 28.7 0 9.5 3.4 19.5 10.2 27.2 6.8 7.7 17 13 30.1 13h.1c7.8 0 15.3-2.1 21.8-6.3 6.6-4.1 12-10.4 15.5-18.6l1.7-3.8h-16.1l-.8 1.5c-4.2 8.4-12 13.1-22 13.2h-.3c-5.4 0-11.6-2-16.3-5.9-4.2-3.5-7.3-8.3-8.2-15h69.9l.2-2.5c.1-1.2.2-2.5.2-3.7 0-1.6-.1-3.2-.3-4.7l-.6-2.6zM272.6 40c-7.3-6.9-17-10.6-27-10.6-5 .1-10.3 1.2-15.2 3.6-3.7 1.8-7.1 4.2-10.1 7.4V2.8h-17.4v105.7h16.8v-9c5.6 6.8 14.6 11.2 25.4 11.1 11 0 20.9-4.1 28-11.2 7.2-7.2 11.5-17.4 11.5-29.7 0-12.6-4.7-22.8-12-29.7zm-5.4 30c-.1 6-2.2 12.1-6.3 16.6-4.1 4.5-10 7.6-17.9 7.6-7.1 0-12.8-2.8-16.9-7.2-4.1-4.4-6.4-10.5-6.4-17.1 0-6.6 2.4-12.6 6.6-16.9 4.2-4.4 10.1-7.1 17.2-7.1 6.8 0 12.7 2.7 17 7 4.2 4.3 6.8 10.3 6.8 17.1zM289.7 69.8c0 12.2 4.4 22.5 11.5 29.7 7.2 7.2 17.1 11.2 28 11.2 10.8 0 19.8-4.4 25.4-11.1v9h16.8V2.8H354v37.6c-3-3.2-6.5-5.6-10.1-7.4-5-2.4-10.3-3.5-15.2-3.6-9.9 0-19.7 3.7-27 10.6-7.3 6.9-12 17.1-12 29.8zm17.4.1c0-6.7 2.6-12.7 6.8-17.1 4.2-4.3 10.2-7 17-7 7.1 0 13 2.8 17.2 7.1 4.2 4.4 6.6 10.4 6.6 16.9 0 6.6-2.4 12.7-6.4 17.1-4.1 4.4-9.9 7.2-16.9 7.2-8 0-13.9-3.1-17.9-7.6-4.1-4.5-6.2-10.6-6.3-16.6z"/></g></svg>
    <img className={className} src={'/images/bg-logo.svg'} alt='Basil Ginger Logo' />
  )
}

Logo.propTypes = {
  className: PropTypes.string
}
