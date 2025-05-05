import React from 'react'
import classes from './Journals.module.css'
const Journalcard = ({ title, body, travelPic, country, city, district }) => {
  return (
    <>
    <div className={classes.card}>
            <h2 className={classes.cardTitle}>{title}</h2>
            <p className={classes.cardDescription}>
              {body}
            </p>
            <img src={travelPic} alt="Preview" className={classes.cardImage} />
            <div className={classes.cardLocation}>{country}, {city}, {district} </div>
            <div className={classes.cardActions}>
              <button className={classes.actionButton}>Read</button>
              <button className={classes.actionButton}>View</button>
            </div>
          </div>
    </>
  )
}

export default Journalcard