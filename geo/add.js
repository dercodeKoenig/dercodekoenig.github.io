var myVideo
var myVideo_b

var voices = window.speechSynthesis.getVoices();

function isHover(e) {
  return (e.matches(':hover'));
}
function qqta(){
	$("#qqta").fadeIn(0);
	$("#qqtf").fadeOut(0);
	$("#fraget").fadeOut(0);
	$("#antwortt").fadeIn(0);
}
function qqea(){
	$("#qqea").fadeIn(0);
	$("#qqef").fadeOut(0);
	$("#fragee").fadeOut(0);
	$("#antworte").fadeIn(0);
}
function qqla(){
	$("#qqla").fadeIn(0);
	$("#qqlf").fadeOut(0);
	$("#fragel").fadeOut(0);
	$("#antwortl").fadeIn(0);
}
function qt(){
	$("#qqta").fadeOut(0);
	$("#qqtf").fadeIn(0);
	$("#fraget").fadeIn(0);
	$("#antwortt").fadeOut(0);
	$("#qqt").fadeIn(0);
	$("#qu").fadeOut(0);
}
function qe(){
	$("#qqea").fadeOut(0);
	$("#qqef").fadeIn(0);
	$("#fragee").fadeIn(0);
	$("#antworte").fadeOut(0);
	$("#qqe").fadeIn(0);
	$("#qu").fadeOut(0);
}
function ql(){
	$("#qqla").fadeOut(0);
	$("#qqlf").fadeIn(0);
	$("#fragel").fadeIn(0);
	$("#antwortl").fadeOut(0);
	$("#qql").fadeIn(0);
	$("#qu").fadeOut(0);
}




var kkk1=false;
var kkk2=false;
var kkk3=false;

document.addEventListener('mousemove', function checkHover() {
	if (isHover(document.getElementById('kk1'))){
		$('#kl1').css("background-color","rgba(150, 118, 153, 0.7)");
		kkk1=true;
	}else {
		$('#kl1').css("background-color","rgba(15, 118, 153, 0.4)");
		kkk1=false;
	}
	
	if (isHover(document.getElementById('kk2'))){
		$('#kl2').css("background-color","rgba(150, 118, 153, 0.7)");
		kkk2=true;
	}else {
		$('#kl2').css("background-color","rgba(15, 118, 153, 0.4)");
		kkk2=false;
	}
	
	if (isHover(document.getElementById('kk3'))){
		$('#kl3').css("background-color","rgba(150, 118, 153, 0.7)");
		kkk3=true;
	}else {
		$('#kl3').css("background-color","rgba(15, 118, 153, 0.4)");
		kkk3=false;
	}
});
function t5(){
	audiooff();
	$("#nutzung").slideDown(1000);
	$('#menu1').fadeOut(20);
	$("#trailer").slideUp(1000);
}
function t4(){
	audiooff();
	$('#menu1').fadeOut(20);
	$('#qqt').fadeOut(20);
	$('#qqe').fadeOut(20);
	$('#qql').fadeOut(20);
	$('#qu').fadeIn(20);
	$("#trailer").fadeOut(20);
}
function t1(){
	audiooff();
	$("#header9-52").slideUp(1);
	$('#menu1').fadeOut(20);
	$("#header9-51").fadeIn(0);
	$("#header9-50").fadeOut(0);
	$("#trailer").fadeOut(20,function(){
		$("#entstehung").fadeIn(200);
		var msg = new SpeechSynthesisUtterance();
		msg.voice = voices[0];
		msg.voiceURI = 'native';
		msg.volume = 1; // 0 to 1
		msg.pitch = 1; //0 to 2
		msg.lang = 'de-DE';
		msg.rate= 1; //0 to 2
		msg.text = "Vor etwa 300 - 400 Milionen Jahren war die gesamte Harzregion ein Ozean";
		msg.onend=function(){
			$("#header9-51").fadeOut(1000,function(){
				$("#header9-52").fadeIn(1000);
				var msg = new SpeechSynthesisUtterance();
				msg.voice = voices[0];
				msg.voiceURI = 'native';
				msg.volume = 1; // 0 to 1
				msg.pitch = 1; //0 to 2
				msg.lang = 'de-DE';
				msg.rate= 1; //0 to 2
				msg.onend=function(){
					$("#header9-52").fadeOut(1000,function(){
						$("#header9-53").fadeIn(1000);
						var msg = new SpeechSynthesisUtterance();
						msg.voice = voices[0];
						msg.voiceURI = 'native';
						msg.volume = 1; // 0 to 1
						msg.pitch = 1; //0 to 2
						msg.lang = 'de-DE';
						msg.rate= 1; //0 to 2
						msg.onend=function(){
							$("#header9-53").fadeOut(1000,function(){
								$("#header9-54").fadeIn(1000);
								var msg = new SpeechSynthesisUtterance();
								msg.voice = voices[0];
								msg.voiceURI = 'native';
								msg.volume = 1; // 0 to 1
								msg.pitch = 1; //0 to 2
								msg.lang = 'de-DE';
								msg.rate= 1; //0 to 2
								msg.onend=function(){
									$("#header9-54").fadeOut(1000,function(){
										$("#header9-55").fadeIn(1000);
										var msg = new SpeechSynthesisUtterance();
										msg.voice = voices[0];
										msg.voiceURI = 'native';
										msg.volume = 1; // 0 to 1
										msg.pitch = 1; //0 to 2
										msg.lang = 'de-DE';
										msg.rate= 1; //0 to 2
										msg.onend=function(){
											$("#header9-55").fadeOut(1000,function(){
												$("#header9-56").fadeIn(1000);
												var msg = new SpeechSynthesisUtterance();
												msg.voice = voices[0];
												msg.voiceURI = 'native';
												msg.volume = 1; // 0 to 1
												msg.pitch = 1; //0 to 2
												msg.lang = 'de-DE';
												msg.rate= 1; //0 to 2
												msg.onend=function(){
													$("#header9-56").fadeOut(1000,function(){
														$("#header9-57").fadeIn(1000);
														var msg = new SpeechSynthesisUtterance();
														msg.voice = voices[0];
														msg.voiceURI = 'native';
														msg.volume = 1; // 0 to 1
														msg.pitch = 1; //0 to 2
														msg.lang = 'de-DE';
														msg.rate= 1; //0 to 2
														msg.text = "Ein sehr bekanntes Granitgebilde sind die Schirker Feuersteine.";
														msg.onend=function(){
															setTimeout(function(){
																speechSynthesis.speak(msg);
															},1000);
														}
														speechSynthesis.speak(msg);
														var msg = new SpeechSynthesisUtterance();
														msg.voice = voices[0];
														msg.voiceURI = 'native';
														msg.volume = 1; // 0 to 1
														msg.pitch = 1; //0 to 2
														msg.lang = 'de-DE';
														msg.rate= 1; //0 to 2
														msg.text= "Nun war das Gebiet wieder Festland mit wüstenartigem Klima und Vulkanismus. Es soll aber nicht besonders hoch gewesen sein.";
														
														msg.onend=function(){
															$("#header9-57").fadeOut(1000,function(){
																$("#header9-580").fadeIn(1000);
																var msg = new SpeechSynthesisUtterance();
																msg.voice = voices[0];
																msg.voiceURI = 'native';
																msg.volume = 1; // 0 to 1
																msg.pitch = 1; //0 to 2
																msg.lang = 'de-DE';
																msg.rate= 1; //0 to 2
																msg.onend=function(){
																$("#header9-580").fadeOut(1000,function(){
																	$("#header9-59").fadeIn(1000);
																	var msg = new SpeechSynthesisUtterance();
																	msg.voice = voices[0];
																	msg.voiceURI = 'native';
																	msg.volume = 1; // 0 to 1
																	msg.pitch = 1; //0 to 2
																	msg.lang = 'de-DE';
																	msg.rate= 1; //0 to 2
																	msg.onend=function(){
																	$("#header9-59").fadeOut(1000,function(){
																		$("#header9-510").fadeIn(1000);
																		var msg = new SpeechSynthesisUtterance();
																		msg.voice = voices[0];
																		msg.voiceURI = 'native';
																		msg.volume = 1; // 0 to 1
																		msg.pitch = 1; //0 to 2
																		msg.lang = 'de-DE';
																		msg.rate= 1; //0 to 2
																		msg.onend=function(){
																			los();
																		}
																		msg.text = "Zu beliebten Ausflugszielen gehört unter anderem der aus Sandstein bestehende Regenstein in Blankenburg. Durch vieles Kratzen in die Felsen wird dieser aber Immer kleiner. ";
																			speechSynthesis.speak(msg);
																	});																			
																	}
																	msg.text = "Auch große Sandmassen wurden vom Meer hinterlassen und mit angehoben. Heute sind diese als Sandsteinfelsen zu bewundern.";
																		speechSynthesis.speak(msg);
																	});		
																}
																msg.text = "In der Jurazeit hob sich der Harz wieder an. Verwitterung an der Oberfläche sorgte für die Abtragung der Meeresablagerungen.";
																	speechSynthesis.speak(msg);
															});	
														}
														
													});	
												}
												msg.text = "Nach der Faltenbildung stieg wieder flüssige Gesteinsschmelze auf und wurde in die gefalteten Schichten gepresst. Dort erstarrte sie zu körnigem Tiefengestein wie zum Beispiel Granit.";
													speechSynthesis.speak(msg);
											});
										}
										msg.text = "Viele Jahre später wurde das mit Sedimenten gefüllte Becken aufgefaltet. Dadurch wurden Sedimentschichten verbogen und zerbrachen.";
											speechSynthesis.speak(msg);
									});
								}
								msg.text = "An anderen Stellen konnten sich Sedimente bilden.";
								speechSynthesis.speak(msg);
							});
						}
						msg.text = "An manchen Stellen im Meeresboden gab es tiefe spalten aus denen Basaltmagma austrat";
							speechSynthesis.speak(msg);
					});
				}
				msg.text = "Weil das Meer so warm war, konnten sich Korallen bilden. Diese erreichten Höhen von bis zu 500 Meter";
					speechSynthesis.speak(msg);
			});
		}
		speechSynthesis.speak(msg);
	});
}


function mouseDown() {
}
function mouseUp() {
}
var erst = true;
function t2(){
	audiooff();
	$('#brockeninfo').fadeOut(3000);
	$('#npinfo').fadeOut(3000);
	$('#hdinfo').fadeOut(3000);
	$('#bbhlinfo').fadeOut(3000);
	$('#kinfo').fadeOut(3000);
	$('#htpinfo').fadeOut(3000);
	$('#rtpinfo').fadeOut(3000);
	$('#teufelsmauerinfo').fadeOut(2000);
	speechSynthesis.cancel();

	$('#menu1').fadeOut(20);
	$("#trailer").fadeOut(20,function(){
		
	});
	$("#tourismus").fadeIn(1000);
	intv=setInterval(draw,30);
	if(erst){
		erst=false;
		setTimeout(function(){
		var msg = new SpeechSynthesisUtterance();
		msg.voice = voices[0];
		msg.voiceURI = 'native';
		msg.volume = 1; // 0 to 1
		msg.pitch = 1; //0 to 2
		msg.lang = 'de-DE';
		msg.rate= 1.2; //0 to 2
		msg.text = "wo soll's denn hingehen";
		speechSynthesis.speak(msg);
		},3000);
	}
	}


function bau(){
$("#geofaktoren").slideUp(1000);
$("#bbau").slideDown(1000);		
}
function klima(){
$("#geofaktoren").slideUp(1000);
$("#bklima").slideDown(1000);		
}
function bios(){
$("#geofaktoren").slideUp(1000);
$("#bbios").slideDown(1000);		
}
function relief(){
$("#geofaktoren").slideUp(1000);
$("#brelief").slideDown(1000);		
}
function boden(){
$("#geofaktoren").slideUp(1000);
$("#bboden").slideDown(1000);		
}
function wasser(){
$("#geofaktoren").slideUp(1000);
$("#bwasser").slideDown(1000);		
}
function t3(){
	audiooff();
	$('#menu1').slideUp(1000);
	$('#bbau').slideUp(1000);
	$('#bwasser').slideUp(1000);
	$('#bbios').slideUp(1000);
	$('#brelief').slideUp(1000);
	$('#bboden').slideUp(1000);
	$('#bklima').slideUp(1000);
	$("#trailer").slideUp(1000,function(){
		$("#geofaktoren").slideDown(1000);
	});
}
function t0(){
	audiooff();
	$("#trailer").fadeOut(20,function(){
		$("#lageb").fadeOut(0);
		$("#header9-00").animate({
					opacity: 0
				}, 0, function() {
					$(this).css("background-image", "url('assets/images/lage.png')").promise().done(function(){
						$(this).animate({
							opacity: 1
						}, 2000)
					});    
				});
		$("#lage").fadeIn(20,function(){
		var msg = new SpeechSynthesisUtterance();
		msg.voice = voices[0];
		msg.voiceURI = 'native';
		msg.volume = 1; // 0 to 1
		msg.pitch = 1; //0 to 2
		msg.lang = 'de-DE';
		msg.rate= 1.2; //0 to 2
		msg.text = "Das Mittelgebirge Harz ist ein Bruchschollengebirge. Es ist 110 Kilometer lang und 30 bis 40 Kilometer breit, bedeckt eine Fläche von 2226 km² und reicht von Seesen bis zur Lutherstadt Eisleben. Der größte Anteil des Harzes liegt in Sachsen-Anhalt, der Westteil in Niedersachsen und nur ein kleiner Teil im Süden liegt in Thüringen. ";
		msg.onend=function(){
				$("#lageb").fadeIn(1000);
				$("#header9-00").animate({
					opacity: 0
				}, 20, function() {
					$(this).css("background-image", "url('assets/images/gps.jpg')").promise().done(function(){
						$(this).animate({
							opacity: 1
						}, 2000)
					});    
				});
				
		}
		speechSynthesis.speak(msg);
			
		});
	});
}
function audiooff(){
var fadeout = setInterval(
  function() {
    if ( myVideo.volume > 0.1) {
      myVideo.volume-=0.05;
    }
    else {myVideo.volume=0;
      clearInterval(fadeout);
    }
  }, 50);
}
function vollbild(){
	var elem = document.getElementById("body_m");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
var t;
function los(){
	clearTimeout(t);
	$('#tourismus').slideUp(1110);
	$('#nutzung').slideUp(1110);
	$('#geofaktoren').slideUp(1110);
	$('#qu').slideUp(1110);
	$('#lage').slideUp(1110);
	$('#entstehung').slideUp(1110);
	$('#trailer').fadeIn(2000);
	$('#menu1').fadeIn(3000);
	myVideo.currentTime = 0;
	myVideo.volume=1;
	myVideo.play();
	$('#start').slideUp(2000);
	t= setTimeout(function(){audiooff();},55000);
	vollbild();
}

function checkforVideo() {
    var b = setInterval(()=>{
        if(myVideo.readyState == 4){
            $("#startbtn").text("Los geht's");
			$("#startbtn").attr("onclick","los();");
            clearInterval(b);
			
        }                   
    },500);
}


$(document).ready(function(){
	setTimeout(function(){ 
	
	
	myVideo = document.getElementById("v1"); 
	myVideo_b = document.getElementById("v4"); 
	checkforVideo();
		$('#trailer').slideUp(0);
		$('#menu1').slideUp(0);
		$('#tourismus').slideUp(0);
		$('#entstehung').slideUp(0);
	}, 100);
	
});
