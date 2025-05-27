<?php

# Récupérer les attributs du bloc (équivalent PHP de useBlockProps())
$block_props = get_block_wrapper_attributes();

# Créer une requête pour récupérer les posts
$args = [
  'post_type' => 'post',
  'posts_per_page' => -1,
];

$query = new WP_Query($args);

# Si aucun post n'est trouvé, on ne rend rien
if (!$query->have_posts()) {
  return;
}

# Récupérer les catégories
$categories = get_categories([
  'hide_empty' => false,
]);

?>
<div <?php echo $block_props; ?>>
  <h2><?php _e('Filter posts', 'capitainewp'); ?></h2>
  <ul class="wp-block-capitainewp-interactivity__categories">
    <?php foreach ($categories as $category) : ?>
      <li><?php echo $category->name; ?></li>
    <?php endforeach; ?>
  </ul>
  <ul class="wp-block-capitainewp-interactivity__posts">
    <?php while ($query->have_posts()) : $query->the_post(); ?>
      <li><?php the_title(); ?></li>
      </li>
    <?php endwhile; ?>
  </ul>
</div>