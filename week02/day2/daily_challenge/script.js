let sentence = "the air in the room is not so bad";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
let replace = sentence.replace("not so bad","good");

if (wordNot < wordBad){
    console.log(replace)
}else{
    console.log(sentence)
}
