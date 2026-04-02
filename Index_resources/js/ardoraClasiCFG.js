//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=2;
var score=0; scoreMax=2; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#0080FF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=100;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Excelente trabajo! Has clasificado los polígonos correctamente."; messageTime=""; messageError="Casi lo logras. Observa bien los ladosnta otra vez, tú puedes!\""; messageErrorG="Casi lo logras. Observa bien los ladosnta otra vez, tú puedes!\""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["UkVHVUxBUkVT","SVJSRUdVTEFSRVM="];
var img_G=["",""];
var mp3_G=["",""];
var ogg_G=["",""];
var n_G=["MQ==","NA=="];
var e_G=["",""];
var mp4_G=["",""];
var ogv_G=["",""];
var alt_G=["",""];
var txtGr=["","","","","","Irregulares"];
var imgGr=["0_Rombo__6_.jpeg","0_Rombo__2_.jpeg","0_Rombo__5_.jpeg","0_Rombo__1_.jpeg","0_Rombo__4_.jpeg","0_Rombo__3_.jpeg"];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var altGr=["","","","","",""];
var ram_G=[-1,-1];
var messageErrorG="Casi lo logras. Observa bien los ladosnta otra vez, tú puedes!\"";
var dirMedia="Index_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="SW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["0","0"];
var imaH=["0","0"];
var info=["",""];
