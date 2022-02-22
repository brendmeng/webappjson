//Code for this week to ensure JSON data is loaded:
fetch("data.json")
  .then((d) => d.json())
  .then((data) => {
    console.log(data);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nowproj = urlParams.get("project");
    const page = nowproj == null ? "main" : "project";
    console.log(nowproj);
    if (page == "main") {
      renderNavBar(page);
      renderMainPage(data);
    } else {
      renderNavBar(page);

      console.log("Paging", data.Pages);
      const filteredpage = data.Pages.find(
        (project) => project.name === nowproj
      );

      console.log("filtered!", filteredpage);

      renderProjectPage(filteredpage);
    }
  });

function renderNavBar(page) {
  const nav = document.querySelector("nav");

  nav.innerHTML =
    page === "main"
      ? `
  <ul>
 <li>
   <a href="#about">About</a>
 </li>
 <li><a href="#news">News</a></li>
 <li><a href="#projects">Projects</a></li>
</ul>
 `
      : `<li id='return'>
<a href=".#projects"><i class="fas fa-undo"></i> Go Back</a>
</li>`;
}

function renderAbout(about, contact) {
  console.log("IMAGE URL", about.photo);
  return `
    <section id="about">
    <h2 id = "name">${about.name}</h2>
    <div class="row">
      <div class="col-6">
        <img 
          src=${about.photo}
          class="profile"
          alt="Photo of Brend"
          style="max-width: 80%"
        />
      </div>
      
      <div class="col-6" id="aboutme">
      <h4 style = "text-align: center;";> About Me: </h4>
        <p>
        ${about.longdesc}
          <a href=${about.dog}> dog. </a>
        </p>
      </div>
    </div>

    <div class="contact">
      <strong> ${about.title}</strong>
      <br />
      mengb@bc.edu
      <br />
      ${about.address}

      <ul id="links">
        <a href=${contact.Resume} target="_blank"><i class="fas fa-user-tie"></i> Resume</a>

        |
        <a href="${contact.Twitter} target="_blank"><i class="fab fa-twitter-square"></i></a>
        |
        <a href=${contact.Linkedin} target="_blank"
          > <i class="fab fa-linkedin"></i></a >
        |
        <a href=${contact.Github} target="_blank"> <i class="fab fa-github"></i> </a>
      </ul>
    </div>
  </section>
   
    `;
}

function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = `
        ${renderNavBar("main", Object.keys(data))}
        ${renderAbout(data.About, data.Contact)}
        ${renderNewsSec(data.News)}
        ${renderNews(data.News)}
        ${renderProjects(data.Projects)}
        ${renderthanks(data.About)}


    `;
  const search = document.querySelector("#search");
  console.log("search", search);
  search.addEventListener("input", function (event) {
    console.log(event.currentTarget.value);
    const value = event.target.value;
    //filter

    const filtered = data.Projects.filter((d) => d.title.includes(value));
    console.log(filtered);

    const projectlist = document.querySelector(".project-list");
    projectlist.innerHTML = renderProjectItems(filtered);
  });
}


//for later
//<select>
//<option value = "course">Course</option>
//<option value = "course">Personal</option>
//</select> 

function renderProjects(projects) {
  return `
    <section id="projects">
    <h2>Projects</h2>
    <div class = "menu">
    <label for="psearch">Search:</label>
      <input id="search" type = "text" size = "20" />
      
    </div>
    <div class="project-list">
    ${renderProjectItems(projects)}
</div>
</section>

    `;
}

function renderNewsSec(news) {
  return ` 
    <section id="news">

    <h2>Technical News</h2>

    </section>
    
    `;
}

function renderNews(news) {
  return news
    .map(
      (d) => `
    <div class="row">
      <div class="col-8">
        <!-- profile image -->
       <strong>${d.title} </strong> 
      </div>

      <div class="col-4" >${d.date}</div>
    </div>

  `
    )
    .join("");
}
function renderthanks() {
    return `
    <div>
    <p class="animate__animated animate__infinite animate__pulse animate__delay-2s" id="thanks">
      Thanks for visiting!
    </p>
  </div>
    `
    
    
}



function renderProjectItems(projects) {
  return projects
    .map(
      (d) =>
        `
     
      <article >

      <div class="row">
        <div class="col-8">
          <!-- profile image -->
          <div class="desc">
            <strong class="ptitle" > ${d.title}</strong> ${d.description}
          </div>
          
          ${d.tags.join(" ")}


</div>

        <div class="col-4" >  
          <i>${d.source} <br> ${d.period} </i>
          <br>
          ${d.authors}
        </div>
      </div>

      <div class="row">
        <div class="col-8" id=policecol>

          <img
          id="police"
          src=${d.teaser}
          style="max-width: 50%"/>
        
        </div>
        <div class="col-4">  
          <ul class="linkgroup">
            <li> <a href="?project=${
              d.id
            }" ><i class="fas fa-info"></i> About the project</a></li>
            <li> <a href=${d.page} target="_blank"
              ><i class="far fa-file"></i> Project Page</a></li>
            <li><a href=${
              d.vid
            } target="_blank"><i class="fas fa-video"></i> Demo</a></li>

          </ul>
        
         
        </div>
      </div>
      </article>
      
      <br id = 'covidsec'/>
      <br>

      <article >

  `
    )
    .join("");
}

function renderProjectPage(project) {
  console.log(project, "PROJECT!");
  const main = document.querySelector("main");
  renderNavBar(project);
  main.innerHTML = `
  ${renderProjectInfo(project)}
  ${renderProjectDesign(project)}
  ${renderProjectProcess(project)}
  ${renderProjectConclusion(project)}`
}



function renderProjectInfo(project)
{
const main = document.querySelector("main");
return `

    <div class="info">
    
    <h1>${project.maintitle}</h1>
      <img ${project.preview} />
      <img ${project.preview2}/>

    <p>
<br> Members: ${project.members}
    </p>

    <li> <a href=${project.video} target="_blank"><i class="fas fa-video"></i> Video Demo</a></li>
    
    <h2>
      Project Information
    </h2>
    <h3>
      Motivations
    </h3>
    <p>
     ${project.motivation}
      

      <ul>
        
            <li>
         <a ${project.link1}</a>
        
          <li>
            <a ${project.link2}
            </a>
        </li>
        
        <li>
          <a ${project.link3}
          </a>
        </li>
        
      </ul>
    </p>
    
    <p>
    ${project.want}
    `
}


function renderProjectDesign(project)
{
    return `
     
    <h3>Visualization Design and Encoding</h3>
    <p> ${project.todo}</p>

        <li> ${project.li1} </li>
        <br>
        <li> ${project.li2} </li>
        
 <h3> Interactions and Animation Functions</h3>


      The interactions we incorporated were...
      
      <br>
      <br>
    <p> 
    ${project.interact}
    </p>

    
    
    <p>
      The takeaways that these interactions helped highlight were...
      <br>
      <br>
      ${project.takeaway} 
       <br>
    </p>

    `

}
   


function renderProjectProcess(project)
{
    return `
    <h2> The Process </h2>
   
    <p>
    ${project.process1} 
    
    <br>
      <image id="img2" src="${project.img2}"
         ></image>
     
    <br>  
    <br>

    </p>
      
      <p>
        
      ${project.process2}
      </p>
    
`
}

function renderProjectConclusion(project)
{
    return `
    <h3>
    Struggles and Lessons
  </h3>
  <p>

      <li> ${project.struggle1}   </li>
      <br>  
  
      <li> ${project.struggle2}   </li>
      <br>  
      <li> ${project.struggle3}   </li>

      </p>
   <br>

  Final Thoughts...
  <p> <i>${project.final} <i> </p>
   
  </div>
</div>
  `


}
      
 