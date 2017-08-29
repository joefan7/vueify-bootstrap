// vueify-bootstrap assignment
Vue.component('my-media', {
    template: `
    <div class="media">
        <div class="media-left">
            <a v-bind:href="hrefurl">
            <img 
                class="media-object" 
                v-bind:src="srcurl" 
                v:bind:alt="alttext">
      </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">{{mediaheading}}</h4>
        ...
    </div>
    </div>
    `,
    props: ['hrefurl', 'srcurl', 'alttext', 'mediaheading']
})

var mainVm = new Vue({
    el: '#app'
})