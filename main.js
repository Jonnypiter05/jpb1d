var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) { // é utilizada para converter a fala em texto //

 console.log(event); 

var Content = event.results[0][0].transcript; // content o texto convertido //

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}


function speak(){  // faz a fala e pega e chama o take selfie //
    var synth = window.speechSynthesis;

    speak_data = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie() //função utiizada para tirar a selfie //
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
