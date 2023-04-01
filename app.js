const input_text = document.getElementById("input-text")
const output_text = document.getElementById("output-text")
const translate_btn = document.getElementById("translate-btn")
const text_from = document.getElementById("text-from");
const text_to = document.getElementById("text-to");
const myKey = config.my_key;

class Request{

    get(url, options){
        return new Promise((resolve,reject) => {
            fetch(url, options)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
const istek = new Request();
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': myKey,
		'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
	}
};

translate_btn.addEventListener("click", function() {
    let url = `https://nlp-translation.p.rapidapi.com/v1/translate?text=${input_text.value}&to=${text_to.value}&from=${text_from.value}`

    istek.get(url, options)
    .then(response => {
        const translated_text = response.translated_text
        output_text.value = Object.values(translated_text);
     } )
    .catch(err => console.log(err));
});



