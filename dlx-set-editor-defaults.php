<?php
/**
 * Plugin Name:       DLX Set Editor Defaults (sample plugin)
 * Plugin URI:        https://github.com/DLXPlugins/dlx-set-editor-defaults
 * Description:       A plugin demonstrating setting block defaults.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            DLX Plugins
 * Author URI:        https://dlxplugins.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dlx-set-editor-defaults
 * Domain Path:       /languages
 *
 * @package DLXSetEditorDefaults
 */

namespace DLXPlugins\DLXSetEditorDefaults;

/**
 * Enqueue JS file for setting block defaults.
 */
function enqueue_block_editor_assets() {
	wp_enqueue_script(
		'dlx-set-editor-defaults',
		plugins_url( 'js/set-editor-defaults.js', __FILE__ ),
		array(),
		'1.0.0',
		true
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
