<?php

# Charger le fichier WordPress qui gère les extensions
require_once(ABSPATH . 'wp-admin/includes/plugin-install.php');

# Charger le fichier des fonctions de mise en forme des données
require_once(plugin_dir_path(dirname(dirname(__FILE__))) . 'plugins-utils.php');

# Si aucun slug n'est fourni, on n'affiche rien
if (is_null($attributes['slug'])) {
  return '';
}

# On prépare la requête pour wp.org
$request = [
  'slug' => $attributes['slug'],
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

<div <?php echo get_block_wrapper_attributes(); ?>>
  <div class="wp-block-capitainewp-plugin__content">
    <a href="<?php echo $plugin->downloadLink ?>" class="wp-block-capitainewp-plugin__picture">
      <img src="<?php echo $plugin->icon ?>" alt="<?php echo $plugin->name ?>" />
    </a>

    <div class="wp-block-capitainewp-plugin__main">
      <p class="wp-block-capitainewp-plugin__title">
        <a href="<?php echo $plugin->downloadLink ?>"><?php echo $plugin->name ?></a>
      </p>
      <p class="wp-block-capitainewp-plugin__desc"><?php echo $plugin->description ?></p>
      <p class="wp-block-capitainewp-plugin__author">
        <?php _e("by", "capitainewp-blocks") ?>
        <a href="<?php echo $plugin->homepage ?>" target='_blank'>
          <?php echo $plugin->author ?>
        </a>
      </p>
    </div>
  </div>

  <footer class="wp-block-capitainewp-plugin__footer">
    <div class="wp-block-capitainewp-plugin__meta">
      <p class="wp-block-capitainewp-plugin__rating">
        <span class="wp-block-capitainewp-plugin__stars">
          <?php echo $plugin->stars ?>
        </span>
        <span class="wp-block-capitainewp-plugin__num-rating"><?php echo $plugin->numRatings ?></span>
      </p>
      <p class="wp-block-capitainewp-plugin__active">
        <span><?php echo $plugin->activeInstalls ?></span>
        <?php _e("active installs", "capitainewp-blocks") ?>
      </p>
    </div>
    <div class="wp-block-capitainewp-plugin__download">
      <a
        href="<?php echo $plugin->downloadLink ?>"
        target="_blank"
        class="wp-block-capitainewp-plugin__button">
        <?php _e("Official page", "capitainewp-blocks") ?>
      </a>
    </div>
  </footer>
</div>