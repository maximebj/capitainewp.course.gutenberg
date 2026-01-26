<?php

# Récupérer les attributs du bloc (équivalent PHP de useBlockProps())
$block_props = get_block_wrapper_attributes();

# Récupérer le nombre de posts à afficher
$show_count = $attributes['showCount'];
$hide_empty = $attributes['hideEmpty'];

# Créer une requête pour récupérer les catégories
$args = [
  'hide_empty' => $hide_empty,
];

$categories = get_categories($args);

# Si aucune catégorie n'est trouvée, on ne rend rien
if (empty($categories)) {
  return;
}

?>
<div <?php echo wp_kses_data($block_props); ?>>
  <h2><?php _e('Categories', 'capitainewp'); ?></h2>
  <ul>
    <?php foreach ($categories as $category) : ?>
      <li>
        <a href="<?php echo esc_url($category->link); ?>">
          <?php echo esc_html($category->name); ?>
          <?php if ($show_count) : ?>
            (<?php echo esc_html($category->count); ?>)
          <?php endif; ?>
        </a>
      </li>
    <?php endforeach; ?>
  </ul>
</div>