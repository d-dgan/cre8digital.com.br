<?php
define( 'WPCACHEHOME', '/home/u818122065/domains/cre8digital.com.br/public_html/wp-content/plugins/wp-super-cache/' );
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u818122065_cre8' );

/** Database username */
define( 'DB_USER', 'u818122065_cre8us' );

/** Database password */
define( 'DB_PASSWORD', 'Mix4p4039*' );

/** Database hostname */
define( 'DB_HOST', 'sql813.main-hosting.eu' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Xy+F}v},B](Vb/Mpr^7p2-A&x$b bU9Wi336u_T>df:}*Z-R8i~?gPe+=|~/HJ{?' );
define( 'SECURE_AUTH_KEY',  '~>:b(j/8nGi1&]C303`^b5,+[7  ;5d>%rlDifu&$2.5hnD7NEur4094025jQ{c!' );
define( 'LOGGED_IN_KEY',    '/q{%+kZsw7&_*8=5Z(-@y4GSDJ/=,V75 5?B%JV3Vt79o<*?TX<jXQ!}9lMJ7Zw_' );
define( 'NONCE_KEY',        '4L#vS))qbD2*7|(oI^6u$|5_R>]AzG,Z@jg9UJ;qP>hA,1)axiKeUr2e4;y.z([?' );
define( 'AUTH_SALT',        'wWMwkt3}Oi~lWD=+V;KY1/`dtH< k#(Q?}b@6)SRhsjX {;o#MFEULe.]=#SI6u*' );
define( 'SECURE_AUTH_SALT', 'H//}-&|kv|G$<+4!K6/qjhn?=q<xn=CPOw$H%Ss0mL/lnI[w!gI{2mQ=$*zN9Wtn' );
define( 'LOGGED_IN_SALT',   'mPoeJWI]cSJ*;C)nASS#(GCzW)BEjA} Zw,g4g}CT#[D#]Sk<Ont6RQ;yDECV{nl' );
define( 'NONCE_SALT',       'X<Z.yLBPQV#)i0zXqUM5]u SX>8vEbY&P=YP{e-%SgL:{}48sL:atCO;`FwD7)uP' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
