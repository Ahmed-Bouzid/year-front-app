fetch("https://year-back-app.vercel.app/years")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".year").textContent = `${data.Year}`;
  });

document.querySelector("#year").textContent = `${data.Year}`;
