'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor' id='all' >
    <h1>Escreva o seu texto aqui:</h1>
    <textarea id='textarea' value={value} onChange={handleChange} autoFocus /><br />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
