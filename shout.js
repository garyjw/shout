function shout(data) {
    return _.map(data, function(string) { return (string.toUpperCase()+"!!!");})
}

console.log(shout(["aaa", "bbb", "ccc"]));