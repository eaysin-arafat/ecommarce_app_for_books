import { Fragment } from "react";

// eslint-disable-next-line react/prop-types
export const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);

  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <Fragment>
      {ratingArray.map((value, index) =>
        value ? (
          <i
            key={index}
            className="text-lg bi bi-star-fill text-yellow-500 mr-1"
          ></i>
        ) : (
          <i
            key={index}
            className="text-lg bi bi-star text-yellow-500 mr-1"
          ></i>
        )
      )}
    </Fragment>
  );
};
