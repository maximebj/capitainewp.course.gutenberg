<?php

# Charger le fichier WordPress qui gère les extensions
require_once(ABSPATH . 'wp-admin/includes/plugin-install.php');

# Charger le fichier des fonctions de mise en forme des données
require_once(plugin_dir_path(dirname(dirname(__FILE__))) . 'plugins-utils.php');

# Si aucun slug n'est fourni, on n'affiche rien
if (is_null($attributes['slug'])) {
  return '';
}

# Récupérer les attributs du bloc (équivalent PHP de useBlockProps())
$block_props = get_block_wrapper_attributes();

# On prépare la requête pour wp.org
$request = [
  'slug' => esc_attr($attributes['slug']),
  'fields' => [
    'title' => true,
    'short_description' => true,
    'active_installs' => true,
    'icons' => true,
    'sections' => false,
  ]
];

# Envoi de la requête vers l'API wp.org
$result = plugins_api('plugin_information', $request);

# Préparation des données dont on aura besoin
$plugin = capitainewp_prepare_plugins_data($result);

?>

<div <?php echo wp_kses_data($block_props); ?>>
  <div class="wp-block-capitainewp-plugin__content">
    <a href="<?php echo esc_url($plugin->downloadLink); ?>" class="wp-block-capitainewp-plugin__picture">
      <img src="<?php echo esc_url($plugin->icon); ?>" alt="<?php echo esc_attr($plugin->name); ?>" />
    </a>

    <div class="wp-block-capitainewp-plugin__main">
      <p class="wp-block-capitainewp-plugin__title">
        <a href="<?php echo esc_url($plugin->downloadLink); ?>"><?php echo esc_html($plugin->name); ?></a>
      </p>
      <p class="wp-block-capitainewp-plugin__desc"><?php echo esc_html($plugin->description); ?></p>
      <p class="wp-block-capitainewp-plugin__author">
        <?php _e("by", "capitainewp-blocks") ?>
        <a href="<?php echo esc_url($plugin->homepage); ?>" target='_blank'>
          <?php echo esc_html($plugin->author); ?>
        </a>
      </p>
    </div>
  </div>

  <footer class="wp-block-capitainewp-plugin__footer">
    <div class="wp-block-capitainewp-plugin__meta">
      <p class="wp-block-capitainewp-plugin__rating">
        <span class="wp-block-capitainewp-plugin__stars">
          <?php echo wp_kses_post($plugin->stars); ?>
        </span>
        <span class="wp-block-capitainewp-plugin__num-rating"><?php echo esc_html($plugin->numRatings); ?></span>
      </p>
      <p class="wp-block-capitainewp-plugin__active">
        <span><?php echo esc_html($plugin->activeInstalls); ?></span>
        <?php _e("active installs", "capitainewp-blocks") ?>
      </p>
    </div>
    <div class="wp-block-capitainewp-plugin__download">
      <a
        href="<?php echo esc_url($plugin->downloadLink); ?>"
        target="_blank"
        class="wp-block-capitainewp-plugin__button">
        <?php _e("Official page", "capitainewp-blocks") ?>
      </a>
    </div>
  </footer>
</div>