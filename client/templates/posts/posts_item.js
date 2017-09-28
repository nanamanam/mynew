Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },

  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
   gen: function() {
    var cid=this.id;
    alert(Posts.findOne({id:cid}));
  }

});
