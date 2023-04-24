<?php 
/**
 * @package Kariris_MultiStep_Form
 * 
 **/
add_shortcode( 'kariris_multistep_form', 'kariris_multistep_form_callback' );
function kariris_multistep_form_callback( $atts, $content ) {


	wp_enqueue_style('kariris_msf-css', KARIRIS_MSF_DIR_URL .'/assets/css/kariris_msf.css');
    wp_enqueue_script('kariris_msf-js', KARIRIS_MSF_DIR_URL .'/assets/js/kariris_msf.js?v='.rand(0, 100000), array('jquery'));


	ob_start();
	?>	
		<div class="kariris_multistep_form">
			<div class="kmsf_progressbar">
				<ul class="kmsf_progressbar_itens">
				</ul>
				<div class="bar">
					<div class="completed"></div>
				</div>
			</div>
			<div class="kariris_multistep_steps">
				<?php echo do_shortcode($content); ?>
			</div>

			<div class="kmsf_navigation">
				<a href="" class="kmsf_prev" style="display: none">
					Voltar
				</a>
				<a href="" class="kmsf_next" style="display: none">
					Continuar
				</a>
			</div>
		</div>
	<?php

	return ob_get_clean();
}