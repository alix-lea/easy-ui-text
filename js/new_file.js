$(function() {
	$('#pb').passwordbox({
		prompt: '请输入密码',
		showEye: true
	});
	$('#tb').textbox({
		buttonText: '',
		iconCls: 'icon-man',
		iconAlign: 'left'
	})
    $('#cc').combobox({    
        url:'combobox_data.json',    
        valueField:'id',    
        textField:'text'   
    });  
	$('#dd').datebox({    
	    required:true   
	});
	$('#fb').filebox({    
	    buttonText: '选择文件', 
	    buttonAlign: 'right' 
	})
	// $('#ff').form('submit', {    
	//     url:,   
	//     onSubmit: function(){    
	//        alert(1111)
	//     },    
	//     success:function(data){    
	//         alert(data)    
	//     }    
	// }); 
});
