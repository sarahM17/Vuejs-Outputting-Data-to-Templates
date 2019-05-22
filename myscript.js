
new Vue({
	el: '#exercise',
	data: {
		Name: 'Sarah Michaux',
		age: 22,
		Images: 'https://wallpaperhd.guru/wp-content/uploads/2017/05/Blue-rose-pictures-images-wallpapers-HD.jpg',
	},
	methods: {
		multipliedAge: function(multiplier){
			return this.age * multiplier
		},
		randomFloat: function(){
			return Math.random()
		}
	}
});

