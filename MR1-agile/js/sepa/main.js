define(['selectize', 'underscore','picker.date'], function(selectize, _, datepicker) {
    //console.log(selectize);
	$('.fieldset__input').pickadate();
    $.getJSON("/rpc/sepa/getFundTransferEntryCharacteristics").done(function(xhr) {
            var items =[];
            _.map(xhr.value.originatorAccounts.ownOriginatorAccounts,
                function(accountType) {
                    return _.map(accountType,function(data){
                        items.push(data);
                    });
                });
            console.log(items);
            /*$('.select-account').selectize({
                options: items,
                optgroups:
            });*/
            var types = _.unique(_.map(items,function(item){return item.type;}));
            types = _.map(types,function(type) {return {value:type,label:type}});
            console.log(types);

            var $select = $('.select-account').selectize({
                options: items,
                optgroups:types,
                optgroupField:'type',
                optgroupLabelField:'label',
                optgroupValueField:'value',
                labelField:'alias',
                valueField:'iban',
                searchField:['alias','iban'],
                onChange:function(value){
                    var s = _.find(items,function(data) {return data.iban === value});
                    $('.selected-item .iban-label').text(s.iban);
                    $('.selected-item .amount-label').text(s.balance);
                    console.log(s);
                },
                render: {
                    option: function(data, escape) {
                        return '<div><div class="optgroup-option"><span class="optgroup-iban">' + escape(data.iban) +'</span><span class="hello_icon"></span><span class="optgroup-amount"><span>'+ escape(data.balance) +'</span><span>'+ escape(data.currency) +' </span></div><span class="optgroup-name">' + escape(data.alias) + '</span></div>';
                    }
                }
            });
            $('.select-message').selectize({
                options: [{
                    value: 'No Message',
                    name: 'No Message'
                }, {
                    
                    value: 'Structured Message',
                    name: 'Structured Message'
                }, {
                    
                    value: 'Free Text',
                    name: 'Free Text'
                }, {
                    
                    value: 'Euro Message',
                    name: 'Euro Message'
                }],
                labelField: 'name',
            });
        });

});