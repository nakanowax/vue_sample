var app = new Vue({
    el: '#app',
    beforeCreate: function() {
        console.log("beforeCreate");
    },
    created: function() {
        console.log("created");
    },
    beforeMount: function() {
        console.log("beforeMount");
    },
    mounted: function() {
        console.log("mouted");
    },
    beforeUpdate: function() {
        console.log("beforeUpdate");
    },
    updated: function() {
        console.log("updated");
    },
    beforeDestroy: function() {
        console.log("beforeDestroy");
    },
    destroyed: function() {
        console.log("destroyed");
    },
    errorCaptured: (err, vm, info) => {
        console.log(err);
        console.log(vm);
        console.log(info);
    },
    data: {
        message: "Hello Vue.js",
        list:["りんご", "バナナ", "いちご"],
        show: true,
        item: [
            {
                id:1,
                src: 'hoge.jpg',
                alt: 'ほげ',
                width: 200,
                height: 100
            }
        ],
        classObj: {
            child: true,
            'is-active': false
        },
        styleObj: {
            color: 'red',
            backgroundColor: 'lightgray'
        },
        radius: 50,
        ok: false
    },
    methods: {
        handleClick: function(e) {
            // alert(e.target);
            app.show = (app.show) ? false : true;
        }
    }
})