import renderNavBar from './navbar.js';
export default function renderProjectPage(project) {
    console.log(project, "PROJECT!");
    const main = document.querySelector("main");
    renderNavBar(project);
    main.innerHTML = `
    ${renderProjectInfo(project)}
    ${renderProjectDesign(project)}
    ${renderProjectProcess(project)}
    ${renderProjectConclusion(project)}`
  }
  
  
  
  export function renderProjectInfo(project)
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
  
  
  export function renderProjectDesign(project)
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
     
  
  
 export function renderProjectProcess(project)
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
  
  export function renderProjectConclusion(project)
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
        