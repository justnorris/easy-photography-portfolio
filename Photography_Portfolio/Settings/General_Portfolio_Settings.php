<?php


namespace Photography_Portfolio\Settings;


use Photography_Portfolio\Contracts\Options_Page_Settings_Interface;


/**
 * Class General_Portfolio_Settings
 * @package Photography_Portfolio\Settings
 */
class General_Portfolio_Settings implements Options_Page_Settings_Interface {

	protected $defaults = [];


	/**
	 * General_Portfolio_Settings constructor.
	 */
	public function __construct() {

		/**
		 * Allow the defaults to be modified from other themes/plugins
		 * Note: Defaults are only set after the user clicks “Save Changes” in Portfolio Settings.
		 */
		$this->defaults = apply_filters(
			'phort/general_portfolio_settings/defaults',
			[
				'portfolio_layout'           => '',
				'single_portfolio_layout'    => '',
				'archive_enable_description' => false,
				'portfolio_enable_subtitle'  => true,
				'portfolio_show_image_count' => 'disable',

			]
		);
	}


	/**
	 * This will set `General_Portfolio_Settings` title in WordPress Dashboard
	 * @return string
	 */
	public function get_page_title() {

		return esc_html__( 'Portfolio Settings', 'phort-plugin' );

	}


	/**
	 *
	 * Use CMB2 to set the fields.
	 * This is where all the settings are.
	 *
	 * @param \CMB2 $cmb
	 */
	public function set_fields( \CMB2 $cmb ) {


		$PP = phort_instance();

		$archive_layouts     = $PP->layouts->available_layouts( 'archive' );
		$single_layouts      = $PP->layouts->available_layouts( 'single' );
		$has_layout_settings = ( count( $archive_layouts ) > 1 || count( $single_layouts ) > 1 );


		/**
		 *
		 * ======== Core Settings
		 *
		 */
		$cmb->add_field(
			[
				'name' => 'Main',
				'type' => 'title',
				'id'   => 'main_settings_title',
			]
		);

		$cmb->add_field(
			[
				'id'               => "portfolio_page",
				'name'             => esc_html__( 'Main Portfolio Page', 'phort-plugin' ),
				'type'             => 'select',
				'show_option_none' => true,
				'options'          => $this->get_all_pages(),


			]
		);

		/**
		 *
		 * ======== Layout Settings
		 *
		 */

		if ( $has_layout_settings ) {
			$cmb->add_field(
				[
					'name' => 'Layout',
					'type' => 'title',
					'id'   => 'layout_settings_title',
				]
			);
		}

		/**
		 * Hide "Single Portfolio Layout" Option, if there is only 1 layout available
		 */
		if ( count( $single_layouts ) > 1 ) {
			$cmb->add_field(
				[
					'name'    => esc_html__( 'Single Portfolio Layout', 'phort-plugin' ),
					'id'      => 'single_portfolio_layout',
					'type'    => 'select',
					'options' => $single_layouts,
					'default' => $this->defaults['single_portfolio_layout'],

				]
			);
		}

		if ( count( $archive_layouts ) > 1 ) {
			$cmb->add_field(
				[
					'name'    => esc_html__( 'Portfolio Archive Layout', 'phort-plugin' ),
					'id'      => 'portfolio_layout',
					'type'    => 'select',
					'options' => $archive_layouts,
					'default' => $this->defaults['portfolio_layout'],

				]
			);
		}


		/**
		 *
		 * ======== Layout Settings
		 *
		 */

		$cmb->add_field(
			[
				'name' => 'Other',
				'type' => 'title',
				'id'   => 'misc_settings_title',
			]
		);

		$cmb->add_field(
			[
				'name' => esc_html__( 'Show Archive Titles & Descriptions', 'phort-plugin' ),
				'desc' => __(
					'"Archives" are places like "Categories" and your "Main Portfolio Page".',
					'phort-plugin'
				),

				'id'      => 'archive_enable_description',
				'type'    => 'checkbox',
				'default' => $this->defaults['archive_enable_description'],

			]
		);


		$cmb->add_field(
			[
				'name'    => esc_html__( 'Subtitles: Enable', 'phort-plugin' ),
				'desc'    => esc_html__( 'This will add a subtitle field to your Portfolio Posts', 'phort-plugin' ),
				'id'      => 'portfolio_enable_subtitle',
				'type'    => 'checkbox',
				'default' => $this->defaults['portfolio_enable_subtitle'],

			]
		);

		$cmb->add_field(
			[
				'id'       => "portfolio_show_image_count",
				'name'     => esc_html__( 'Subtitles: Show image count', 'phort-plugin' ),
				'desc'     => esc_html__( '"Portfolio Subtitles" must be enabled for this setting to work.', 'phort-plugin' ),
				'required' => [ 'portfolio_enable_subtitle', '=', '1' ],

				'type'    => 'select',
				'options' => [
					'disable'      => "Disable",
					'only_missing' => "Only Enable when a sub-title is empty",
					'always'       => 'Always Enable (override sub-titles)',
				],
				'default' => $this->defaults['portfolio_enable_subtitle'],

			]
		);


		/**
		 * Only add Wrapper Class option if theme has no native Photography Portfolio Support
		 */
		if ( ! phort_has_theme_support() ) {
			$cmb->add_field(
				[
					'id'      => "wrapper_class",
					'name'    => esc_html__( 'Wrapper CSS Classes', 'phort-plugin' ),
					'desc'    => esc_html__(
						'Some themes use different wrapper class-names than the standard.
					 You can enter custom CSS classnames here to make the plugin compatible with your theme',
						'phort-plugin'
					),
					'type'    => 'text',
					'default' => '',

				]
			);
		}


	}


	/**
	 * Get all WordPress Pages and return an array that will direclty fit in a select field.
	 * @return array
	 */
	public function get_all_pages() {

		$args = [
			'posts_per_page' => - 1,
			'post_type'      => 'page',
			'post_status'    => 'publish',
		];

		$pages = [];

		foreach ( get_posts( $args ) as $post ) {
			$pages[ (int) $post->ID ] = esc_html( $post->post_title );
		}

		return $pages;
	}
}
