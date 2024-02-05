import React from "react";

function Article({ title, date, preview, minutes }) {
  const formattedDate = date ? date : "January 1, 1970";

  const renderReadingTime = (minutes) => {
    const coffeeCup = "☕️";
    const bentoBox = "🍱";

    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return `${coffeeCup.repeat(coffeeCups)} ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return `${bentoBox.repeat(bentoBoxes)} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{renderReadingTime(minutes)}</p>
    </article>
  );
}

export default Article;
