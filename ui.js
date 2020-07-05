function UI(){

 this.outputImage = document.getElementById("outputImage");
 this.outputLanguage = document.getElementById("outputLanguage");
 this.outputWord = document.getElementById("outputWord");
 this.languageList = document.getElementById("language");


}
UI.prototype.changeUI=function(){
  //arayüz change
  //şuanki language neyse resim deişsin ona göre dinamik olarak
    this.outputImage.src =`images/${this.languageList.value}.png`
  //text değerlerini almak için
  //!!!!texti alma
  this.outputLanguage.innerHTML=this.languageList.options[this.languageList.selectedIndex].textContent;
//   console.log(this.languageList.options[this.languageList.selectedIndex].textContent);
  //hangisi seçilmiş?
//   console.log(this.languageList.selectedIndex);
  //indexi gelicek yukaruda içine yazıcaz içindeki değeri alıcaz textcontent ile
  //inner html imiz ortaya çık
  //artık hangisi seçilmişte  gelmiş olucak 
}
UI.prototype.displayTranslate = function(word){

    this.outputWord.textContent = word;
    
    }
    