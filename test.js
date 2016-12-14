var keyboard= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
//var stecker= "ZPHNMSWCIYTQEDOBLRFKUVGXJA".toLowerCase().split('');
var stecker= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
var rotorRTemp="ESOVPZJAYQUIRHXLNFTGKDCMWB".toLowerCase().split('');
var rotorMTemp="BDFHJLCPRTXVZNYEIWGAKMUSQO".toLowerCase().split('');
var rotorLTemp="EKMFLGDQVZNTOWYHXUSPAIBRCJ".toLowerCase().split('');
var reflector="YRUHQSLDPXNGOKMIEBFZCWVJAT".toLowerCase().split('');
var rotorR =calcDistance(rotorRTemp);
var rotorM =calcDistance(rotorMTemp);
var rotorL=calcDistance(rotorLTemp);
var notchR="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
var notchM="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
var notchL="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
var countR=0;
var countM=0;
var countL=0;
var restricciongiro=0;

// Función para restringir el texto de entrada solo al abecedario en MAYUSC o minusc
    function inputclave(){
       claRR=document.getElementById("ClaveRR").value.toLowerCase();     
       claRM=document.getElementById("ClaveRM").value.toLowerCase();   
       claRL=document.getElementById("ClaveRL").value.toLowerCase(); 
        
       if(keyboard.indexOf(claRR)!=-1 && keyboard.indexOf(claRM)!=-1 && keyboard.indexOf(claRL)!=-1 && document.getElementById("txt").value=="" ){
           
           rotorR =calcDistance(rotorRTemp);
           rotorM =calcDistance(rotorMTemp);
           rotorL =calcDistance(rotorLTemp);

           console.log("Posic R", notchR)
           console.log("Posic M", notchM)
           console.log("Posic L ",notchL)
           
           notchR=clave(claRR,notchR);           
           notchM=clave(claRM,notchM);  
           notchL=clave(claRL,notchL);  
           
           console.log("Clave RR ", claRR)
           console.log("Clave RM ", claRM)
           console.log("Clave RL ", claRL)
           
           console.log("Posic R", notchR)
           console.log("Posic M", notchM)
           console.log("Posic L ",notchL)
           
           
           rotorR=clave(claRR,rotorR);
           rotorM=clave(claRM,rotorM);
           rotorL=clave(claRL,rotorL);
           
           console.log("Rotor R", rotorR)
           console.log("Rotor M", rotorM)
           console.log("Rotor L ",rotorL)
           
    $("#ActualRR").val(notchR[0].toUpperCase());
    $("#ActualRM").val(notchM[0].toUpperCase());
    $("#ActualRL").val(notchL[0].toUpperCase());
           
           alert("Clave cargada exitosamente "+claRL.toUpperCase()+" "+claRM.toUpperCase()+" "+claRR.toUpperCase())
           
            }else{ 
                alert("Por favor ingresa solo letras o se reinicio debido a que cargo una clave nueva con texto en la caja de texto izquierda")
                return reiniciar()
                                                  
                 }
          }

function clave(cla,vector){
   n=keyboard.indexOf(cla);
    console.log("Esto vale n: ",n)
    console.log("Esto es el vector de entrada: ",vector)
    for(i=1;i<n+1;i++){
        vector=arrayRotate(vector)   
        console.log("Esto vale i: ",i)
    }
    console.log("Esto es el vector de SALIDA: ",vector)    
    return vector
        
    }


function arrayRotate(arr){
	arr.push(arr.shift());
	return arr;
}

function calcDistance(arr){
	r=[];
	for(i=0;i<arr.length;i++){
		pos=keyboard.indexOf(arr[i])+1;
		if(pos < i+1){
			r.push(26+pos-(i+1));
		}else{
			r.push(pos-(i+1));
		}
	}
	
	return r;
}

function getCharRotorRigth(c,arr){
	mod = (1+keyboard.indexOf(c)+arr[keyboard.indexOf(c)])%26;
	if(mod == 0)
		mod=26
	return mod-1;
}

function getCharRotorLeft(s,arr){
	for(i=0;i<26;i++){
		mod = (1+i+arr[i])%26;
		if(mod == 0)
			mod=26
		if(keyboard[mod-1]==s)
			break;
	}
	return i;
}



// Función para limpiar los campos de entrada y salida de texto plano/cifrado
     function reiniciar(){ 
       document.getElementById("txt").value ="";
       document.getElementById("txtvisual").value ="";
       document.getElementById("encrypt").value ="";
       rotorR =calcDistance(rotorRTemp);
       rotorM =calcDistance(rotorMTemp);
       rotorL =calcDistance(rotorLTemp);
       countR=0; countM=0; countL=0;
       document.getElementById("ClaveRR").value="A";
       document.getElementById("ClaveRM").value="A";
       document.getElementById("ClaveRL").value="A";
    $("#ActualRR").val(keyboard[countR].toUpperCase());
    $("#ActualRM").val(keyboard[countM].toUpperCase());
    $("#ActualRL").val(keyboard[countL].toUpperCase()); 
    
    document.getElementById("stecker").value ="";
    
    notchR="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
    notchM="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
    notchL="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
    restricciongiro=0;   
         
    stecker= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
       document.getElementById("tablero").innerHTML= ""; 
       document.getElementById("stecker").innerHTML= "";
       document.getElementById("conexion").innerHTML= "";
         }


// Función para restringir el texto de entrada solo al abecedario en MAYUSC o minusc
    function ValidaEntrada(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key);
       letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
       
       if(letras.indexOf(tecla)!=-1){
         
	//a=$("#txt").val().substr($("#txt").val().length - 1);
    a=tecla.toLowerCase();           
    console.log("Esto es la entrada: ",a) 
    console.log("Esto es el stecker: ",stecker)
    console.log("Esto es el keyboard.indexOf(a): ",keyboard.indexOf(a))
    console.log("Esto es el stecker[keyboard.indexOf(a)]: ",stecker[keyboard.indexOf(a)])
    
	charRR=keyboard[getCharRotorRigth(stecker[keyboard.indexOf(a)],rotorR)];
           console.log("Esto despues del primer rotor: ",charRR)
           console.log("el cual será la entrada del segundo rotor") 
	charMR=keyboard[getCharRotorRigth(charRR,rotorM)];
           console.log("Esto despues del segundo rotor: ",charMR)
           console.log("el cual será la entrada del tercer rotor") 
	charLR=keyboard[getCharRotorRigth(charMR,rotorL)];
           console.log("Esto despues del tercer rotor: ",charMR)
           console.log("el cual será la entrada del reflector") 
	charRef=reflector[keyboard.indexOf(charLR)];
           console.log("Esto despues del reflector: ",charRef)
           console.log("AHORA LA SEÑAL ESTA DE REGRESO HACIA LOS ROTORES")
	charLL=keyboard[getCharRotorLeft(charRef,rotorL)];
           console.log("RETORNO: Esto despues del tercer rotor: ",charLL)
           console.log("el cual será la entrada del segundo rotor") 
	charML=keyboard[getCharRotorLeft(charLL,rotorM)];
           console.log("RETORNO: Esto despues del segundo rotor: ",charML)
           console.log("el cual será la entrada del segundo rotor") 
	charRL=keyboard[getCharRotorLeft(charML,rotorR)];
           console.log("RETORNO: Esto despues del primer rotor: ",charML)
           console.log("el cual será la entrada stecker") 
	b=$("#encrypt").val();
    console.log("Esto es el valor que va como ENCRIPTADO: ",b)
    tx=$("#txtvisual").val();
    $("#encrypt").val(b.toUpperCase()+keyboard[stecker.indexOf(charRL)].toUpperCase());
    $("#txt").val("");
    $("#txtvisual").val(tx.toUpperCase()+a.toUpperCase());
           
           
	rotorR=arrayRotate(rotorR);
    countR++;
    console.log("Esto es countR ",countR)
    console.log("Este el vector de posiciones R ",notchR)
    console.log("Esto es la posicion actual ",notchR[countR])
    console.log("Esto es la posicion anterior ",notchR[countR-1])
    console.log("Esto es restriccion_giro: ",restricciongiro)
    
    if(notchR[countR-1]=="v" && notchR[countR]=="w"){
		rotorM=arrayRotate(rotorM);
		countM++;
	}
           
	if(notchM[countM-1]=="q" && notchM[countM]=="r" && restricciongiro==0){
		rotorL=arrayRotate(rotorL);
		countL++;
        restricciongiro=1;
    }
        
    if(countR==26){
      countR=0; 
    }    
    if(countM==26){
      countM=0; 
         restricciongiro=0;
    }          
           
	if(countL==26){
		countL=0;
       
	}           
          
    $("#ActualRR").val(notchR[countR].toUpperCase());
    $("#ActualRM").val(notchM[countM].toUpperCase());
    $("#ActualRL").val(notchL[countL].toUpperCase());
       
           
            }else{
                
                return false;}
          }

function LetraMayuscula(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toUpperCase();
       letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    z=$("#stecker").val();
     $("#stecker").val(z.toUpperCase());
    
    
        if(letras.indexOf(tecla)==-1){
            return false;
            }
          }


  // Funcion que garantiza que el texto ingresado sea de un tamaño de 26 caracteres y sin repeticion de letras (conexiones)
    function repeticion(){
        console.log("Esto es txt: ",document.getElementById("txtvisual").value)
        if (document.getElementById("txtvisual").value==""){
     console.log("Este es el  actual Stecker: ",stecker)
    var entrada=document.getElementById("stecker").value.toUpperCase();
      var verificacion =[]; repetido=0;
            
      if (entrada.length<26){
          document.getElementById("stecker").focus();
          alert("El texto ingresado debe tener exactamente 26 caracteres de texto, el que ingresaste tiene tan solo "+entrada.length+" caracteres")
           
      }  
        
      if(entrada.length==26){
        for (var i = 0; i < 26; i++) {
          for (var j=i+1; j<26;j++) {
              if  (entrada[j]==entrada[i]) {
                  verificacion[i]=entrada[i]; 
                  repetido=1;
            }}}
      
     if(repetido==1){
       document.getElementById("conexion").innerHTML= "Por favor verificar las siguientes letras pues estan repetidas tantas veces como aparecen a continuacion: "+verificacion
       document.getElementById("tablero").innerHTML= "" 
       document.getElementById("stecker").focus();
       alert("Conexiones repetidas, vuelva a intentarlo")
       return reiniciar()
       }else{document.getElementById("tablero").innerHTML= "Entrada/Salida del tablero      .: ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        document.getElementById("conexion").innerHTML= "Salida/Entrada del Stecker : "+entrada.toUpperCase()
         document.getElementById("stecker").value = entrada.toUpperCase()
         
         stecker= entrada.toLowerCase().split('');
         console.log("Este es el nuevo Stecker: ",stecker)
          alert("Conexiones exitosas !!!!!!!!!!!!  :-) ")
        }
      }
            }else{
               alert("El Stecker debe cargarse antes de iniciar la encriptación, la Máquina Enigma se ha reiniciado. Ahora si puede configurar el stecker")
                return reiniciar() 
            }
    }   // Finaliza la funcion repeticion()

function prueba()
{
   $("#stecker").val("ZPHNMSWCIYTQEDOBLRFKUVGXJA"); 
}




