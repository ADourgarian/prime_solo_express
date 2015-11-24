
    $.ajax({
        url: '/balance'
    })
    .done(function(dis) {
    	console.log(dis);
    	$('p').append(dis);
    });