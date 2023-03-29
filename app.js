const input_text = document.getElementById("input-text")
const output_text = document.getElementById("output-text")
const translate_btn = document.getElementById("translate-btn")

class Request{

    get(url){
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
const istek = new Request();
const textTranslate = () => {

    
}
translate_btn.addEventListener("click", function() {
    let url = `https://api.mymemory.translated.net/get?q=${input_text.value}&langpair=en|tr`
    
    istek.get(url)
    .then(response => {
        console.log(response)
        output_text.value = response.responseData.translatedText})
    .catch(err => console.log(err));
});



