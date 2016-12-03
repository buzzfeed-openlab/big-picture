$(document).ready(function(){

	// _.each(trumptweetsdata, function(value, index){
	// 	var row = $('<tr>'+
 //                       '<th class="tweet_item">'+ value.text +'</th>'+
 //                       '<th class="date_item">'+ value.date +'</th>'+
 //                       '<th class="link_item">'+
 //                       		'<i class="fa fa-external-link" aria-hidden="true"></i> '+ 
 //                       		'<a href="https://twitter.com/realdonaldtrump/status/'+ value.links+'" target="_blank">Tweet id: '+ value.links+'</a>'+
 //                       	'</th>'+
 //                   '</tr>');
	// 	$('#tweet_table').append(row);
	// })

  $('#table').DataTable({
    responsive: true
  });
		

});
