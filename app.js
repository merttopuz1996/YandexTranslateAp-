/*
 en altta app.js olcak çünkü diğer 2 dosyayı bunda kullanıcaz
Prototype,Ajax,Callback kullanıcaz
 */


 eventListeners();




 function eventListeners(){
  document.getElementById("translate-form").addEventListener("submit",translateWord);
  //change olduğunda bu fonk çalıştır
  document.getElementById("language").onchange = function(){
   //arayüz işlemleri için diğer derste şimdi bir translate objesi
//  console.log("event");//hangisinin seçiliğini anlıcaz
   ui.changeUI();
   
  }

    
 }
 const ui = new UI();
 const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
 

 
 function translateWord(e){
     //inputtan ve selecten değer almak için
   translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

   translate.translateWord(function(err,response){
   if(err){

    //hata
    console.log(err);
   }
   else{

   ui.displayTranslate(response);

   }

   });


//sayfanın yenilenmesini engellemekk için
  e.preventDefault();
 
 }