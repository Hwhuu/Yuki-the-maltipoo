let translated = false;

document.getElementById("translate").addEventListener("click", function() { 
  introduction = document.getElementById("intro");
  aboutme = document.getElementById("about");
  if(translated) { 
    introduction.innerHTML = "Woof woof woof woof<br>"
    aboutme.innerHTML = "Woof woof woof woof woof WOOF woof WOof Woof Woof woof woof WOOOOF! Woof woof woof woof woof WOOF woof WOof Woof Woof woof woof Woof. Woof woof woof woof woof WOOF woof WOof Woof Woof woof woof Woooof. Woof woof woof woof woof WOOF woof WOof Woof Woof woof woof WOOOOF!!"
    translated = false;
  }
  else { 
    introduction.innerHTML = "My name is Yuki!"
    aboutme.innerHTML = "I was born on October 1st, 2018. I am currently 4 years old. I am a maltipoo (aka maltese and poodle mix). When it's nice out, I love to go on walks in the neighborhood with mom or sister. When I'm not out and about, you can usually find me napping in my favorite spot on the couch or cuddling with my favorite human. I have also mastered the art of a good puppy eye, my humans can't resist my charm and always gives me treats. Please take a look at my favorite doggy recipes or more fun pictures of me. Woof!"
    translated = true;
  }
})

