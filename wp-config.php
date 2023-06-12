<?php
define( 'WP_CACHE', false ); // Added by WP Rocket

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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mcwebadmin' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         'vQ6f>ELZ&pj~3U.SK{9H-M;Qh_KH^dzrJR>BqX?izgnkt9q`#Oj]OX5A<O86uqep' );
define( 'SECURE_AUTH_KEY',  'uY$7|`]5D~}p`5LO$-64x|9^dBCVBcG1%TrM(U ,~B 5i2XsJ0:WA0a%jYNk^xY,' );
define( 'LOGGED_IN_KEY',    ':=x/uR(lW3Yzs>AA>F:LPE~_Z~[&dDO8zEBZ5<,s]$~0hb,$23grqr~pRRYa *@3' );
define( 'NONCE_KEY',        'jk#ID^P$,+/xm:kk?>.V5S0/RjtYz=agj!)(n0ETH[YqL3p!y%E5(h$9wn)Z@NYC' );
define( 'AUTH_SALT',        '$Z4+~@EJaY>:)6t^v=(b1Xv?^eS&>F(bixd1 FlvD+cH{0l{?nAbEM.:Otr+TL5}' );
define( 'SECURE_AUTH_SALT', '#(VE{W${yB1h;wGFfRCU:&KmlR.0RG`<!:pB]77dFXn1TQI,,M6EAkL^$NJUmNBv' );
define( 'LOGGED_IN_SALT',   'hQm4g$eBy-v91f)p:OjDtIZEq6?$DNN!g0c%gT]zk1M?#<5lG?Qo$a^,B-{oq&2b' );
define( 'NONCE_SALT',       '^9qZAa,R7#>?GF$!Sl!:qyk&((^VZ;=^mbL=I(%upITE~r.#+@Y7;<9-f.W!Ec>@' );

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
