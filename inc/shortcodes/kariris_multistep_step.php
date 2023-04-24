<?php 
/**
 * @package Kariris_MultiStep_Form
 * 
 **/
add_shortcode( 'kariris_multistep_step', 'kariris_multistep_step_callback' );

function kariris_multistep_step_callback( $atts, $content = "" ) {

	$a = shortcode_atts( array(
		'title' => '',
		'title-progress' => '',
		'no-index' => '',
	), $atts );



	if (!$a['title-progress']) $a['title-progress'] = $a['title'];

	ob_start();
	?>	
		<div class="kariris_multistep_step" data-t34="1" <?php if ($a['no-index'] == 'true') echo ' data-no-index="true" '  ?>>
		<h3 class="kmsf_step_title" title-progress="<?php echo $a['title-progress'] ?>"><?php echo $a['title'] ?></h3>
			<div class="kmsf_content">
				<?php echo do_shortcode($content); ?>
			</div>

		</div>	
	<?php

	return ob_get_clean();
}	