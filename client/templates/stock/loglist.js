Template.loglist.helpers({
  logs: function() {
  	Meteor.subscribe('logs');
  	//console.log(Logs.find({LotID:this.LotID}));
    return Logs.find({LotID:this.LotID});
  }

});

Template.registerHelper( 'getname', (a1) => {
	return Admins.findOne({ID:a1}).Name;
});


Template.registerHelper( 'equals', ( a1, a2 ) => {
  return a1 === a2;
});
