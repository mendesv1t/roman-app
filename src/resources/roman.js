export function int2roman(num) {
    let roman = "";
    if (num >= 4000000 || num < 1) {
        roman = "N/A";
    } else {
        let symbols = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        let ptr = 0;

        if (num >= 4000) {
            let excess = Math.floor(num / 1000);
            if (excess % 10 < 4) {
                excess = (excess / 10) * 10;
            }
            roman = "(" + int2roman(excess) + ")";
            num -= excess * 1000;
        }

        while (num > 0) {
            let temp = Math.floor(num / decimals[ptr]);

            for (let i = 0; i < temp; ++i) {
                roman += symbols[ptr];
            }

            num -= temp * decimals[ptr];

            ptr += 1;
        }
    }
    return roman;
}

export function int2romanFast(num) {
    var symbols = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM", "(IV)", "(V)", "(VI)", "(VII)", "(VIII)", "(IX)"],
        ["", "(X)", "(XX)", "(XXX)", "(XL)", "(L)", "(LX)", "(LXX)", "(LXXX)", "(XC)"],
        ["" ,"(C)", "(CC)", "(CCC)", "(CD)", "(D)", "(DC)", "(DCC)", "(DCCC)", "(CM)"],
        ["", "(M)", "(MM)", "(MMM)", "", "", "", "", "", ""]
    ];

    let roman = "";
    if (num >= 4000000 || num < 1) roman = roman.concat("N/A");
    else {
        let cnum = num.toString();
        let strlen = cnum.length - 1;

        for (let c of cnum) {
            let dig = parseInt(c);
            roman = roman.concat(symbols[strlen][dig]);
            strlen -= 1;
        }
    }

    return roman.replace(/\)\(/g, "");
}

export function roman2int(roman) {
    var d = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

    var total = 0,
        pptr = 0,
        cptr = 0,
        m = false;
    var validc = "MDCLXVImdclxvi()";

    [...roman].reverse().forEach((c) => {
        if (validc.includes(c)) {
            if (c === ")") m = true;
            else if (c === "(") m = false;
            else {
                cptr = d[c.toUpperCase()];
                if (m) cptr *= 1000;
                if (cptr < pptr) total -= cptr;
                else total += cptr;
                pptr = cptr;
            }
        } else throw new Error(`Invalid character "${c}"`);
    });
    return total;
}

export function validateRoman(romano) {
    romano = romano.toUpperCase();
    let s = [romano, ""];
    let d = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

    let position = romano.indexOf("("); // find first occurrence
    if (position >= 0) {
        let position2 = romano.indexOf(")");
        s[0] = romano.substring(position + 1, position2);
        s[1] = romano.substring(position2 + 1, romano.length);
    }

    for (let j = 0; j < 2; ++j) {
        let r = s[j];
        let lr = r.length;
        if (lr === 0) continue;
        if ("MDCLXVI".indexOf(r[lr - 1]) < 0) return String.fromCharCode(r[lr - 1]);
        for (let i = 0; i < lr - 1; ++i) {
            let c = r[i];
            let c1 = r[i + 1];

            if ("MDCLXVI".indexOf(c) < 0) return String.fromCharCode(c);
            if (i + 2 < lr) {
                let c2 = r[i + 2];
                if (i + 3 < lr) {
                    let c3 = r[i + 3];
                    if (c === c1 && c === c2 && c === c3)
                        return "0: " + r.substring(i, i + 4);
                }
                if (d[c2] !== undefined && d[c] < d[c2])
                    return "1: " + r.substring(i, i + 3);
                if ("VLD".indexOf(c) >= 0 && c === c2)
                    return "2: " + r.substring(i, i + 3);
                if (c === "I" && c2 === "I" && c1 !== "I")
                    return "3: " + r.substring(i, i + 3);
                if (c === "X" && c2 === "X" && "LC".indexOf(c1) >= 0)
                    return "4: " + r.substring(i, i + 3);
            }

            if (d[c1] !== undefined && d[c] < d[c1]) {
                if ("IXC".indexOf(c) < 0) return "5: " + r.substring(i, i + 2);
                if (c === "I" && "VX".indexOf(c1) < 0)
                    return "6: " + r.substring(i, i + 2);
                if (c === "X" && "LC".indexOf(c1) < 0)
                    return "7: " + r.substring(i, i + 2);
                if (c === "C" && "DM".indexOf(c1) < 0)
                    return "8: " + r.substring(i, i + 2);
            }
            if ("VLD".indexOf(c) >= 0 && c === c1)
                return "9: " + r.substring(i, i + 2);
        }
    }
    return "";
}

export function reRoman(romano) {
    let regex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;
    let regex2 =
        /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i;

    console.assert(regex.test(romano) === regex2.test(romano));

    return regex.test(romano);
}