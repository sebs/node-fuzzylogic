/**
 * Parent object for all shapes. Only uses four coordinates
 */
function Shape(x0, x1, x2, x3) {
    'use strict';
    this.x0 = x0;
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
}

/**
 * Grade Type
 * @param x0 left/lower side
 * @param x1 right upper side
 */
function Grade(x0, x1) {
    'use strict';
    Shape.call(this, x0, x1);
}
Grade.prototype = {
    evaluate: function (val) {
        'use strict';
        var result = 0, x = val;

        if (x <= this.x0) {
            result = 0;
        } else if (x >= this.x1) {
            result = 1;
        } else {
            result = (x / (this.x1 - this.x0)) - (this.x0 / (this.x1 - this.x0));
        }
        return result;
    }
};

/**
 * Reverse Grade
 * @param x0 left/upper side
 * @param x1 right/lower side
 */
function ReverseGrade(x0, x1) {
    'use strict';
    Shape.call(this, x0, x1);
}
ReverseGrade.prototype = {
    evaluate: function (val) {
        'use strict';
        var result = 0, x = val;

        if (x <= this.x0) {
            result = 1;
        } else if (x >= this.x1) {
            result = 0;
        } else {
            result = (-x / (this.x1 - this.x0)) + (this.x1 / (this.x1 - this.x0));
        }
        return result;
    }
};

/**
 * Triangle fuzzyfication
 * @param x0 left start of triangle
 * @param x1 top
 * @param x2 right side
 */
function Triangle(x0, x1, x2) {
    'use strict';
    Shape.call(this, x0, x1, x2);
}
Triangle.prototype = {
    evaluate: function (val) {
        'use strict';
        var result = 0, x = val;

        if (x <= this.x0) {
            result = 0;
        } else if (x >= this.x2) {
            result = 0;
        } else if ((x > this.x0) && (x <= this.x1)) {
            result = (x - this.x0) / (this.x1 - this.x0);
        } else if ((x > this.x1) && (x < this.x2)) {
            result = (this.x2 - x) / (this.x2 - this.x1);
        }
        return result;
    }
};

/**
 * trapezoid fuzzyfication
 * @param x0 left start of the trapezoid
 * @param x1 upper left
 * @param x2 upper right
 * @param x3 lower rigth side
 */
function Trapezoid(x0, x1, x2, x3) {
    'use strict';
    Shape.call(this, x0, x1, x2, x3);
}
Trapezoid.prototype = {
    evaluate: function (val) {
        'use strict';
        var result = 0, x = val;

        if (x <= this.x0) {
            result = 0;
        } else if (x >= this.x3) {
            result = 0;
        } else if ((x >= this.x1) && (x <= this.x2)) {
            result = 1;
        } else if ((x > this.x0) && (x < this.x1)) {
            result = (x / (this.x1 - this.x0)) - (this.x0 / (this.x1 - this.x0));
        } else {
            result = (-x / (this.x3 - this.x2)) + (this.x3 / (this.x3 - this.x2));
        }
        return result;
    }
};

// exports the shapes
module.exports.Grade = Grade;
module.exports.ReverseGrade = ReverseGrade;
module.exports.Triangle = Triangle;
module.exports.Trapezoid = Trapezoid;

// Shortcut methods

/**
 * Grade Type
 * @param val Value to check on
 * @param x0 left/lower side
 * @param x1 right upper side
 * @return Grade
 */
module.exports.grade = function (val, x0, x1) {
    'use strict';
    return new Grade(x0, x1).evaluate(val);
};

/**
 * Reverse Grade
 * @param val value to check on
 * @param x0 left/upper side
 * @param x1 right/lower side
 * @return ReverseGrade
 */
module.exports.reverseGrade = function (val, x0, x1) {
    'use strict';
    return new ReverseGrade(x0, x1).evaluate(val);
};
/**
 * Triangle fuzzyfication
 * @param val Value to check on
 * @param x0 left start of triangle
 * @param x1 top
 * @param x2 right side
 * @return Triangle
 */
module.exports.triangle = function (val, x0, x1, x2) {
    'use strict';
    return new Triangle(x0, x1, x2).evaluate(val);
};
/**
 * trapezoid fuzzyfication
 * @param val Value to check on
 * @param x0 left start of the trapezoid
 * @param x1 upper left
 * @param x2 upper right
 * @param x3 lower rigth side
 * @return Trapezoid
 */
module.exports.trapezoid = function (val, x0, x1, x2, x3) {
    'use strict';
    return new Trapezoid(x0, x1, x2, x3).evaluate(val);
};
