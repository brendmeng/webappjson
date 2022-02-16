
//Code for this week to ensure JSON data is loaded:
fetch("data.json").then(d=>d.json()).then(data=> {
    console.log( data)

     const filtered = (data.Projects.find(Projects=>Projects.id=="Police"))



//     document.querySelector("main").innerHTML=`
//     <h1>Data successfully loaded!</h1>
//     <p>
//       Name: <strong>${data.About.name}</strong><br>
//       Number of Projects: <strong>${data.Projects.length}</strong> <br>
//       Link Test: <a href="${data.Contact.Resume}" target="_blank"><i class="fas fa-user-tie"></i> Resume</a> <br>
//       Image Test: <a href="${data.Contact.Linkedin}" target="_blank"
//       > <i class="fab fa-linkedin"></i>Linkedin</a >
//       <img
//       id="covid"
//       src="${data.About.dog}"
//       alt="image of covid project"
//       /> <br>

//       <img 
//       src="${filtered.teaser}"
//       class="profile"
//       alt="Photo of Brend"
//       style="max-width: 80%"
//     />
   

//     </p>  
// `
console.log(data.Projects[0].source)

console.log(filtered)
console.log(filtered.tags)

    
    

    renderNavBar()
});

//CODE FOR NEXT WEEK LAB, can ignore. Thank you!

//copy html

function renderNavBar(){
    const nav = document.querySelector("nav");

    nav.innerHTML = `
    
    
    `
}

//passing about data to renderabout function

function renderMainPage(data)
{
    const main = document.querySelector("main");
  //  main.innterHTML = renderAbout(data.about);
  main.innerHTML += renderProjects(data.projects);
}

//about = JSON, passed from renderMainPage


function renderProjects(projects)
{
    return `Projects
    ${projects.map(project =>renderProjects(project)).join("")};
    const page = projectID ==null?"main"
    `
}
function renderAbout(about)
{ 
    return `

    ${about.name}
    `

}