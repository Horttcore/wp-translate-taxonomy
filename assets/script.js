var $singular = $('#custom-taxonomy-name-singular'),
	$plural = $('#custom-taxonomy-name-plural'),
	$copy = $('.copy-to-clipboard');

$singular.keyup(function(){
	var val = '' == $singular.val() ? 'Taxonomy' : $singular.val();
	$('.taxonomy-name-singular.taxonomy-name-uppercase').text(val);
	$('.taxonomy-name-singular.taxonomy-name-lowercase').text(val.toLowerCase());
	$('input[data-translation*="%%Taxonomy%%"]').each(function(i,e){
		jQuery(this).val(jQuery(this).data('translation').replace('%%Taxonomy%%', val));
	});
	$('input[data-translation*="%%taxonomy%%"]').each(function(i,e){
		jQuery(this).val(jQuery(this).data('translation').replace('%%taxonomy%%', val.toLowerCase()));
	});
});

$plural.keyup(function(){
	var val = '' == $plural.val() ? 'Taxonomy' : $plural.val();
	$('.taxonomy-name-plural.taxonomy-name-uppercase').text(val);
	$('.taxonomy-name-plural.taxonomy-name-lowercase').text(val.toLowerCase());
	$('input[data-translation*="%%Taxonomies%%"]').each(function(i,e){
		jQuery(this).val(jQuery(this).data('translation').replace('%%Taxonomies%%', val));
	});
	$('input[data-translation*="%%taxonomies%%"]').each(function(i,e){
		jQuery(this).val(jQuery(this).data('translation').replace('%%taxonomies%%', val.toLowerCase()));
	});
});

$copy.click(function(e){
	e.preventDefault();
	jQuery(this).prev().find('input').select();
	try {
	    var successful = document.execCommand('copy');
	    var msg = successful ? 'successful' : 'unsuccessful';
	  } catch (err) {
	    console.log('Oops, unable to copy');
	  }
});
