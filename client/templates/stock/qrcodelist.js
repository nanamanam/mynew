Template.qrcodelist.helpers({
   qrinfo: function() {
   return Logs.find({LotID:this.LotID});
  }

});