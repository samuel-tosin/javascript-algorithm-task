//Q1 - convertFahrToCelsius
const convertFahrToCelsius = (fahr) => {
    let valueType = typeof fahr
    const fahrValue = JSON.stringify(fahr)
    if (Array.isArray(fahr)) {
        console.log(`${fahrValue} is not a valid number but a/an array`)
        return `${fahrValue} is not a valid number but a/an array`
    }
    if (isNaN(fahr) || fahr === null || parseInt(fahr) != fahr) {
        console.log(`${fahrValue} is not a valid number but a/an ${valueType}`)
        return `${fahrValue} is not a valid number but a/an ${valueType}`
    } else {
        let fahrToCelsius = (fahr - 32) * 5/9;
        let result = `${fahrToCelsius.toFixed(4)}`
        console.log(result);
        return result;
    }
}


//Q2 - checkYuGiOh

const checkYuGiOh = (n) => {
    let arr = [];
    let resp = JSON.stringify(n);
    if (isNaN(n) || n === null || !parseInt(n)) {
        console.log(`invalid parameter: ${resp}`);
        return `invalid parameter: ${resp}`;
    } else {
        for (i = 1; i <= n; i++) {
            if (!(i % 2 === 0) && !(i % 3 === 0) && !(i % 5 === 0)) {
                arr.push(i)
            } else {
                
                 if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                    arr.push("yu-gi-oh")
                } else if (i % 2 === 0 && i % 3 === 0) {
                    arr.push("yu-gi")
                } else if (i % 2 === 0 && i % 5 === 0) {
                    arr.push("yu-oh")
                } else if (i % 3 === 0 && i % 5 === 0) {
                    arr.push("gi-oh")
                } else if (i % 2 === 0) {
                    arr.push("yu")
                } else if (i % 3 === 0) {
                    arr.push("gi")
                } else if (i % 5 === 0) {
                    arr.push("oh")
                }  else {
                    arr.push('' + i)
                }
            }

        }
        console.log(arr);
        return arr;
    }
}


//test 
convertFahrToCelsius(0);
convertFahrToCelsius('0');
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ temp: 0 });

checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuss is meh");