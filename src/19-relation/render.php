<?php

# Récupérer les attributs du bloc (équivalent PHP de useBlockProps())
$block_props = get_block_wrapper_attributes();

# WP Query pour récupérer la publication
$args = [
  'p' => $attributes['postID'],
];

$query = new WP_Query($args);

if ($query->have_posts()):
  while ($query->have_posts()):
    $query->the_post();

    # Récupération de l'image, l'auteur et la catégorie (s'ils sont définis)
    $image = false;
    $author = false;
    $category = false;

    if ($attributes['showImage'] !== false) {
      $image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'medium');
      $image = $image[0];
    }

    if ($attributes['showAuthor'] !== false) {
      $author = get_the_author_meta('display_name');
    }

    if ($attributes['showCategory'] !== false) {
      $categories = get_the_category();

      if (!empty($categories)) {
        $category = $categories[0]->name;
      }
    }

?>
    <div <?php echo wp_kses_data($block_props); ?>>
      <?php if ($image): ?>
        <a href="<?php the_permalink(); ?>" class="wp-block-capitainewp-post__image" style="background-image: url('<?php echo $image; ?>')">
        </a>
      <?php endif; ?>
      <div class="wp-block-capitainewp-post__content">
        <p class="wp-block-capitainewp-post__title">
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </p>
        <p class="wp-block-capitainewp-post__metas">
          <em>
            <?php if ($category): ?>
              <span> <?php _e('In', 'capitainewp'); ?> <?php echo $category; ?> </span>
            <?php endif; ?>
            <?php if ($author): ?>
              <span> <?php _e('By', 'capitainewp'); ?> <?php echo $author; ?> </span>
            <?php endif; ?>
          </em>
        </p>
        <div class="wp-block-capitainewp-post__excerpt">
          <p>
            <?php the_excerpt(); ?>
          </p>
        </div>
        <p class="wp-block-capitainewp-post__actions">
          <a href="<?php the_permalink(); ?>" class="wp-block-capitainewp-post__button">
            <?php _e('Read more', 'capitainewp'); ?>
          </a>
        </p>
      </div>
    </div>
<?php
  endwhile;
endif;

wp_reset_postdata();
