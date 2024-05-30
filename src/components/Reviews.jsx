import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Reviews() {
    const {t} = useTranslation();
    const [reviews, setReviews] = useState([
        {
            id: 1,
            username: "John Miles Morales",
            email: "john@gmail.com",
            reviewTitle: "Лучшие окна в мире",
            userimg: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
            reviewDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod mollitia amet nemo sint repellat, labore obcaecati quisquam in repudiandae minima nihil praesentium delectus neque laboriosam laborum eveniet sit eligendi?"
        },
        {
            id: 2,
            username: "John Miles Morales",
            email: "john@gmail.com",
            reviewTitle: "Лучшие окна в мире",
            userimg: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
            reviewDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod mollitia amet nemo sint repellat, labore obcaecati quisquam in repudiandae minima nihil praesentium delectus neque laboriosam laborum eveniet sit eligendi?"
        },
        {
            id: 3,
            username: "John Miles Morales",
            email: "john@gmail.com",
            reviewTitle: "Лучшие окна в мире",
            userimg: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
            reviewDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod mollitia amet nemo sint repellat, labore obcaecati quisquam in repudiandae minima nihil praesentium delectus neque laboriosam laborum eveniet sit eligendi?"
        }
    ]);


  return (
    <div className='review-block'>
        <div className="review-title">{t("review-block-title")}</div>
        <div className="review-cards">
            {reviews.map((review) => (
                <div className='review-card'>
                    <div className="userinfo">
                        {/* <img width={50} height={50} className="review-card-userimg" src={review.userimg} alt='profile'/> */}
                        <div className="review-card-username">{review.username}</div>
                        <p>miles.morales@gmail.com</p>
                    </div>
                    <div className="reviewcontent">
                        <div className="review-card-title">{review.reviewTitle}</div>
                        <div className="review-card-description">{review.reviewDescription}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews