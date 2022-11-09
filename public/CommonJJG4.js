function Animal(opts) {
    let name = 'animal';

    this.init = function(seconds){
        console.log('initialized!');
        look('me ?');
    }

    function look(r) {
        return name + 'is looking at' + r;
    }
}