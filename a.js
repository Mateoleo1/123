function S(){
    navigator.mediaDevices.getUserMedia({ audio: true});    
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/x9LwB6nPW/model.json")


}