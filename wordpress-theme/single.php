<?php
/**
 * The template for displaying all single posts
 *
 * @package CAME_Revamp
 */

get_header(); ?>

<main id="main-content" class="site-main">
    <div class="container">
        
        <?php while ( have_posts() ) : the_post(); ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                
                <header class="entry-header">
                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                    
                    <div class="entry-meta">
                        <span class="posted-on">
                            <?php echo get_the_date(); ?>
                        </span>
                        <span class="byline">
                            <?php esc_html_e( 'by', 'came-revamp' ); ?> 
                            <?php the_author(); ?>
                        </span>
                        <?php if ( has_category() ) : ?>
                            <span class="cat-links">
                                <?php the_category( ', ' ); ?>
                            </span>
                        <?php endif; ?>
                    </div>
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
                    <?php if ( has_tag() ) : ?>
                        <div class="tags-links">
                            <?php the_tags( '<strong>' . esc_html__( 'Tags:', 'came-revamp' ) . '</strong> ', ', ' ); ?>
                        </div>
                    <?php endif; ?>
                </footer>

            </article>

            <?php
            // Previous/Next post navigation
            the_post_navigation( array(
                'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'came-revamp' ) . '</span> <span class="nav-title">%title</span>',
                'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'came-revamp' ) . '</span> <span class="nav-title">%title</span>',
            ) );
            ?>

            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;
            ?>

        <?php endwhile; ?>

    </div>
</main>

<?php get_footer(); ?>
