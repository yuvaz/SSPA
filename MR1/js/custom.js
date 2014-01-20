$(document).ready(function() {
	$('.selected_details__account').on('click', function() {
		$('.flyout_selection').toggleClass('flyout_active');
		$('.selected_details__account.dropdown_arrow').toggleClass('dropdown-active');
		$(".flyout_list_items").removeClass('show_listitems');
		setTimeout(function () {
			$(".flyout_list_items").addClass('show_listitems');
		}, 300);
		
			
	});
		
	$('.show_filters').on('click', function() {
		  $('.filter_block').slideToggle();
	 });
	 $('.filter_period').on('click', function() {
		  $('.option_period').toggleClass('show_active');
	 });


});