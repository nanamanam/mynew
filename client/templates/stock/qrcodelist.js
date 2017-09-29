Template.qrcodelist.helpers({
   qrinfo: function() {
   return Logs.find({LotID:this.LotID},{sort: {NO: 1}});
  },
  count: function() {
   return Logs.find({LotID:this.LotID}).count();
  }

});
Template.registerHelper( 'newline', ( a1, a2,a3) => {
  	
  	//console.log("next");
  	console.log(a1);
  	if(a1%(a2+1)==0){
  		console.log("</tr><tr>");
  		return "</tr><tr>";
	}
	
});