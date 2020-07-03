import React, { useEffect, useState, useRef } from 'react';
import { saveRating } from '../../actions'
import { useDispatch } from 'react-redux';

import './style.css';

const Rating = React.memo((props) => {

    const dispatch = useDispatch();
    const [curRating, setUserrating] = useState(props.userRating[props.user]);
    const containerRef = useRef(null);


    useEffect(() => {
        setRating(curRating)
    })


    const hoverHandler = ev => {
        const stars = ev.target.parentElement.getElementsByClassName('star');
        console.log('star', stars);
        const hoverValue = ev.target.dataset.value;
        Array.from(stars).forEach(star => {
            star.style.color = hoverValue >= star.dataset.value ? 'yellow' : 'gray';
        });
    };

    const leaveHandler = ev => {
        const stars = ev.target.parentElement.getElementsByClassName('star');
        Array.from(stars).forEach(star => {
            star.style.color = curRating >= star.dataset.value ? 'yellow' : 'gray';;
        });
    }

    const starClickHandler = ev => {
        let rating = ev.target.dataset.value;
        setUserrating(rating);
        const data = {
            rating,
            user: props.user,
            account: props.account,
            apps: props.apps,
            selectedApp: props.selectedApp
        }
        dispatch(saveRating(data));
    };


    const setRating = ev => {
        const stars = containerRef.current.parentElement.getElementsByClassName('star');
        Array.from(stars).forEach(star => {
        star.style.color =
        curRating >= star.dataset.value ? 'yellow' : 'gray';
        });
    };

    return (
        <div className="rating">
            {[...Array(props.noOfStars).keys()].map(n => {
                return (
                    <span
                        className="star"
                        ref={containerRef}
                        key={n + 1}
                        data-value={n + 1}
                        onMouseLeave={leaveHandler}
                        onMouseOver={hoverHandler}
                        onClick={starClickHandler}
                    >
                        &#9733;
                    </span>
                );
            })}
        </div>

    )
});

export default Rating;
