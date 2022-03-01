import renderNavBar from "./components/navbar.js"
import renderMainPage from "./components/mainpage.js"
import renderProjectPage from "./components/projectpage.js"

fetch("./components/data.json")
  .then((d) => d.json())
  .then((data) => {
    console.log(data);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nowproj = urlParams.get("project");
    const page = nowproj == null ? "main" : "project";
   // console.log(nowproj);
    if (page == "main") {
      renderNavBar(page);
      renderMainPage(data);
    } else {
      renderNavBar(page);

      //console.log("Paging", data.Pages);
      const filteredpage = data.Pages.find(
        (project) => project.name === nowproj
      );

     // console.log("filtered!", filteredpage);

      renderProjectPage(filteredpage);
    }
  });









 