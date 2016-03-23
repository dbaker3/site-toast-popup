<?php
/*
Plugin Name: Site Toast PopUp
Description: Displays a toast-style popup banner accross bottom of site.
Version: 1.0
Plugin URI: https://github.com/dbaker3/site-toast-popup
Author: David Baker - Milligan College
Author URI: https://github.com/dbaker3
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

function sitetoastpopup_enqueue_files() {
    wp_enqueue_style('sitetoastpopup_css', plugins_url('site-toast-popup.css', __FILE__), array(), filemtime(dirname(__FILE__) . '/site-toast-popup.css'), 'all');
    wp_enqueue_script('sitetositetoastpopup_js', plugins_url('site-toast-popup.js', __FILE__), array('jquery'), filemtime(dirname(__FILE__) . '/site-toast-popup.js'), true);
}
add_action('wp_enqueue_scripts', 'sitetoastpopup_enqueue_files');

function display_site_toast_popup() {
    $html = '
    <div id="sitetoastpopup" class="">
        Need help using the site?
        <a href="http://gots.library.milligan.edu/tutorial/welcome-to-the-milligan-libraries-webpage/">Use the tutorial</a>
        <div class="closer">x</div>
    </div>';
    echo $html;
}
add_action('wp_footer','display_site_toast_popup');