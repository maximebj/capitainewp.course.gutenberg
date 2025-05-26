<?php

# Récupérer les attributs du bloc (équivalent PHP de useBlockProps())
$block_props = get_block_wrapper_attributes();

# Récupérer le nombre de posts à afficher
$number_of_posts = $attributes['numberOfPosts'];

# Créer une requête pour récupérer les posts
$args = [
  'post_type' => 'post',
  'posts_per_page' => $number_of_posts,
];

$query = new WP_Query($args);

# Si aucun post n'est trouvé, on ne rend rien
if (!$query->have_posts()) {
  return;
}

?>
<div <?php echo $block_props; ?>>
  <h2><?php _e('Latest posts', 'capitainewp'); ?></h2>
  <ul class="wp-block-capitainewp-entityrecords__list">
    <?php while ($query->have_posts()) : $query->the_post(); ?>
      <li class="wp-block-capitainewp-entityrecords__post">
        <?php echo wp_get_attachment_image(get_post_thumbnail_id(), 'full'); ?>
        <h3><?php the_title(); ?></h3>
        <div class="wp-block-capitainewp-entityrecords__excerpt">
          <?php the_excerpt(); ?>
        </div>
        <p class="wp-block-capitainewp-entityrecords__meta">
          <?php _e('Published on', 'capitainewp'); ?>
          <?php the_date(); ?>
          <?php _e('by', 'capitainewp'); ?>
          <?php the_author(); ?>
        </p>
      </li>
    <?php endwhile; ?>
  </ul>
</div>