/* Declare variables below to save the different sections (divs) of your story*/

let title = document.querySelector(".title");
let buttons= document.querySelector(".buttons");
let storypart1 = document.querySelector("story-opening");
let RommanButton = document.querySelector(".option-one");
let JohnCenaButton = document.querySelector(".option-two");
let storypart1yes = document.querySelector(".option-one-screen");
let storypart2yes = document.querySelector(".option-two-screen");
let optionOneEndDiv =document.querySelector(".option-one-end");
let optionTwoEndDiv =document.querySelector(".option-two-end");

RommanButton.onclick=function(){
storypart1yes.style.display="block";
    
storypart1.style.display="block";
};
storypart1yes.onclick=function(){
    optionOneEndDiv.style.display="block";
};


JohnCenaButton.onclick=function(){
storypart2yes.style.display="block";};
    storypart2yes.onclick=function(){
    optionTwoEndDiv.style.display="block";
};







