/* ================== SHOW SOCIAL NETWORKS ================= */
const showSocial = (toggleCard, socialCard) => {
  const toggle = document.getElementById(toggleCard),
        social = document.getElementById(socialCard)

  toggle.addEventListener('click', () =>{
    if(social.classList.contains('animation')){
      social.classList.add('down-animation')

      setTimeout(() =>{
        social.classList.remove('down-animation')
      }, 1000)
    }
    
    social.classList.toggle('animation')
  })
}
showSocial('card-toggle', 'card-social')

const chk = document.getElementById('ri-contrast-2-line')
const card = document.getElementById('card')

chk.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')){
    chk.style.color = "white";
    card.style.backgroundColor = '#e5e5e5';
    card.style.color = 'black'
  }else{
    chk.style.color = "black"
    card.style.backgroundColor = "";
    card.style.color = "";
  }
})
