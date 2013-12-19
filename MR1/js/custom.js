$(document).ready(function() {
	$('.selected_details__account').on('click', function() {
		$('.flyout_selection').toggleClass('flyout_active');
		$('.dropdown_arrow').toggleClass('dropdown-active');
		$(".flyout_list_items").removeClass('kartyea');
		setTimeout(function () {
			$(".flyout_list_items").addClass('kartyea');
		}, 200);
		
			
	});
		
	


});