let APP_LOG_LIFECYCLE_EVENTS = true;

let webstore = new Vue({
    el: "#app",
    data:{
        sitename: "Vue.js Pet Depot",
    },
    beforeCreate: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("beforeCreate")
        }
    },
    created: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("created")
        }
    },
    beforeMount: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("beforeCreate")
        }
    },
    mounted: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("mounted")
        }
    },
    beforeUpdate: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("beforeUpdate")
        }
    },
    update: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log(APP_LOG_LIFECYCLE_EVENTS)
        }
    },
    beforeDestroy: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("beforeDestroy")
        }
    },
    destroyed: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("destroyed")
        }
    }
});