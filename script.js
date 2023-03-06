$(document).ready(function(){
	$(".form_block_cont").submit(function(){ 
		var form = $(this); 
			form.find('#error_mes').html('');
			form.find('[name="checking"]').val('checking');
			form.find('[name="form_url"]').val(location.href);
		var error = false; 
		form.find('input, textarea').each( function(){ 
			if ($(this).val().length < 3) { 
				form.find('#error_mes').append('<p>Пoлe "'+$(this).attr('placeholder')+'" не заполнено!</p>');
				error = true; 
			}
		});
		if (!error) { 
			var data = form.serialize(); 
			$.ajax({ 
				type: 'POST', 
				url: '/caller/send.php', 
				dataType: 'json', 
				data: data, 
					beforeSend: function(data) { 
								form.find('input[type="submit"]').attr('disabled', 'disabled'); 
							},
					success: function(data){ 
							if (data['error']) { 
								console.log(data['error']); 
							} else { 
								/*var data = [];
								data['formname'] = form.find('[name=form_description]').val() + location.href;
								data['username'] = form.find('input[name="user_name"]').val();
								data['userphone'] = form.find('input[name="user_data"]').val();
								data['usermail'] = form.find('input[name="user_data1"]').val();
								roistatGoal.reach({leadName:data['formname'], name: data['username'], phone: data['userphone'], email: data['usermail']});*/
								form.html('<p class="pu-title">Благодарим! Ваше сообщение oтврaвлeно!</p>');
							}
						},
					error: function (xhr, ajaxOptions, thrownError) { 
								console.log(xhr.status); 
								console.log(thrownError); 
						},
					complete: function(data) { 
								form.find('input[type="submit"]').prop('disabled', false);
						}

					});
		}
		return false;
	});
	
});