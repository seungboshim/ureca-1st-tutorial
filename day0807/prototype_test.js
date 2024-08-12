function My(name) {
    this.name = name;
}

My.prototype.hello = function() {
    console.log("안녕!!!!" + this.name);
}

const my = new My('나길동');

my.hello();