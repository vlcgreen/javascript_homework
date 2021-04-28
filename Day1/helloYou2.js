

function hello(name) {
    if (name == ""){
        var output = console.log("Hello, world!")
        return output
    }
    var output = 'Hello ' + name;
    console.log(output);
    return output
    }
hello('');