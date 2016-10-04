<?php


namespace Photography_Portfolio\Frontend\Layout\Single;


use CLM\Metamod;
use Photography_Portfolio\Frontend\Layout_Factory;

class Single_Portfolio_Factory extends Layout_Factory {

	function find_slug() {

		return cmp_get_layout();
	}


	public function get_layout_class( $layout_slug ) {

		return CMP_Instance()->layouts->find_class( 'single', $layout_slug );
	}
}