"use strict";

function pow(base, power) {
    if (power === 0) {
        return 1;
    }
    if (power === 1) {
        return base;
    }
    return base * pow(base, power - 1);
}

console.log(pow(2, 4));

console.log(`----------------------`);

let students = {
    js: [{
        name: `John`,
        progress: 100
    }, {
        name: `Ivan`,
        progress: 60
    }],

    html: {
        basic: [{
            name: `Peter`,
            progress: 20,
        }
            , {
                name: `Ann`,
                progress: 10
            }],

        pro: [{
            name: `Sam`,
            progress: 10
        }]
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (const course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            course.forEach(item => {
                total += item.progress;
            });
        } else {
            for (const subCourse of Object.values(course)) {
                students += subCourse.length;
                subCourse.forEach(item => {
                    total += item.progress;
                });
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));

console.log(`-----------------------------------`);

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        data.forEach(item => {
            total += item.progress;
        });
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
         const subDataArray = getTotalProgressByRecursion(subData);
         total[0] += subDataArray[0];
         total[1] += subDataArray[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);