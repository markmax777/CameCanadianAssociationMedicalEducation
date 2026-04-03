<?php
/**
 * The template for displaying the footer
 *
 * @package CAME_Revamp
 */
?>

    <footer id="colophon" class="site-footer">
        <div class="container">
            
            <?php if ( is_active_sidebar( 'footer-1' ) || is_active_sidebar( 'footer-2' ) || is_active_sidebar( 'footer-3' ) || is_active_sidebar( 'footer-4' ) ) : ?>
                <div class="footer-widgets">
                    <div class="footer-widget-area">
                        <?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
                            <div class="footer-column">
                                <?php dynamic_sidebar( 'footer-1' ); ?>
                            </div>
                        <?php endif; ?>

                        <?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
                            <div class="footer-column">
                                <?php dynamic_sidebar( 'footer-2' ); ?>
                            </div>
                        <?php endif; ?>

                        <?php if ( is_active_sidebar( 'footer-3' ) ) : ?>
                            <div class="footer-column">
                                <?php dynamic_sidebar( 'footer-3' ); ?>
                            </div>
                        <?php endif; ?>

                        <?php if ( is_active_sidebar( 'footer-4' ) ) : ?>
                            <div class="footer-column">
                                <?php dynamic_sidebar( 'footer-4' ); ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>

            <div class="site-info">
                <div class="footer-contact">
                    <p><strong>Canadian Association for Medical Education</strong></p>
                    <p>150 Elgin Street, 10th Floor</p>
                    <p>Ottawa, Ontario K2P 1L4</p>
                    <p>Phone: 613-730-8173</p>
                    <p>Fax: (613) 730-1196</p>
                    <p>Email: <a href="mailto:came@afmc.ca">came@afmc.ca</a></p>
                </div>

                <div class="footer-social">
                    <a href="https://x.com/cameacem" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>

                <div class="copyright">
                    <p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'came-revamp' ); ?></p>
                    
                    <?php
                    wp_nav_menu( array(
                        'theme_location' => 'footer',
                        'menu_id'        => 'footer-menu',
                        'depth'          => 1,
                        'fallback_cb'    => false,
                    ) );
                    ?>
                </div>
            </div>
        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
