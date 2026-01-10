var expect = function(val) {
    return {
        toBe: function(other) {
            if (val !== other) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(other) {
            if (val === other) {
                throw new Error("Equal");
            }
            return true;
        }
    };
};
