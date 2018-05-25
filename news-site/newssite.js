//let Shu = news.articles[0]
//let Russell = news.articles[1]
//let Heater = news.articles[2]
//let Crichton = news.articles[3]

let allArticles= news['articles']

//function getShuData(){
    //this.urlToImage= imgUrl
    //console.log(this.urlToImage)
    //document.getElementById("img").src= imgUrl
let media= document.getElementById("storyBoard")

function allInject(){
 media.innerhtml =''
 allArticles.forEach((article)=>{
    let story= `<li class="media">
    <a  href="${article.url}"><img class="imgZoom" src="${article.urlToImage}"></a>
    <div class="media-body">
    <h5 class="title">${article.title}</h5>
    <p class="author">by:<b> ${article.author}</b></p>
    ${article.description}</li>
    <li class="source" >${article.source["name"]}</li>
  
    
    `
media.innerHTML += story
 })
}
 
allInject()
