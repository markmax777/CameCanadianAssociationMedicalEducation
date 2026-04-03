# CAME Revamp WordPress Theme

A modern, professional WordPress theme for the Canadian Association for Medical Education (CAME).

## Installation

1. Download the theme folder
2. Compress it as a ZIP file named `came-revamp.zip`
3. Go to WordPress Admin → Appearance → Themes
4. Click "Add New" → "Upload Theme"
5. Choose the ZIP file and click "Install Now"
6. Click "Activate"

## Theme Features

### Core Features
- ✅ Fully recognized by WordPress
- ✅ WPBakery Page Builder compatible
- ✅ Shortcode ready
- ✅ WPML/translation ready
- ✅ Responsive design foundation
- ✅ Custom logo support
- ✅ Navigation menus (Primary + Footer)
- ✅ Widget areas (Sidebar + 4 Footer areas)
- ✅ Featured images support

### CAME Branding
- **Color Scheme**: Navy (#0B2D5B), Sky Blue (#4FA3FF), Light Blue (#7FC4FF)
- **Typography**: Inter font family
- **Social Media**: X (Twitter) integration

### Compatible With
- WPBakery Page Builder
- WPML (multilingual)
- WordPress 6.0+
- PHP 7.4+

## File Structure

```
came-revamp/
├── style.css          (Required - Theme header & styles)
├── functions.php      (Required - Theme functions)
├── index.php          (Required - Main template)
├── header.php         (Header template)
├── footer.php         (Footer template)
├── page.php           (Page template)
├── single.php         (Single post template)
├── js/
│   └── main.js       (JavaScript file)
└── README.md         (This file)
```

## Usage with WPBakery

1. Install and activate WPBakery Page Builder plugin
2. Create a new page
3. Click "Backend Editor" or "Frontend Editor"
4. Build your page using WPBakery elements
5. The theme will automatically support it

## Usage with Shortcodes

Simply add your shortcodes in the WordPress editor. The theme provides a clean foundation for shortcode content.

## Customization

### Logo
Go to: **Appearance → Customize → Site Identity → Logo**

### Menus
Go to: **Appearance → Menus**
- Create a menu for "Primary Menu" (main navigation)
- Create a menu for "Footer Menu"

### Widgets
Go to: **Appearance → Widgets**
- Sidebar
- Footer 1, 2, 3, 4 (for footer columns)

### Colors
The theme uses CSS variables defined in `style.css`:
- `--color-primary`: #0B2D5B (Navy)
- `--color-secondary`: #4FA3FF (Sky Blue)
- `--color-accent`: #7FC4FF (Light Blue)

## Contact Information (Pre-configured)

The footer includes CAME's contact information:
- Address: 150 Elgin Street, 10th Floor, Ottawa, Ontario K2P 1L4
- Phone: 613-730-8173
- Fax: (613) 730-1196
- Email: came@afmc.ca
- Social: https://x.com/cameacem

## Support

For theme issues or questions, contact the CAME development team.

## License

GNU General Public License v2 or later
http://www.gnu.org/licenses/gpl-2.0.html

---

**Version**: 1.0.0  
**Author**: CAME Development Team  
**Last Updated**: 2026
