import React from "react";

const RATING = [
  {
    user: "Joe K.",
    title: "Ceo Finsweet",
    review:
      "I wanted to tell you how happy people in the Webflow community are with the library. People are really excited!! As a developer not speaking with the community or our clients, you may not hear this praise enough. Some people tell us their project wouldn’t have been possible without our library. Thank you!",
    rating: 5,
  },
  {
    user: "Raymond C.",
    title: "Ceo. Repairspots Inc",
    review:
      "They took the time to understand our unique challenges and came up with innovative solutions that have revolutionized the way we work. The software is user-friendly, robust, and highly customizable to our specific needs. The level of support and responsiveness we received throughout the development process and beyond has been outstanding.",
    rating: 5,
  },
  {
    user: "David Cook",
    title: "CanadaFacturing",
    review:
      "They have truly exceeded my expectations in every aspect. The software they developed for us has not only solved our business challenges but has also opened up new opportunities for growth. It is efficient, and seamlessly integrates with our existing systems.",
    rating: 5,
  },
  {
    user: "David Powell",
    title: "Dave Inc",
    review:
      ". From the initial consultation to the final implementation, the entire process was smooth and efficient. The team at Tomigear demonstrated exceptional technical expertise and a deep understanding of our business needs. ",
    rating: 5,
  },
];

const FIVE = new Array(5).fill(null);

const Reviews = () => {
  return (
    <div className="uk-grid uk-grid-small uk-child-width-1-4@m   uk-grid-match" uk-grid="">
      {RATING.map(({ user, review, rating }, idx) => (
        <div key={`${idx}_reviews`}>
          <div className="uk-card uk-card-default uk-padding uk-height-1-1 uk-border-rounded">
            <div>
              <a href="#" className="uk-icon-button" uk-icon="user"></a> <strong>{user}</strong>
            </div>
            <div>{review},</div>
            <div>
              {FIVE.map((val, idx) => (
                <span key={idx + "stars"} className="uk-text-warning" uk-icon="icon: star;"></span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
