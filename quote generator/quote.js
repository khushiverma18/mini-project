const quoteText=document.querySelector(".quote")
const authorName=document.querySelector(".author .name")
quoteBtn=document.querySelector('button')
soundbtn=document.querySelector(".sound")
copybtn=document.querySelector(".copy")
sharebtn=document.querySelector(".share")
let bool = 0
//function quote function
function randamquote(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerHTML='Loading Quote...'
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result)
        quoteText.innerHTML=result.content;
        authorName.innerHTML=result.author
       quoteBtn.innerHTML='New Quote'
       quoteBtn.classList.remove("loading")
    })
}
soundbtn.addEventListener("click",()=>{
    //the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`)
    speechSynthesis.speak(utterance);
})
copybtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerHTML);
    copybtn.classList.add("active")
    window.getSelection().removeAllRanges()
    setTimeout(function(){
        copybtn.classList.remove("active")
    },2500)
})
sharebtn.addEventListener("click",event => {

    // Fallback, Tries to use API only
    // if navigator.share function is
    // available
    if (navigator.share) {
        navigator.share({

            // Title that occurs over
            // web share dialog
            title: 'GeeksForGeeks',

            // URL to share
            url: 'https://geeksforgeeks.org'
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(err => {

            // Handle errors, if occurred
            console.log(
            "Error while using Web share API:");
            console.log(err);
        });
    } else {

        // Alerts user if API not available 
        alert("Browser doesn't support this API !");
    }
})

quoteBtn.addEventListener("click",randamquote);