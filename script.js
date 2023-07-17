var scrollLinks = document.getElementsByClassName("scroll-link");
for (var i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener("click", function() {
    var target = this.getAttribute("data-target");
    var section = document.getElementById(target);
    section.scrollIntoView({ behavior: "smooth" });
  });
}
const form=document.getElementById("form")
async function handleSendEmail(event){
  event.preventDefault();
  const fd = new FormData(this)
  const response = await fetch('https://formspree.io/f/xjvqkvpn',{
    method:'POST',
    body: fd,
    headers:{
      Accept: 'application/json'
    }
  })
  if(response.ok){
    this.reset()
    alert('Mensaje enviado')
  } else{
    alert('Error al enviar el mensaje')
  }
}
form.addEventListener('submit',handleSendEmail)
