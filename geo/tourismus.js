function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

function audiooff_b(){
var fadeout_b = setInterval(
  function() {
    if ( myVideo_b.volume > 0.1) {
      myVideo_b.volume-=0.05;
    }
    else {myVideo_b.volume=0;
      clearInterval(fadeout_b);
    }
  }, 50);
}
function brockenbahn_z(){
	myVideo_b.volume=0;
	$("#brockeninfo").slideDown(1000);
	$("#bbb").slideUp(1000);
}
function brockenbahn(){
	setTimeout(function(){
		audiooff_b();
		$("#v4").fadeOut(4500,function(){
			$("#bbbbbild").fadeIn(1000);
			$("#bbbcon").fadeIn(1000);
			printLetterByLetter("bbbhead", "Die Brockenbahn", 100);
			setTimeout(function(){
				printLetterByLetter("bbbeschreibung", "von Drei Annen Hohne über Schierke auf den Brocken", 30);
			},2000);
			setTimeout(function(){
				$("#bbback").fadeIn(1000);
			},2500);
		});
	},50000);
	$("#v4").fadeIn(100);
	$("#bbbbbild").slideUp(0);
	$("#bbbcon").slideUp(0);
	$("#bbback").slideUp(0);
	speechSynthesis.cancel();
	$("#brockeninfo").slideUp(0);
	$("#bbb").fadeIn(1000);
	myVideo_b.currentTime = 0;
	myVideo_b.volume=0.3;
	myVideo_b.play();
	
	var msg = new SpeechSynthesisUtterance();
	msg.voice = voices[0];
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.pitch = 0.3; //0 to 2
	msg.lang = 'de-DE';
	msg.rate = 1.28; // 0.1 to 
	msg.text="Die Brockenbahn ist eine hauptsächlich touristisch genutzte meterspurige Eisenbahnstrecke der Harzer Schmalspurbahn. Sie führt von Drei Annen Hohne über Schierke auf den Brocken. Die Brockenbahn verlässt den Bahnhof Drei Annen Hohne in südwestlicher Richtung. Dann fährt sie direkt in den Nationalpark Harz ein. Anschließend führt sie nach Westen zum Bahnhof Schirke."; 
	msg.onend=function(){
		setTimeout(function(){
				
			var msg = new SpeechSynthesisUtterance();
			msg.voice = voices[0];
			msg.voiceURI = 'native';
			msg.volume = 1; // 0 to 1
			msg.pitch = 0.3; //0 to 2
			msg.lang = 'de-DE';
			msg.rate = 1.28; // 0.1 to 
			msg.text="Nach Verlassen des Schirker Bahnhofs führt die Strecke auf einem längeren Abschnitt durch das Tal der Kalten Bode, das sich südlich und weit unterhalb der Strecke erstreckt. Nach einem engen Linksbogen vor der Eckerlochbrücke und einem weiteren Rechtsbogen erreicht die Strecke den Bahnhof Goetheweg. Heute ist dieser aber nur noch ein Betriebsbahnhof. Nun führt die Bahn direkt auf den Brocken zu und endet nach fast 19 Kilometern am Bahnhof Brocken.";
			speechSynthesis.speak(msg);
		},10000);
	}
	speechSynthesis.speak(msg);
}
function brocken_start(){
	$('#bh').fadeOut(0);
	$('#brockeninfo').fadeIn(100);
	var msg = new SpeechSynthesisUtterance();
	msg.voice = voices[0];
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.pitch = 0.3; //0 to 2
	msg.lang = 'de-DE';
	msg.rate = 1.28; // 0.1 to 
	msg.onend=function(){
		$('#bh').fadeIn(3000);
	}
	msg.text = 'Der Brocken, im Volksmund Blocksberg genannt, ist mit 1141 Metern über Null der höchste Berg im Mittelgebirge Harz, in Sachsen-Anhalt und in ganz Norddeutschland.   Er befindet sich in der Gemarkung Schierke der Stadt Wernigerode im Landkreis Harz von Sachsen-Anhalt.   Der Berg und seine Umgebung im Nationalpark Harz sind eines der beliebtesten Ausflugsziele Deutschlands. Man kann ihn zu Fuß oder mit der Brockenbahn erreichen.';
	speechSynthesis.speak(msg);
	setTimeout(function(){
		$("#header9-3").animate({
			opacity: 0
		}, 20, function() {
			$(this).css("background-image", "url('assets/images/brocken.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},100);
	setTimeout(function(){
		$("#header9-3").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/brocken2.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},6000);
	setTimeout(function(){
	$("#header9-3").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/brocken3.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},12000);
	setTimeout(function(){
		$("#header9-3").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/brocken4.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},18000);
	setTimeout(function(){
		$("#header9-3").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/brocken5.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},24000);
	setTimeout(function(){
		$("#header9-3").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/brocken6.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},30000);
	$('#tourismus').fadeOut(100);
}
function harzdrenalin_start(){
	$('#hdinfo').fadeIn(100);
	$('#tourismus').fadeOut(100);	
}
function htp_start(){
	$('#htpinfo').fadeIn(100);
	$("#header9-58").fadeIn(100);
	$("#header9-59").fadeOut(0);
	$("#htpi").fadeOut(0);
	$("#header9-585").fadeOut(0);
	$("#header9-6").fadeOut(0);
	$('#tourismus').fadeOut(100);	
	
		var msg = new SpeechSynthesisUtterance();
		msg.voice = voices[0];
		msg.voiceURI = 'native';
		msg.volume = 1; // 0 to 1
		msg.pitch = 0.3; //0 to 2
		msg.lang = 'de-DE';
		msg.rate = 1.128;
		msg.text = 'Der Hexentanzplatz ist die meistbesuchte Attraktion im Harz und wie die Teufelsmauer von vielen Legenden umwoben. Es wird vermutet, dass der Hexentanzplatz ein altsächsischer germanischer Kulturort war.  Um die Wachen von Karl dem Großen zu überlisten, verkleideten sich die Sachsen, malten ihre Gesichter Schwarz an und bewaffneten sich mit Besen und Heugabeln. Diese schaurigen Gestalten machten den Wachen Angst, welche sodann die Flucht ergriffen und von Hexen und Teufeln erzählten.';
		msg.onend = function() {
				$("#header9-58").animate({
					opacity: 0
				}, 2000, function() {
					$(this).css("background-image", "url('assets/images/htp_wandern.jpg')").promise().done(function(){
						$(this).animate({
							opacity: 1
						}, 2000)
					});    
				});
					var msg = new SpeechSynthesisUtterance();
					msg.voice = voices[0];
					msg.voiceURI = 'native';
					msg.volume = 1; // 0 to 1
					msg.pitch = 0.3; //0 to 2
					msg.lang = 'de-DE';
					msg.rate = 1.128;
					msg.text = 'Du kannst Den Hexentanzplatz über viele schöne Wanderwege erreichen.';
					msg.onend = function() {
						$("#header9-58").animate({
							opacity: 0
						}, 2000, function() {
							$(this).css("background-image", "url('assets/images/htp_seilbahn.jpg')").promise().done(function(){
								$(this).animate({
									opacity: 1
								}, 2000)
							});    
						});
						var msg = new SpeechSynthesisUtterance();
						msg.voice = voices[0];
						msg.voiceURI = 'native';
						msg.volume = 1; // 0 to 1
						msg.pitch = 0.3; //0 to 2
						msg.lang = 'de-DE';
						msg.rate = 1.128;
						msg.text = 'Oder du nutzt die Seilbahn über die Bode und genießt eine tolle Ausssicht. ';
						msg.onend = function() {
							
							var msg = new SpeechSynthesisUtterance();
							msg.voice = voices[0];
							msg.voiceURI = 'native';
							msg.volume = 1; // 0 to 1
							msg.pitch = 0.3; //0 to 2
							msg.lang = 'de-DE';
							msg.rate = 1.128;
							msg.text = 'Auf dem Hexentanzplatz findest du auch das Bergtheater. Hier gibt es schöne Vorstellungen für Jung und Alt zu sehen. ';
							msg.onend = function() {
								var msg = new SpeechSynthesisUtterance();
								msg.voice = voices[0];
								msg.voiceURI = 'native';
								msg.volume = 1; // 0 to 1
								msg.pitch = 0.3; //0 to 2
								msg.lang = 'de-DE';
								msg.rate = 1.128;
								msg.text = 'Walpurgisnacht: letzte Nacht des Aprils. Hexen des Harzes finden sich zusammen um ein gespenstisches Ritual zu feiern. Hier versammeln sich die Hexen um danach gemeinsam zum Brocken aufzubrechen, wo sie dann um das lodernde Hexenfeuer tanzen und um die Hand des Teufels anhalten.';
								msg.onend = function() {
									$("#htpi").fadeIn(2000);
								}
								$("#header9-58").animate({
									opacity: 0
								}, 2000, function() {
									$(this).css("background-image", "url('assets/images/htp_wn.jpg')").promise().done(function(){
										$(this).animate({
											opacity: 1
										}, 2000)
									});
									speechSynthesis.speak(msg);
								});
							}
							$("#header9-58").animate({
								opacity: 0
							}, 2000, function() {
								$(this).css("background-image", "url('assets/images/htp_theater.jpg')").promise().done(function(){
									$(this).animate({
										opacity: 1
									}, 2000)
								});    
								speechSynthesis.speak(msg);
							});
						}
						speechSynthesis.speak(msg);
					}
					speechSynthesis.speak(msg);
		}
		speechSynthesis.speak(msg);
		setTimeout(function(){
			$("#header9-58").animate({
				opacity: 0
			}, 2000, function() {
				$(this).css("background-image", "url('assets/images/htp_schwein.jpg')").promise().done(function(){
					$(this).animate({
						opacity: 1
					}, 2000)
				});    
			});
		},6000);
		setTimeout(function(){
			$("#header9-58").animate({
				opacity: 0
			}, 2000, function() {
				$(this).css("background-image", "url('assets/images/htp_f.jpg')").promise().done(function(){
					$(this).animate({
						opacity: 1
					}, 2000)
				});    
			});
		},12000);
		setTimeout(function(){
			$("#header9-58").animate({
				opacity: 0
			}, 2000, function() {
				$(this).css("background-image", "url('assets/images/htp_f3.jpg')").promise().done(function(){
					$(this).animate({
						opacity: 1
					}, 2000)
				});    
			});
		},18000);
		setTimeout(function(){
			$("#header9-58").animate({
				opacity: 0
			}, 2000, function() {
				$(this).css("background-image", "url('assets/images/htp_f2.jpg')").promise().done(function(){
					$(this).animate({
						opacity: 1
					}, 2000)
				});    
			});
		},24000);
}
function np_start(){
	$('#nph').fadeOut(0);
	$('#video2-4').fadeOut(0);
	$('#npinfo').fadeIn(100);
	$('#tourismus').fadeOut(100);
	$("#nph").fadeOut(0);
	var msg = new SpeechSynthesisUtterance();
	msg.onend = function() {
		var msg = new SpeechSynthesisUtterance();
		msg.voice = voices[0];
		msg.voiceURI = 'native';
		msg.volume = 1; // 0 to 1
		msg.pitch = 0.3; //0 to 2
		msg.lang = 'de-DE';
		msg.text = 'Der Nationalpark Harz ist das Zuhause des Luchs. Er gilt als die größte Katze Europas.';
		$("#header9-5").animate({
			opacity: 0
		}, 2000, function() {	
			$("#header9-5").fadeOut(0);
			$("#video2-4").fadeIn(0,function(){
				speechSynthesis.speak(msg);
				document.getElementById("v2").currentTime=0;
				document.getElementById("v2").play();
				$("#header9-5").animate({
					opacity: 1
				}, 1000)
				setTimeout(function(){
					$("#video2-4").fadeOut(1000,function(){
						$("#header9-5").css("background-image", "url('assets/images/nationalpark5.jpg')");
						$("#header9-5").fadeIn(1000);
					});
				},6000);
			});    
		});
		msg.onend = function() {
			$("#nph").fadeIn(1000);
		}
	};
	msg.rate = 1.128;
	msg.text = 'Der Nationalpark Harz ist einer der größten Waldnationalparks in Deutschland.  Mit seinen 247 km² umfasst er ungefähr zehn Prozent der Gesamtfläche des Harzes rund um den Brocken.  96% des Nationalparks sind von Wald bedeckt.  Am häufigsten sieht man Fichten  und Buchenwälder';
	speechSynthesis.speak(msg);
	setTimeout(function(){
		$("#header9-5").animate({
			opacity: 0
		}, 20, function() {
			$(this).css("background-image", "url('assets/images/nationalpark.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},100);
	setTimeout(function(){
		$("#header9-5").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/nationalpark2.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},6000);
	setTimeout(function(){
		$("#header9-5").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/nationalpark3.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},12000);
	setTimeout(function(){
		$("#header9-5").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/nationalpark4.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},18000);
}
function teufelsmauer_start(){
	$('#teufelsmauerinfo').fadeIn(100);
	var msg = new SpeechSynthesisUtterance();
	msg.rate = 1.12; // 0.1 to 
	$("#tmh").fadeOut(0);
	msg.onend = function() {$("#tmh").fadeIn(1000);};
	msg.text = 'Zu der Teufelsmauer gibt es viele Mythen und Legenden. Sie entstand wegen eines Streites zwischen Teufel und Gott. Die beiden wollten die Welt mit einer Mauer aufteilen.  Sie wetteten: Jenes Land, das der Teufel in nur einer Nacht bis zum ersten Hahnenschrei mit einer Mauer umziehen könne, könne er behalten.  Doch bevor der Teufel die Mauer fertigstellen konnte, kam eine Bauersfrau vorbei, die ihren Hahn auf dem Markt verkaufen wollte. Sie erschrak beim Anblick des Teufels so sehr, dass ihr Hahn zu krähen begann – bevor der Tag anbrach.	Der Teufel nahm an, dass er die Wette verloren hatte und zerstörte die fast fertige Mauer.';
	speechSynthesis.speak(msg);
	$('#tourismus').fadeOut(100);
		setTimeout(function(){
		$("#header9-4").animate({
			opacity: 0
		}, 20, function() {
			$(this).css("background-image", "url('assets/images/teufelsmauer.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},100);
	setTimeout(function(){
		$("#header9-4").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/teufelsmauer2.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},6000);
	setTimeout(function(){
	$("#header9-4").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/teufelsmauer3.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},12000);
	setTimeout(function(){
		$("#header9-4").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/teufelsmauer4.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},18000);
	setTimeout(function(){
		$("#header9-4").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/teufelsmauer5.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},24000);
	setTimeout(function(){
		$("#header9-4").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/teufelsmauer6.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},30000);
	$('#tourismus').fadeOut(100);
}
function rtp_sage_lesen(){
	$("#rtp_info_a").slideUp(1000);
	$("#rtp_info_b").slideDown(1000);
}
function rtp_sage_nicht_lesen(){
	$("#rtp_info_b").slideUp(1000);	
	$("#rtp_info_a").slideDown(1000);
}

function rtp_start(){
	$('#rtpinfo').fadeIn(100);
		
	var msg = new SpeechSynthesisUtterance();
	msg.rate = 1.12; // 0.1 to 
	$("#rtpi").fadeOut(0);
	msg.text = 'Hier siehst du 2 Blicke vom Hexentanzplatz zur Roßtrappe hinüber.';
	speechSynthesis.speak(msg);
	$('#tourismus').fadeOut(100);
		setTimeout(function(){
		$("#header9-211").animate({
			opacity: 0
		}, 20, function() {
			$(this).css("background-image", "url('assets/images/rt.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},100);
	setTimeout(function(){
		$("#header9-211").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/rtp2.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},3000);
	setTimeout(function(){
	var msg = new SpeechSynthesisUtterance();
	msg.rate = 1.12; // 0.1 to 
	msg.onend = function() {$("#rtpi").fadeIn(1000);};	
	msg.text = 'Der Sprungsage nach verfolgte einst der Ritter Bodo von Böhmen die schöne Königstochter Brunhilde, die er gegen ihren Willen heiraten wollte. Brunhilde entfloh auf einem weißen Ross, jedoch tat sich plötzlich vor ihr ein tiefer Abgrund auf. Sie setzte mit einem kühnen Sprung zum jenseitigen Felsen über, wobei sie ihre goldene Krone verlor, die im reißenden Fluss versank. Ihr Verfolger stürzte jedoch in die Tiefe und wurde in einen schwarzen Hund verwandelt, der seitdem im Bodekessel die Krone der Prinzessin bewachen muss. Der Eindruck vom Huf des Pferdes ist noch heute zu sehen. Der Ritter Bodo gab dem Fluss den Namen Bode. Einer Theorie zufolge könnte es sich beim Felseindruck um Verwitterungsreste eines germanischen Opferbeckens handeln.';
	
	speechSynthesis.speak(msg);
	$("#header9-211").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/rtp_sage2.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},8000);
	setTimeout(function(){
		$("#header9-211").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/rtp_sage.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},25000);
	setTimeout(function(){
		$("#header9-211").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/rtp.webp')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},40000);
	setTimeout(function(){
		$("#header9-211").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/rtp_huf.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},50000);
}

function bbhl_start(){
	$("#header9-33").css("background-image", "url('assets/images/bbhl.jpg')");
	$("#tourismus").fadeOut(0);
	$("#bbhlinfo").fadeIn(100);
	$("#bbhlpi").fadeOut(0);
	var msg = new SpeechSynthesisUtterance();
	msg.rate = 1.12; // 0.1 to 
	msg.onend = function() {$("#bbhlpi").fadeIn(1000);};	
	msg.text = 'Am 20. Dezember 1865 wurde dieses einzigartige Naturwunder zufällig von Bergleuten bei der Suche nach Kupferschiefer entdeckt. Wenige Wochen später wurde sie als Schauhöhle freigegeben. Die Barbarossahöhle hat eine Fläche von etwa 13.000 m². Es ist die größte touristisch erschlossene Anhydrit-Gips-Höhle Europas. Die Lufttemperatur beträgt 10°C, die Wassertemperatur 8,5°C.';
	speechSynthesis.speak(msg);
	setTimeout(function(){
		$("#header9-33").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/bbhl3.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},12000);
	setTimeout(function(){
		$("#header9-33").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/bbhl2.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},24000);
}

function k_start(){
	$("#tourismus").fadeOut(0);
	$("#kinfo").fadeIn(100);
	$("#kpi").fadeOut(0);
	$("#header9-34").css("background-image", "url('assets/images/khd2.jpg')");
	var msg = new SpeechSynthesisUtterance();
	msg.rate = 1.12; // 0.1 to 
	msg.onend = function() {$("#kpi").fadeIn(1000);};	
	msg.text = 'Kurz nach dem Tod von Kaiser Wilhelm dem Ersten wurden viele repräsentative Denkmäler zur Ehrung des Kaisers aufgestellt. Das Kyffhäuser Denkmal ist mit 81 Metern Höhe das zweitgrößte Denkmal Deutschlands. Von 1994 bis 2014 wurde es mit einem Aufwand von 14 Millionen Euro saniert. Am Sockel des Denkmals befindet sich eine aus Sandstein gemeißelte Statue von Friedrich dem Ersten (Barbarossa). Darüber steht ein Reiterstandbild von Kaiser Wilhelm dem Ersten';
	speechSynthesis.speak(msg);
	setTimeout(function(){
		$("#header9-34").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/khd3.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},8000);
	setTimeout(function(){
		$("#header9-34").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/khd4.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},16000);
	setTimeout(function(){
		$("#header9-34").animate({
			opacity: 0
		}, 2000, function() {
			$(this).css("background-image", "url('assets/images/khd.jpg')").promise().done(function(){
				$(this).animate({
					opacity: 1
				}, 2000)
			});    
		});
	},24000);
}
var mouseX;
var mouseY;
var img;
var intv;
var c=0;
var ctx;
var hoverzurück=0;

var brocken=false;
var brockenstate=0;

var tmauer=false;
var tmauerstate=0;

var harzdrenalin=false;
var harzdrenalinstate=0;

var nationalpark=false;
var nationalparkstate=0;

var htp=false;
var htpstate=0;

var rt=false;
var rtstate=0;

var bbhl=false;
var bbhlstate=0;

var khd=false;
var khdstate=0;

var radius = 50;
window.addEventListener('mousemove', mouseMoveEvent);
window.addEventListener('mouseup', mouseUpEvent);
function mouseUpEvent(e){
	if(c!=0){
		if(hoverzurück){
			c=0;
			los();
		}
		if(brocken){
			brocken_start();
		}
		if(harzdrenalin){
			harzdrenalin_start();
		}
		if(tmauer){
			teufelsmauer_start();
		}
		if(nationalpark){
			np_start();
		}
		if(htp){
			htp_start();
		}
		if(rt){
			rtp_start();
		}
		if(bbhl){
			bbhl_start();
		}
		if(khd){
			k_start();
		}
	}
}
var s;
var p;
function mouseMoveEvent(e) {
	if(c!=0){
		
		if(e.clientX>screen.width-90&&e.clientY>screen.height-35){
			hoverzurück=true;
		}else{
			hoverzurück=false;
		}
		
		var rect = c.getBoundingClientRect();
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
		
		var rxbrocken=mouseX-(p+s/100*42);
		var rybrocken=mouseY-(screen.height/100*35);
		var rb=Math.sqrt(rxbrocken*rxbrocken+rybrocken*rybrocken);
		if(rb<radius/4464*screen.height){brocken=true;}
		else{brocken=false;}
		
		var rxharzdrenalin=mouseX-(p+s/100*68);
		var ryharzdrenalin=mouseY-(screen.height/100*49);
		var rH=Math.sqrt(rxharzdrenalin*rxharzdrenalin+ryharzdrenalin*ryharzdrenalin);
		if(rH<radius/4464*screen.height){harzdrenalin=true;}
		else{harzdrenalin=false;}
		
		var rxtmauer=mouseX-(p+s/100*75);
		var rytmauer=mouseY-(screen.height/100*38);
		var rH=Math.sqrt(rxtmauer*rxtmauer+rytmauer*rytmauer);
		if(rH<radius/4464*screen.height){tmauer=true;}
		else{tmauer=false;}
		
		var rxhtp=mouseX-(p+s/100*79);
		var ryhtp=mouseY-(screen.height/100*49);
		var rH=Math.sqrt(rxhtp*rxhtp+ryhtp*ryhtp);
		if(rH<radius/4464*screen.height){htp=true;}
		else{htp=false;}
		
		var rxnp=mouseX-(p+s/100*50);
		var rynp=mouseY-(screen.height/100*50);
		var rH=Math.sqrt(rxnp*rxnp+rynp*rynp);
		if(rH<radius/4464*screen.height){nationalpark=true;}
		else{nationalpark=false;}
		
		var rxrt=mouseX-(p+s/100*77);
		var ryrt=mouseY-(screen.height/100*47);
		var rH=Math.sqrt(rxrt*rxrt+ryrt*ryrt);
		if(rH<radius/4464*screen.height){rt=true;}
		else{rt=false;}
		
		var rxbbhl=mouseX-(p+s/100*84);
		var rybbhl=mouseY-(screen.height/100*97);
		var rH=Math.sqrt(rxbbhl*rxbbhl+rybbhl*rybbhl);
		if(rH<radius/4464*screen.height){bbhl=true;}
		else{bbhl=false;}
		
		var rxkhd=mouseX-(p+s/100*91);
		var rykhd=mouseY-(screen.height/100*88);
		var rH=Math.sqrt(rxkhd*rxkhd+rykhd*rykhd);
		if(rH<radius/4464*screen.height){khd=true;}
		else{khd=false;}
		
		
	}
};
function sc(x){
	return x*4464/screen.height
}
function draw(){
	
		c = document.getElementById("myCanvas");
		c.width  = window.innerWidth;
		c.height = window.innerHeight;
		ctx = c.getContext("2d");
		img = document.getElementById("kbild");
		
	if(hoverzurück){
		ctx.fillStyle="#505050";
	}else{
		ctx.fillStyle="#000000";
	}
	ctx.fillRect(screen.width-90, screen.height-35 ,screen.width, screen.height);
	ctx.font='22px verdana';
	ctx.fillStyle="#ffffff";
	ctx.fillText("zurück", screen.width-80, screen.height-10);

	s=(6392*screen.height/4464);
	p=(screen.width-s)/2;		
			ctx.scale(screen.height/4464,screen.height/4464);
			ctx.drawImage(img, ((screen.width*4464/screen.height)-6392)/2,0);
			var x;
			var y;
			var w;
			var h;
			
			//brocken
			var brockenimg = document.getElementById("bbild");
			x=p+s/100*42;
			y=screen.height/100*35;
			w=1280;
			h=720;
			ctx.beginPath();
			ctx.arc(sc(x),sc(y), radius, 0, 2 * Math.PI, false);
			if(brocken==true)	{brockenstate=brockenstate+20;}
			else				{brockenstate=brockenstate-20;}
			if(brockenstate<0)	{brockenstate=0;}
			if(brockenstate>255){brockenstate=255;}
			ctx.fillStyle = "rgb(0, 0, "+brockenstate+")"; 
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00ADEF';
			ctx.stroke();
			if(brockenstate>0){
				ctx.drawImage(brockenimg,0,(255-brockenstate)*h/255,sc(w),sc(h), sc(x)-w/2,sc(y)+radius*2,sc(w),sc(h));
			}
			
			//harzdrenalin
			var harzdrenalinimg = document.getElementById("zipline");
			x=p+s/100*68;
			y=screen.height/100*49;
			w=1280;
			h=720;
			ctx.beginPath();
			ctx.arc(sc(x),sc(y), radius, 0, 2 * Math.PI, false);
			if(harzdrenalin==true)	{harzdrenalinstate=harzdrenalinstate+20;}
			else				{harzdrenalinstate=harzdrenalinstate-20;}
			if(harzdrenalinstate<0)	{harzdrenalinstate=0;}
			if(harzdrenalinstate>255){harzdrenalinstate=255;}
			ctx.fillStyle = "rgb(0, 0, "+harzdrenalinstate+")"; 
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00ADEF';
			ctx.stroke();
			if(harzdrenalinstate>0){
				ctx.drawImage(harzdrenalinimg,0,(255-harzdrenalinstate)*h/255,sc(w),sc(h), sc(x)-w/2,sc(y)+radius*2,sc(w),sc(h));
			}
			
			//teufelsmauer
			var tmauerimg = document.getElementById("tmauer");
			x=p+s/100*75;
			y=screen.height/100*38;
			w=1280;
			h=720;
			ctx.beginPath();
			ctx.arc(sc(x),sc(y), radius, 0, 2 * Math.PI, false);
			if(tmauer==true)	{tmauerstate=tmauerstate+20;}
			else				{tmauerstate=tmauerstate-20;}
			if(tmauerstate<0)	 {tmauerstate=0;}
			if(tmauerstate>255){tmauerstate=255;}
			ctx.fillStyle = "rgb(0, 0, "+tmauerstate+")"; 
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00ADEF';
			ctx.stroke();
			if(tmauerstate>0){
				ctx.drawImage(tmauerimg,0,(255-tmauerstate)*h/255,sc(w),sc(h), sc(x)-w/2,sc(y)+radius*2,sc(w),sc(h));
			}
			
			//hexentanzplatz
			var htpimg = document.getElementById("htp");
			x=p+s/100*79;
			y=screen.height/100*49;
			w=1280;
			h=720;
			ctx.beginPath();
			ctx.arc(sc(x),sc(y), radius, 0, 2 * Math.PI, false);
			if(htp==true)	{htpstate=htpstate+20;}
			else				{htpstate=htpstate-20;}
			if(htpstate<0)	{htpstate=0;}
			if(htpstate>255)	{htpstate=255;}
			ctx.fillStyle = "rgb(0, 0, "+htpstate+")"; 
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00ADEF';
			ctx.stroke();
			if(htpstate>0){
				ctx.drawImage(htpimg,0,(255-htpstate)*h/255,sc(w),sc(h), sc(x)-w/2,sc(y)+radius*2,sc(w),sc(h));
			}
			
			//nationalpark
			var nationalparkimg = document.getElementById("np");
			x=p+s/100*50;
			y=screen.height/100*50;
			w=1280;
			h=720;
			ctx.beginPath();
			ctx.arc(sc(x),sc(y), radius, 0, 2 * Math.PI, false);
			if(nationalpark==true)	{nationalparkstate=nationalparkstate+20;}
			else				{nationalparkstate=nationalparkstate-20;}
			if(nationalparkstate<0)	{nationalparkstate=0;}
			if(nationalparkstate>255)	{nationalparkstate=255;}
			ctx.fillStyle = "rgb(0, 0, "+nationalparkstate+")"; 
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00ADEF';
			ctx.stroke();
			if(nationalparkstate>0){
				ctx.drawImage(nationalparkimg,0,(255-nationalparkstate)*h/255,sc(w),sc(h), sc(x)-w/2,sc(y)+radius*2,sc(w),sc(h));
			}
			
			//rt
			var rtimg = document.getElementById("rt");
			x=p+s/100*77;
			y=screen.height/100*47;
			w=1280;
			h=720;
			ctx.beginPath();
			ctx.arc(sc(x),sc(y), radius, 0, 2 * Math.PI, false);
			if(rt==true)	{rtstate=rtstate+20;}
			else				{rtstate=rtstate-20;}
			if(rtstate<0)	{rtstate=0;}
			if(rtstate>255)	{rtstate=255;}
			ctx.fillStyle = "rgb(0, 0, "+rtstate+")"; 
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00ADEF';
			ctx.stroke();
			if(rtstate>0){
				ctx.drawImage(rtimg,0,(255-rtstate)*h/255,sc(w),sc(h), sc(x)-w/2,sc(y)+radius*2,sc(w),sc(h));
			}
			
			
			//bbhl
			var bbhlimg = document.getElementById("bbhl");
			x=p+s/100*84;
			y=screen.height/100*97;
			w=1280;
			h=720;
			ctx.beginPath();
			ctx.arc(sc(x),sc(y), radius, 0, 2 * Math.PI, false);
			if(bbhl==true)	{bbhlstate=bbhlstate+20;}
			else				{bbhlstate=bbhlstate-20;}
			if(bbhlstate<0)	{bbhlstate=0;}
			if(bbhlstate>255)	{bbhlstate=255;}
			ctx.fillStyle = "rgb(0, 0, "+bbhlstate+")"; 
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00ADEF';
			ctx.stroke();
			if(bbhlstate>0){
				ctx.drawImage(bbhlimg,0,(255-bbhlstate)*h/255,sc(w),sc(h), sc(x)-w,sc(y)-h+radius*2,sc(w),sc(h));
			}
			
			//khd
			var khdimg = document.getElementById("khd");
			x=p+s/100*91;
			y=screen.height/100*88;
			w=1280;
			h=720;
			ctx.beginPath();
			ctx.arc(sc(x),sc(y), radius, 0, 2 * Math.PI, false);
			if(khd==true)	{khdstate=khdstate+20;}
			else				{khdstate=khdstate-20;}
			if(khdstate<0)	{khdstate=0;}
			if(khdstate>255)	{khdstate=255;}
			ctx.fillStyle = "rgb(0, 0, "+khdstate+")"; 
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#00ADEF';
			ctx.stroke();
			if(khdstate>0){
				ctx.drawImage(khdimg,0,(255-khdstate)*h/255,sc(w),sc(h), sc(x)-w-0.5*w,sc(y)-h+radius*2,sc(w),sc(h));
			}
			
		
}