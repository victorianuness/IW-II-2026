function bd (){
    let data=[
        {id:1, nome:"John Wick", login:"wick", senha:"1234", email:"wick@ig.com"},//0
        {id:2, nome:"Victoria Nunes", login:"vic", senha:"2010", email:"victoria@ig.com"},//1
        {id:3, nome:"rachel green", login:"emma", senha:"2025", email:"rachelk@ig.com"}//2
             ]

    let json= JSON.stringify(data)

    localStorage.setItem("meubanco", json)
    
     return json
}

function adicionar(){
    let bd = JSON.parse(localStorage.getItem("meubanco"))
    let ids = Date.now()
    let nome = document.querySelector("#nome").value
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    let mail= document.querySelector("#email").value



    let cad =  {id:ids, nome:nome, login:lg, senha:sn, email:mail}

    bd.push(cad)

    let json= JSON.stringify(bd)

    localStorage.setItem("meubanco", json)

}
//const dados= bd()

//console.log(dados)