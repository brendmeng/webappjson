

 export default function renderProjects(projects) {
    console.log('wtf')
    return `
      <section id="projects">
      <h2>Projects</h2>
     
      <div class="filter">
      <label>
        <input type="radio" name="filter" value="all" checked>
      All
    </label>
      <label>
        <input type="radio" name="filter" value="Boston College">
      Boston College
      </label>
    <label>
    <input type="radio" name="filter" value="Personal">
    Personal
  </label>
  <label>
  <input type="radio" name="filter" value="D3">
  D3
  </label>
  <label>
  <input type="radio" name="filter" value="Vega-lite">
  Vega-lite
  </label>
  <label>
  <input type="radio" name="filter" value="HTML-CSS">
  HTML-CSS
  </label>
  <label>
  <input type="radio" name="filter" value="Python-Django">
  Python-Django
  </label>
  
  </div>
      <div class="project-list">
      ${renderProjectItems(projects)}
  </div>
  </section>
  
      `;
  }
  



export function renderProjectItems(projects) {
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

  export function handleProjectFilter(data){

  const buttons = document.querySelectorAll('.filter input[name="filter"]');
   
  buttons.forEach(cond=>cond.addEventListener('change', function(event){
    const category = event.target.value

    console.log(category)
    if (category!="all")
    {
      const filteredradio = data.Projects.filter((d) => d.tag.includes(category));
      console.log('filteredradio', filteredradio)
    const projectlist = document.querySelector(".project-list");
    projectlist.innerHTML = renderProjectItems(filteredradio);
    }
    else{
      const filteredradio = data.Projects
      const projectlist = document.querySelector(".project-list");
      projectlist.innerHTML = renderProjectItems(filteredradio);

    }

   
  }))

  }
