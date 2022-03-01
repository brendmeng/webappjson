
import renderNavBar from './navbar.js';
import renderAbout from './about.js';
import renderNewsSec, {handleNewsFilter} from './news.js';
import renderProjects, {handleProjectFilter} from './project.js';
import {renderthanks} from './thanks.js';





export default function renderMainPage(data) {
    const main = document.querySelector("main");
    main.innerHTML = `
          ${renderNavBar("main", Object.keys(data))}
          ${renderAbout(data.About, data.Contact)}
          ${renderNewsSec(data.News)}
          ${renderProjects(data.Projects)}
          ${renderthanks(data.About)}
       

      `;
  
      //handle search
      handleNewsFilter(data);
      handleProjectFilter(data);


      
   
  }