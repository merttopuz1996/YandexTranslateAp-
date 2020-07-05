/*

*/

function Translate(word,language){
    this.apikey = "trnsl.1.1.20200424T211450Z.1f4c24d351428617.a8d9b47c5e877b1767ee8ff163231c1eec56d668";
    this.word = word;
   this.language = language;
 
//XHR object

this.xhr = new XMLHttpRequest();


}
Translate.prototype.translateWord = function(callback){
  //AJAX işlemleri
   const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`; 

   this.xhr.open("GET",endpoint);
  this.xhr.onload =()=>{
     if(this.xhr.status = 200){
         //how are you ?
         const json =JSON.parse(this.xhr.responseText);
         const text =json.text[0];
         //callback ile app js ye döndürmek için
         //hata yoksa null
         callback(null,text);
        // console.log(JSON.parse(this.xhr.responseText).text[0]);
     }
     else{
     callback("hata var",null);

}



}
     




   this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord,newLanguage){

    this.word = newWord;
    this.language = newLanguage;
}
