<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 *
 * @package CAME_Revamp
 */

get_header(); ?>

<main id="main-content" class="site-main">
    <div class="container">
        
        <?php if ( have_posts() ) : ?>

            <?php while ( have_posts() ) : the_post(); ?>

                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    
                    <header class="entry-header">
                        <?php
                        if ( is_singular() ) :
                            the_title( '<h1 class="entry-title">', '</h1>' );
                        else :
                            the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '">', '</a></h2>' );
                        endif;
                        ?>
                    </header>

                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="post-thumbnail">
                            <?php the_post_thumbnail( 'large' ); ?>
                        </div>
                    <?php endif; ?>

                    <div class="entry-content">
                        <?php
                        the_content();
                        
                        wp_link_pages( array(
                            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'came-revamp' ),
                            'after'  => '</div>',
                        ) );
                        ?>
                    </div>

                    <footer class="entry-footer">
                        <?php
                        if ( ! is_singular() ) :
                            echo '<p class="read-more"><a href="' . esc_url( get_permalink() ) . '" class="btn">' . esc_html__( 'Read More', 'came-revamp' ) . '</a></p>';
                        endif;
                        ?>
                    </footer>

                </article>

            <?php endwhile; ?>

            <?php
            // Pagination
            the_posts_pagination( array(
                'mid_size'  => 2,
                'prev_text' => __( '&laquo; Previous', 'came-revamp' ),
                'next_text' => __( 'Next &raquo;', 'came-revamp' ),
            ) );
            ?>

        <?php else : ?>

            <article class="no-results not-found">
                <header class="entry-header">
                    <h1 class="entry-title"><?php esc_html_e( 'Nothing Found', 'came-revamp' ); ?></h1>
                </header>

                <div class="entry-content">
                    <p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'came-revamp' ); ?></p>
                    <?php get_search_form(); ?>
                </div>
            </article>

        <?php endif; ?>

    </div>
</main>

<?php get_footer(); ?>
