import React from 'react'
import { Box,Link, Typography, List, Grid, ListItem,ListItemText,} from '@mui/material'
import prof from "../Images/user-octagon-svgrepo-com.png"

const Reviews = () => {
    const reviews = [
    {
      avatar: "IMG/avatar1.png",
      name: "Lilian",
      comment:
        "Journal Jot is fantastic! Simple, intuitive interface. Loved mapping my trips and adding photos. Easy to share with friends, too. Highly recommend for any traveler wanting to document their adventures.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      avatar: "IMG/avatar2.png",
      name: "Jessica",
      comment:
        "Absolutely loved Journal Jot! Effortlessly captured my journey with its intuitive design. The map integration is brilliant, and sharing was a breeze. A fantastic way to relive my travels. Five stars!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      avatar: "IMG/avatar3.png",
      name: "Bob",
      comment:
        "As a frequent traveler, Journal Jot streamlined my record-keeping. Easy photo uploads, and the map feature is top-notch. Finally, a journal that keeps up! Simple, practical, and a great way to revisit adventures.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <>
    <Box
      component="section"
      className="reviews"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        padding: "30px",
      }}
    >
      {reviews.map((review, index) => (
        <Box
          key={index}
          className="Cmtblk"
          sx={{
            backgroundColor: "#4A2102",
            color: "white",
            height: "auto",
            width: "300px",
            padding: "20px",
            marginTop: "30px",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* User Section */}
          <Box
            className="user"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={review.avatar}
              alt={`user ${prof}`}
              loading="lazy"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {review.name}
            </Typography>
          </Box>

          {/* Comment Section */}
          <Box className="comment" sx={{ marginTop: "20px" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "16px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              {review.comment}
            </Typography>
          </Box>

          {/* Rating Section */}
          <Box
            className="rating"
            sx={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                color: "gold",
              }}
            >
              {review.rating}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
    </>
  )
}

export default Reviews