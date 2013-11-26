$(document).ready(function() {
    $('.bnppf_login_rdb_numbers').change(function(event) {
		$('.bnppf_login_radiogroup').removeClass('contract_highlight');
        $(event.target).parent().addClass('contract_highlight');
    });
});
