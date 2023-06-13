function login(){
    var nome1=document.getElementById("nome-1").value;
    var nome2=document.getElementById("nome-2").value;
    localStorage.setItem("nome1",nome1)
    localStorage.setItem("nome2",nome2)
    window.location="game_page.html"
}
