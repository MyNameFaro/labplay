Vue.component('a-button', {
	template: '<a class="a_button"><slot></slot></a>'
});
Vue.component('navbar', {
	template: '<div class="navbar"><h4><slot></slot></h4></div>'
});
Vue.component('a-link', {
	template: '<a><h1><slot></slot></h1></a>'
});
Vue.component('level-left', {
	template: '<div class="level is-left"><slot></slot></div>'
});
Vue.component('level-right', {
	template: '<div class="level is-right"><slot></slot></div>'
});
Vue.component('search', {
	template: '<form class="search"><button type="submit"><span></span></button><input type="textbox" placeholder="ค้นหา"/></form>'
});
Vue.component('h-title',{
	template: '<h1 class="title"><slot></slot></h1>'
});
Vue.component('content', {
	template: '<div class="content"><slot></slot></div>'
});
new Vue({ 
	el: '#app',
	data:{
		navbars:[
			{
				name:"Home",
				href:"index.html"
			},
			{
				name:"Games",
				href:"games"
			},
			{
				name:"LabplayEditor",
				href:"labplayeditor"
			},
			{
				name:"Contact",
				href:"contact.html"
			}
		]
	}
});