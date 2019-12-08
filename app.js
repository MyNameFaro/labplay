Vue.component('a-button', {
	template: '<a class="a_button"><slot></slot></a>'
});
Vue.component('menu-bar', {
	template: '<div class="menu-bar"><h4><slot></slot></h4></div>'
});
Vue.component('a-link', {
	template: '<a><h1><slot></slot></h1></a>'
});
Vue.component('level-right', {
	template: '<div class="level-right"><slot></slot></div>'
});
Vue.component('search', {
	template: '<form class="search"><input type="textbox" placeholder="ค้นหา"></form>'
});
Vue.component('h-title',{
	template: '<h1 class="title"><slot></slot></h1>'
});
Vue.component('content', {
	template: '<div class="content"><slot></slot></div>'
});
new Vue({ 
	el: '#app'
});