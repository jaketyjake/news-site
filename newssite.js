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
    <img class="mr-3" src="${article.urlToImage}" alt="Generic placeholder image">
    <div class="media-body">
    <h5 class="mt-0 mb-1">${article.title}</h5>
    ${article.description}
    <p> ${article.source["name"]}</p>
    
    `
    media.innerHTML += story
 })
}
 
allInject()
