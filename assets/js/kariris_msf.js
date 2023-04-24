jQuery(($) => {

	var currentTab = 0; 
	kmsf_showTab(currentTab);

	var $form = $('.kariris_multistep_form')
	var $steps = $form.find('.kariris_multistep_step')
	var $prev_bt = $form.find('.kmsf_navigation .kmsf_prev')
	var $next_bt = $form.find('.kmsf_navigation .kmsf_next')


	$steps.each((i, el) => {

		var title = $(el).find('.kmsf_step_title').attr('title-progress')
		var no_index = $(el).attr('data-no-index')

		var html = ''
		html += '<li class="kmsf_progress_item kmsf_progress_item_'+i+'">'
			if (no_index != 'true') {
				html += '<span class="kmsf_progress_index">'
					html += i
				html += '</span>'
			}
			html += '<span class="kmsf_progress_title">'
				html += title
			html += '</span>'
		html += '</li>'
		$('ul.kmsf_progressbar_itens').append( html )

	});

	function kmsf_showTab(n) {

		currentTab = n

		var $form = $('.kariris_multistep_form')
		var $steps = $form.find('.kariris_multistep_step')
		var $prev_bt = $form.find('.kmsf_navigation .kmsf_prev')
		var $next_bt = $form.find('.kmsf_navigation .kmsf_next')

		$steps.each((i, el) => {
			if (i == n) $(el).addClass('active')
			else $(el).removeClass('active')

			if (i == n) $('.kmsf_progress_item_'+i).addClass('current')
			else $('.kmsf_progress_item_'+i).removeClass('current')

			if (i < n) $('.kmsf_progress_item_'+i).addClass('completed')
			else $('.kmsf_progress_item_'+i).removeClass('completed')

		});


		ow = $('.kmsf_progressbar').width()
		liw = $('.kmsf_progressbar ul li').width()
		cw = liw*n

		cw = 100/$steps.length*(n+1)

		// if (n == 0) $('.kariris_multistep_form .kmsf_progressbar .bar .completed').css('width', '30px')
		$('.kariris_multistep_form .kmsf_progressbar .bar .completed').css('width', cw+'%')

		if (n > 0) $prev_bt.show()
		else $prev_bt.hide()
		
		if (n < $steps.length-1) $next_bt.show()
		else $next_bt.hide()

		if (n < $steps.length-1) {
			$form.find('input.wpcf7-submit').hide()
			$form.find('input.wpcf7-submit').prop('disabled', true)
		} else {
			$form.find('input.wpcf7-submit').show()
			$form.find('input.wpcf7-submit').prop('disabled', false)
		}



	}

	function kmsf_scroll() {
		var scrollTo = $(".kariris_multistep_form")
	    var position = scrollTo.offset().top
		$('html').animate({scrollTop: position});
	}

	$next_bt.on('click', (e) => {
		e.preventDefault()		
		kmsf_showTab(currentTab+1)
		kmsf_scroll()
	})

	$prev_bt.on('click', (e) => {
		e.preventDefault()
		kmsf_showTab(currentTab-1)
		kmsf_scroll()
	})

	$form.submit(function (e) {
		return false;
	})


	document.addEventListener( 'wpcf7invalid', function( event ) {
		setTimeout( function() {

			step_el_i = $('#' + event.detail.unitTag + ' .wpcf7-not-valid').eq(0).closest('.kariris_multistep_step').index()
			kmsf_showTab(step_el_i)
			
		}, 100);
	}, false );


	$form.find("input").on('keyup', function (e) {
	    if (e.key === 'Enter' || e.keyCode === 13) {
	    	if (currentTab < $steps.length-1) {
				kmsf_showTab(currentTab+1)
			}
	    }
	});



});