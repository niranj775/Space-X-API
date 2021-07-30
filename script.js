const url = "https://api.spacexdata.com/v4/launches/";
async function getJSON(url) {
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

getJSON(url);

function displayData(data) {
  let count = 1;
  data.forEach((element) => {
    let col = document.createElement("div");
    col.setAttribute(
      "class",
      "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  mb-3"
    );

    let card = document.createElement("div");
    card.setAttribute("class", "card m-3");
    card.setAttribute("style", "width: 18rem");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute(
      "class",
      "card-title bg-dark text-light d-flex justify-content-center"
    );
    cardTitle.innerHTML = element.name;

    let cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text d-flex justify-content-center");
    cardText.innerHTML = `Status: ${element.success ? "Success" : "Failure"}`;

    let img = document.createElement("img");

    img.setAttribute("src", element.links.patch.small);
    img.setAttribute("alt", "Rocket Image");

    cardBody.append(cardTitle, cardText, img);
    card.append(cardBody);
    col.append(card);
    let launchData = document.getElementById("launchdata");
    launchData.append(col);
  });
}

// function displayData(data) {
//   let count = 0,
//     success = 0,
//     failure = 0;
//   data.forEach((element) => {
//     if (element.upcoming == false) {
//       count++;
//     }
//     if (element.success == true) {
//       success++;
//     }
//     if (element.success == false) {
//       failure++;
//     }
//   });

//   let cardText = document.createElement("p");
//   cardText.setAttribute("class", "card-text font-weight-lighter mt-2");
//   cardText.innerHTML = `Total Lunches: ${count}. <br> Planned Launch: ${
//     data.length - count
//   }. <br> Successful Launches: ${success}. <br> Failed Launches: ${failure}.`;

//   let cardTitle = document.getElementById("cardtitle");
//   cardTitle.append(cardText);
// }
