var wordClock = {
	
	time_left : 0,
	first : ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
	second : ["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"],
	zero: 'zero',
	hundred: 'hundred and',

	setDate : function(dt){
		var target_date = new Date(dt);
		var now = new Date();
		var timeDiff = Math.abs(target_date.getTime() - now.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 60)); 
		time_left = diffDays;
	},

	convert : function(time)
	{
		var converted = "";
		var part1 = time%100;
		if(time<100){
			if(time == 0 ) return this.zero;
			if(part1 < 20) converted = this.first[part1];
			else converted = this.second[parseInt(part1/10)] +" "+ this.first[part1%10];
		}
		else converted = this.first[parseInt(time/100)] +" "+ this.hundred +" "+ this.second[parseInt(part1/10)] +" "+ this.first[part1%10];
		return converted;
	}

};

var clock = {	
	endtime: 0,
	daysSpan: document.querySelector("#days"),
	hoursSpan: document.querySelector("#hours"),
	minutesSpan: document.querySelector("#minutes"),
	secondsSpan: document.querySelector("#seconds"),
	timeinterval: '',
	effect:'fadeInDown',

	getTimeRemaining: function() {
	  var t = Date.parse(this.endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	},

	 initializeClock: function(id, endtime) {
	  this.endtime = new Date(endtime);
	  this.updateClock();
	  this.timeinterval = setInterval(function(){ clock.updateClock(); }, 1000);
	},

	 updateClock: function() {
	    var t = clock.getTimeRemaining();
	    this.createElement(this.daysSpan, t.days );
	    this.createElement(this.hoursSpan, wordClock.convert( t.hours ) );
	    this.createElement(this.minutesSpan, wordClock.convert( t.minutes ) );
	    this.createElement(this.secondsSpan, wordClock.convert( t.seconds ) );

	    if (t.total <= 0) {
	      clearInterval(this.timeinterval);
	    }
	  },

	  createElement: function(selector,time) {
	  	var b = document.createElement('div');
	    b.innerHTML = time;
	    
	    if(selector.firstElementChild.innerHTML != time){

	    	selector.innerHTML ='';
	    	selector.appendChild(b);
	    	b.setAttribute('class', 'animated '+clock.effect);
		}
	  }
}
