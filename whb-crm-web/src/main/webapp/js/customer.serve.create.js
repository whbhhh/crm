function saveCustomerService(){
	$("#fm").form("submit",{
		url:ctx+"/customer_serve/insert",
		onSubmit:function(params){
			params.createPeople=$.cookie("trueName");
			return $("#fm").form("validate");
		},
		success:function(data){
			data=JSON.parse(data);
			if(data.code==200){
				$.messager.alert("来自crm",data.msg,"info");
				$("#serveType").combobox("clear");
				$("#customer").val("");
				$("#overview").val("");
				$("#serviceRequest").val("");
			}else{
				$.messager.alert("来自crm",data.msg,"info");
			}
		}
	});
}