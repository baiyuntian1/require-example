require.config({
    baseUrl : '/js/demo'
});

require(['a','b'],function($a,$b){
    $a.init();
})