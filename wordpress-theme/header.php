<?php
/**
 * The header for the theme
 *
 * @package CAME_Revamp
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#main-content"><?php esc_html_e( 'Skip to content', 'came-revamp' ); ?></a>

    <header id="masthead" class="site-header">
        <div class="container">
            <div class="site-branding">
                <?php
                if ( has_custom_logo() ) :
                    the_custom_logo();
                else :
                    ?>
                    <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a></h1>
                    <p class="site-description"><?php bloginfo( 'description' ); ?></p>
                <?php endif; ?>
            </div>

            <nav id="site-navigation" class="main-navigation">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'fallback_cb'    => false,
                ) );
                ?>
            </nav>

            <?php
            // Language switcher (WPML support)
            if ( function_exists( 'came_revamp_language_switcher' ) ) :
                came_revamp_language_switcher();
            endif;
            ?>
        </div>
    </header>
