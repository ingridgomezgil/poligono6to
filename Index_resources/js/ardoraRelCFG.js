//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=4;
var score=0; scoreMax=6; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="INICIO";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080FF"; colorText="#000000"; colorSele="#FFFF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=100;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Excelente trabajo! Has clasificado los polígonos correctamente."; messageTime=""; messageError=" Casi lo logras. Observa bien los lados"; messageErrorG=" Casi lo logras. Observa bien los lados"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","",""];
var iL=["<div  align='center'><img alt='' src='index_resources/media/Rombo__6_.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/Rombo__5_.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/Rombo__2_.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/Rombo__1_.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/Rombo__4_.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/Rombo__3_.jpeg'></div>"];
var order=["","","","","",""]; orderR=["","","","","",""];indexR=0; indexL=0;
var cR=["<p>REGULAR</p>","<p>REGULAR</p>","<p>REGULAR</p>","<p>IRREGULAR</p>","<p>IRREGULAR</p>","<p>IRREGULAR</p>"]; ansRL=["MA==","Mg==","MQ==","NA==","Mw==","NQ=="];
var iR=["","","","","",""];
var auR=[1,3,2,5,4,6];
