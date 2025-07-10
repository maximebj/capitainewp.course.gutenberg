<?php

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
<div
  <?php echo get_block_wrapper_attributes(); ?>
  data-wp-interactive="capitainewp/filter-posts"
  data-wp-watch="callbacks.logChangeCategory">
  <h2><?php _e('Filter posts', 'capitainewp'); ?></h2>
  <ul class="wp-block-capitainewp-interactivity__categories">
    <li
      role="button"
      data-wp-on--click="actions.selectCategory"
      data-wp-context='{"category": "all"}'
      data-wp-class--is-hidden="state.hasNoCategorySelected">✕</li>
    <?php foreach ($categories as $category) : ?>
      <li
        role="button"
        data-wp-on--click="actions.selectCategory"
        data-wp-context='{"category": "<?php echo esc_attr($category->slug); ?>"}'
        data-wp-class--is-active="state.isSelectedCategory"><?php echo $category->name; ?></li>
    <?php endforeach; ?>
  </ul>
  <ul class="wp-block-capitainewp-interactivity__posts">
    <?php while ($query->have_posts()) : $query->the_post(); ?>
      <li
        data-wp-context='{"category": "<?php echo esc_attr(get_the_category()[0]->slug); ?>"}'
        data-wp-class--is-shown="state.isPostDisplayed"><?php the_title(); ?></li>
    <?php endwhile; ?>
  </ul>
</div>