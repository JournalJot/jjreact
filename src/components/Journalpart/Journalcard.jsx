import React from 'react'
import classes from './Journals.module.css'
const Journalcard = () => {
  return (
    <>
    <div className={classes.card}>
            <h2 className={classes.cardTitle}>Title</h2>
            <p className={classes.cardDescription}>
              I found my stay at blah blah, truly enticing and so and so, extension of words. This is a summary. (It could also be [No summary])
            </p>
            <img src="image1.jpg" alt="Preview" className={classes.cardImage} />
            <div className={classes.cardLocation}>North Virginia, americana, earth.</div>
            <div className={classes.cardActions}>
              <button className={classes.actionButton}>Read</button>
              <button className={classes.actionButton}>View</button>
            </div>
          </div>
    </>
  )
}

export default Journalcard