$(document).ready(function(){	

	$('#joint').show();
	$('#tcp').hide();
	$('#poses').hide();

	$('#menu-joint').click(function(){
		$('#joint').show();
		$('#tcp').hide();
		$('#poses').hide();
	});	

	$('#menu-tcp').click(function(){
		$('#joint').hide();
		$('#tcp').show();
		$('#poses').hide();
	});	
	
	$('#menu-poses').click(function(){
		$('#joint').hide();
		$('#tcp').hide();
		$('#poses').show();
	});		
	
	getposj();

	function getposj() {

		$.ajax({
			url: "/KAREL/webmonitor",
			success: function (data) {
				var data = $(data);
				$(".joint1").html($(data).find("#joint1"));
				$(".joint2").html($(data).find("#joint2"));
				$(".joint3").html($(data).find("#joint3"));
				$(".joint4").html($(data).find("#joint4"));
				$(".joint5").html($(data).find("#joint5"));
				$(".joint6").html($(data).find("#joint6"));
				$(".wlx").html($(data).find("#wlx"));
				$(".wly").html($(data).find("#wly"));
				$(".wlz").html($(data).find("#wlz"));
				$(".trx").html($(data).find("#trx"));
				$(".try").html($(data).find("#try"));
				$(".trz").html($(data).find("#trz"));				
				setTimeout(getposj(),300);
			},
		});
	};

	$('#stop').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webstop?getstart=stop',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});	
	
	$('#j1m').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j1m',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#j1p').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j1p',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#j2m').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j2m',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#j2p').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j2p',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
	$('#j3m').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j3m',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#j3p').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j3p',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});	

	$('#j4m').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j4m',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#j4p').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j4p',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#j5m').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j5m',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#j5p').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j5p',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
	$('#j6m').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j6m',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#j6p').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=j6p',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
	$('#wlpx').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movewlpx',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#wlpy').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movewlpy',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#wlpz').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movewlpz',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#wlmx').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movewlmx',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
	$('#wlmy').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movewlmy',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
	$('#wlmz').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movewlmz',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#trpx').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movetrpx',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#trpy').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movetrpy',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#trpz').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movetrpz',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#trmx').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movetrmx',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
	$('#trmy').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movetrmy',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
	$('#trmz').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=movetrmz',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#pickup').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=pickup',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
	$('#zero').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=zero',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#place').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=place',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#coord').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=coord',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#show').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=show',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});

	$('#touch').click(function(){
		$.ajax({
			type: 'GET',
			url: '/KAREL/webcontrol?getstart=touch',
			cache: false,
			success: function(){
			}
		});								
		return false;									
	});
	
});

