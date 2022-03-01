
export default function renderNewsSec(news) {
  
    return ` 
      <section id="news">
  
      <h2>Technical News</h2>
      <div class = "menu">
    
        <input id="search" type = "text" placeholder="Search News with title..."/>
        
      </div>
  
      <div class="news-list">
      ${renderNews(news)}
  </div>
  
      </section>
      
      `;
  }
  
 export function renderNews(news) {
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

  export function handleNewsFilter(data)
  {

    const search = document.querySelector("#search");
    console.log("search", search);
    search.addEventListener("input", function (event) {
      console.log(event.currentTarget.value);
      const value = event.target.value;
      
  
      const filtered = data.News.filter((d) => d.title.toLowerCase().includes(value.toLowerCase()));
      console.log(filtered);
  
      const newslist = document.querySelector(".news-list");
      newslist.innerHTML = renderNews(filtered);
  
  
  
  //handle radio
  
      
    });
  }