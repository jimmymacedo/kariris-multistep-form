<?php
/**
 * @package Kariris_MultiStep_Form

Plugin Name:Kariris Multistep Form
Plugin URI: https://jimmy.dev.br/
Description:
Version: 0.3
Author: Jimmy Macedo
Author URI: https://jimmy.dev.br
License: 
Text Domain: kariris_multiStep_form
*/


define( 'KARIRIS_MSF', true );
define( 'KARIRIS_MSF_PATH', plugin_dir_path( __FILE__ ) );
define( 'KARIRIS_MSF_BASENAME', plugin_basename( __FILE__ ) );

define( 'KARIRIS_MSF_DIR_URL', plugin_dir_url( __FILE__ ) );


function kariris_multistep_form_init() {

	require_once 'inc/shortcodes/kariris_multistep_form.php';
	require_once 'inc/shortcodes/kariris_multistep_step.php';

} 

add_action('init', 'kariris_multistep_form_init', 10);

add_filter( 'wpcf7_form_elements', 'kariris_msf_wpcf7_form_elements' );

function kariris_msf_wpcf7_form_elements( $form ) {
	$form = do_shortcode( $form );
	return $form;
}