let bt = document.querySelector('#bto_add')
      
bt.addEventListener("click", ()=>{
 
  if(document.querySelector('.desa').style.display == 'none'){
    document.querySelector('.desa').style.display = 'block'
  }else{
    document.querySelector('.desa').style.display = 'none'
  }



})

let btmat = document.querySelector('.mat')

btmat.addEventListener("click", ()=>{
  if(document.querySelector('.alet').style.display == 'none'){
    document.querySelector('.alet').style.display = 'block'
  }else{
    document.querySelector('.alet').style.display = 'none'
  }
})

