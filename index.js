const btn = document.querySelectorAll('.btn');
const manu = document.querySelector('.manue');
const allSections = document.querySelectorAll('.sec');

function myFunction(){
for(i=0; i<btn.length; i++){
    btn[i].addEventListener("click" , (e) =>{
        const currentBtn = document.querySelector('.active-btn');
        currentBtn.classList.remove('active-btn');
        e.currentTarget.classList += ' active-btn';
    })
}


manu.addEventListener('click', function(e){
  
  if(e.target.classList.contains('icon')){
    var id = e.target.dataset.id;
    
  }
  else if(e.target.tagName === 'I'){
    var id = e.target.closest('.icon').dataset.id;
    
  }
  
    if(id){
      allSections.forEach((secton)=>{
        secton.classList.remove('active-sec');
    })
    const element = document.getElementById(id);
    element.classList.add('active-sec');
    }
  
})
    

    


}

myFunction();
