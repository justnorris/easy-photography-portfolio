<?php
/**
 * Generic Archive Layout
 * @since    1.0.0
 * @modified 1.4.6
 */
?>

<?php phort_get_template( 'archive/description' ); ?>

<div <?php phort_class( 'PP_Archive_Filter' ); ?> >
    <div <?php phort_class( 'PP_Archive_Filter_Categories' ); ?> >
        <span> <?php esc_html("Categories:") ?></span>
        <?php
         foreach  (get_terms( 'phort_post_category' ) as $taxonomy) {
             echo '<a href="' . esc_url(get_category_link($taxonomy->term_id)) . '">' . $terms[ (int) $taxonomy->term_id ] = esc_html( $taxonomy->name ) . ' ' . '</a>';
         }
         ?>
    </div>
</div>

<div <?php phort_class( 'PP_Archive_Container' ); ?>>

	<?php do_action( 'phort/archive/loop/start' ); ?>

	<?php while ( have_posts() ) : the_post(); ?>
		<?php phort_get_template( 'archive/entry' ); ?>
	<?php endwhile; ?>

	<?php do_action( 'phort/archive/loop/end' ); ?>

</div>