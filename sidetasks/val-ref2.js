const c = {
    course: "TS",

    changeCourse: function() {
        this.course = "JS";
    }
};

const d = c;

function changeObject(object) {
    object.changeCourse();
}

changeObject(d);

console.log(c);
console.log(d);