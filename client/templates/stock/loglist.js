Template.loglist.helpers({
  logs: function() {
    return Logs.find({LotID:this.LotID});
  },
  getName:function(id) {
    var name=Admins.find({ID:this.id});
 	return name.Name;
  }

});

Template.registerHelper( 'equals', ( a1, a2 ) => {
  return a1 === a2;
});
