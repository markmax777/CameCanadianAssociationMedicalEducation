<?php
/**
 * CAME Revamp Theme Functions
 *
 * @package CAME_Revamp
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Theme Setup
 */
function came_revamp_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails
    add_theme_support( 'post-thumbnails' );

    // Set default thumbnail size
    set_post_thumbnail_size( 1200, 630, true );

    // Add custom image sizes
    add_image_size( 'came-featured', 1200, 630, true );
    add_image_size( 'came-thumbnail', 400, 300, true );

    // Register navigation menus
    register_nav_menus( array(
        'primary'   => __( 'Primary Menu', 'came-revamp' ),
        'footer'    => __( 'Footer Menu', 'came-revamp' ),
    ) );

    // Switch default core markup to output valid HTML5
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Add theme support for selective refresh for widgets
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Add support for custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Add support for editor styles
    add_theme_support( 'editor-styles' );

    // Add support for responsive embeds
    add_theme_support( 'responsive-embeds' );

    // Add support for WPBakery Page Builder
    if ( function_exists( 'vc_set_as_theme' ) ) {
        vc_set_as_theme( true );
    }

    // Load text domain for translations
    load_theme_textdomain( 'came-revamp', get_template_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'came_revamp_setup' );

/**
 * Set the content width
 */
function came_revamp_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'came_revamp_content_width', 1200 );
}
add_action( 'after_setup_theme', 'came_revamp_content_width', 0 );

/**
 * Register widget areas
 */
function came_revamp_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar', 'came-revamp' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Add widgets here to appear in your sidebar.', 'came-revamp' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 1', 'came-revamp' ),
        'id'            => 'footer-1',
        'description'   => __( 'Add widgets here to appear in your footer.', 'came-revamp' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 2', 'came-revamp' ),
        'id'            => 'footer-2',
        'description'   => __( 'Add widgets here to appear in your footer.', 'came-revamp' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 3', 'came-revamp' ),
        'id'            => 'footer-3',
        'description'   => __( 'Add widgets here to appear in your footer.', 'came-revamp' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 4', 'came-revamp' ),
        'id'            => 'footer-4',
        'description'   => __( 'Add widgets here to appear in your footer.', 'came-revamp' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'came_revamp_widgets_init' );

/**
 * Enqueue scripts and styles
 */
function came_revamp_scripts() {
    // Main stylesheet
    wp_enqueue_style( 'came-revamp-style', get_stylesheet_uri(), array(), '1.0.0' );

    // Google Fonts - Inter
    wp_enqueue_style( 'came-revamp-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', array(), null );

    // Main JavaScript
    wp_enqueue_script( 'came-revamp-script', get_template_directory_uri() . '/js/main.js', array( 'jquery' ), '1.0.0', true );

    // Comment reply script
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'came_revamp_scripts' );

/**
 * Custom excerpt length
 */
function came_revamp_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'came_revamp_excerpt_length' );

/**
 * Custom excerpt more text
 */
function came_revamp_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'came_revamp_excerpt_more' );

/**
 * Add custom body classes
 */
function came_revamp_body_classes( $classes ) {
    // Add class if WPBakery is active
    if ( class_exists( 'Vc_Manager' ) ) {
        $classes[] = 'wpbakery-active';
    }

    // Add class for sidebar
    if ( is_active_sidebar( 'sidebar-1' ) ) {
        $classes[] = 'has-sidebar';
    }

    return $classes;
}
add_filter( 'body_class', 'came_revamp_body_classes' );

/**
 * WPML Language Switcher Support
 */
function came_revamp_language_switcher() {
    if ( function_exists( 'icl_get_languages' ) ) {
        $languages = icl_get_languages( 'skip_missing=0&orderby=code' );
        
        if ( ! empty( $languages ) ) {
            echo '<div class="language-switcher">';
            foreach ( $languages as $lang ) {
                $class = $lang['active'] ? 'active' : '';
                echo '<a href="' . esc_url( $lang['url'] ) . '" class="' . esc_attr( $class ) . '">' . esc_html( strtoupper( $lang['code'] ) ) . '</a>';
            }
            echo '</div>';
        }
    }
}

/**
 * Allow SVG uploads
 */
function came_revamp_mime_types( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'came_revamp_mime_types' );

/**
 * Fix SVG thumbnails
 */
function came_revamp_fix_svg() {
    echo '<style>
        .attachment-266x266, .thumbnail img {
            width: 100% !important;
            height: auto !important;
        }
    </style>';
}
add_action( 'admin_head', 'came_revamp_fix_svg' );
