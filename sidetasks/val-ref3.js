const e = {
    course: "TS",

    changeCourse: function() {
        this.course = "JS";
    }
};

let f = e;

function replaceObject(object) {
    object = {
        course: "HTML"
    };
}

replaceObject(f);

console.log(e);
console.log(f);