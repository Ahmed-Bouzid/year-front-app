fetch("https://year-back-app.vercel.app/years")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    document.querySelector("#year").textContent = `${data.Year}`;
  });
