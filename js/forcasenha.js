function senha() {
    var senha =  document.getElementById('senhaForca').value;
    var forca = 1;
   if((senha.length >=3) && (senha.length <=5)) {
       forca += 10;
   }else if  (senha.length > 5){
       forca += 25;
   }
if((senha.length >= 5) && (senha.match(/[a-z]+/))){
    forca += 10;
}

if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
    forca += 20;
}

if((senha.length >= 6) && (senha.match(/[!@#$%^&*()-+]+/))){
    forca += 25;
}

monstrarForca(forca);
   }

   function monstrarForca(forca) {
       document.getElementById("ImpForcaSenha").innerHTML = "Força: " + forca;

    if (forca < 30) {
        document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ff0000'>Fraca</span>"; 
    }else if ((forca >= 30) && (forca < 50)){
        document.getElementById("erroSenhaForca").innerHTML = "<span style='color:#ffff00'>Média</span>";
    }else if ((forca >= 50) && (forca < 70 )){
    document.getElementById("erroSenhaForca").innerHTML = "<span style='color:#ffff00'>Forte</span>";
    }else if ((forca >= 70) && (forca < 100)){
    document.getElementById("erroSenhaForca").innerHTML = "<span style='color:#008000'>Excelente</span>", alert ("Parabéns! Você criou uma senha segura");
  
    
}
   }