fetch("year-back-app.vercel.app")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".year").textContent = `${data.Year}`;
  });
