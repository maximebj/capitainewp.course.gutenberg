<?php

/**
 * Plugin Name:       Capitaine WP • Blocs • Formation Gutenberg V4
 * Description:       Les blocs de la formation Gutenberg 2025 de Capitaine WP
 * Version:           4.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Maxime BERNARD-JACQUET
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       capitainewp-blocks
 * Domain Path: 		  /languages
 *
 * @package CreateBlock
 */


# Important pour sécuriser le plugin contre une exécution directe
defined('ABSPATH') || exit;


# Déclarer automatiquement les blocs dans l'éditeur
function capitainewp_blocks_register_blocks()
{
	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}

	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}
add_action('init', 'capitainewp_blocks_register_blocks');


# Déclarer une nouvelle catégorie pour mes blocs
function capitainewp_blocks_register_block_categories($categories)
{
	return array_merge(
		[['slug' => 'capitainewp', 'title' => __('Capitaine WP Blocks', 'capitainewp-blocks')]],
		$categories,
	);
}
add_filter('block_categories_all', 'capitainewp_blocks_register_block_categories');


# Hook le theme.json pour ajouter les styles
function capitainewp_blocks_filter_theme_json($theme_json)
{
	# Récupérer les données du theme.json
	$data = $theme_json->get_data();

	# Insérer nos nouvelles couleurs dans la section custom
	$data['settings']['custom']['alert'] = [
		'advice' => '#83bd71',
		'warning' => '#ffc334',
		'avoid' => '#ff2952',
		'info' => '#48add8',
	];

	# Mettre à jour les données du theme.json
	return $theme_json->update_with($data);
}
add_filter('wp_theme_json_data_theme', 'capitainewp_blocks_filter_theme_json');


# Charger les traductions des scripts des blocs
function capitainewp_set_script_translations()
{
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';

	foreach ($manifest_data as $block_data) {
		if (!isset($block_data['editorScript'])) {
			continue;
		}

		wp_set_script_translations(
			generate_block_asset_handle($block_data['name'], "editorScript"),
			'capitainewp-blocks',
			plugin_dir_path(__FILE__) . 'languages'
		);
	}
}
add_action('init', 'capitainewp_set_script_translations');
