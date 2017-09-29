Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('stocks'); }
});

Router.route('qrcode/:LotID/:Start/:End', {
  name:'qrcodelist',
    waitOn: function() { return [Meteor.subscribe('logs'),Meteor.subscribe('admins')]; },
  data: function() { 
    var start=this.params.Start;
    var end=this.params.End;
    var lot=this.params.LotID;
    return {
      Start:start,
      End:end,
      LotID:lot
    }
    //return Stocks.findOne(this.params._id);
  }

});

Router.route('/stock', {
  name: 'stocklist',
});

Router.route('/log/:LotID', {
  name: 'loglist',
  waitOn: function() {
        return [Meteor.subscribe('logs'),Meteor.subscribe('admins')];
  },
  data: function() {
    var id=this.params.LotID;
   return {LotID:id}; 
 }
});

Router.route('/stock/submit', {name: 'stockSubmit'});



Router.route('/:postsLimit?', {
  name: 'postsList',
});

Router.route('/stock/edit/:_id', {
  name: 'stockEdit',
  data: function() { return Stocks.findOne(this.params._id); }
});
Router.route('/stock/page/:_id', {
  name: 'stockPage',
  waitOn: function() {
        return Meteor.subscribe('comments', this.params._id);
    },
  data: function() { return Stocks.findOne(this.params._id); }
});


Router.route('/posts/:_id', {
	name: 'postPage',
	waitOn: function() {
    		return Meteor.subscribe('comments', this.params._id);
  	},
	data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
 	if(Meteor.loggingIn()){
   		this.render(this.loadingTemplate);
	}else{
		this.render('accessDenied');
	}

  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
