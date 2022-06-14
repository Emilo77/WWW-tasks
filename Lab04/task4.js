// TASK 0
function task0() {
  console.log('\nTask 0:\n');
  console.log('Hello World!\n');
}

task0();

// TASK 1
function task1() {
  console.log('\nTask 1:\n');
  console.log('Najmniejsza naturalna nieprawidłowa: ');
  console.log(Number.MAX_VALUE.toString()
    .concat(' + 1'));
}

task1();

// TASK2
function task2() {
  console.log('\nTask 2:\n');
  for (let i = 1; i <= 100; i += 1) {
    if (!(i % 3) && !(i % 5)) {
      process.stdout.write('FizzBuzz ');
    } else if (!(i % 3)) {
      process.stdout.write('Fizz ');
    } else if (!(i % 5)) {
      process.stdout.write('Buzz ');
    } else {
      process.stdout.write(`${i.toString()} `);
    }
  }
  console.log();
}

task2();

// TASK3
const slownik = {
  spodnie: 170,
  bluza: 100,
  tshirt: 30,
};

const lista = ['tshirt', 'kalarepa', 'spodnie'];

function task3(koszyk, cennik) {
  let res = 0;
  for (let i = 0; i < koszyk.length; i += 1) {
    if (cennik[koszyk[i]] !== undefined) {
      res += cennik[koszyk[i]];
    }
  }
  return res;
}

console.log('\nTask 3:\n');
console.log(task3(lista, slownik));

// TASK 4
function changeCase(str) {
  const res = str.split('');
  for (let i = 0; i < res.length; i += 1) {
    if (res[i] === res[i].toUpperCase()) {
      res[i] = res[i].toLowerCase();
    } else {
      res[i] = res[i].toUpperCase();
    }
  }
  return res.join('');
}

console.log('\nTask 4:\n');
const str4 = 'ojejALEtrudne';
console.log(str4);
console.log(changeCase(str4));

// TASK 5
function betterParseInt(str) {
  const res = str.replace(/_/g, '');
  return parseInt(res, 10);
}

console.log('\nTask 5:\n');
const str = '321_23__54_____136______3__';
console.log("Podany napis:   " + str);
console.log("Po sparsowaniu: " + betterParseInt(str));

// TASK 6

// eslint-disable-next-line no-shadow
function betterParseIntAll(str) {
  return str.replace(/\D/g, '');
}

console.log('\nTask 6:\n');
const str2 = '213+_=78bjdas_241;+/a2.124';
console.log(str2);
console.log(betterParseIntAll(str2));

// TASK 7
function coNajmniejDwa(tablica, callback) {
  let counter = 0;
  tablica.forEach((x) => {
    if (callback(x)) {
      counter += 1;
    }
  });
  return counter >= 2;
}

// TASK 8
function sortBy(array, key) {
  return array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

// ======================================================================================
// GWIAZDKI

// TASK 9

console.log('\nTask 9*:\n');

function betterParseIntRegex(str) {
  const res = str.replace(/\D/, '');
  console.log(res);
  return parseInt(res, 10);
}

let test_9 = '4_20_halo';
console.log("Podany napis:   " + test_9);
console.log("Po sparsowaniu: " + betterParseIntRegex(test_9));

// TASK 10

console.log('\nTask 10*:\n');
console.log('Task 10 znajduje się w pliku task10_result.png.\n');

// TASK 11


console.log('\nTask 11*:\n');

function check(logic_val) {
  if (logic_val) {
    console.log('Test passed');
  } else {
    console.log('Test failed');
  }
}

function propOwner(object, property) {
  let result_owner = object;

  while (!result_owner.hasOwnProperty(property)) {
    result_owner = Object.getPrototypeOf(result_owner);
  }

  return result_owner;
}

class A {
  constructor() {
    this.x = 17;
  }
  mA() { return this.x; }
}

class B extends A {
  constructor() {
    super();
    this.y = 42;
  }
  mB() { return this.y; }
}

let o = new B();

check(propOwner(o, 'x') === o);
check(propOwner(o, 'y') === o);
check(propOwner(o, 'mB') === Object.getPrototypeOf(o));
check(propOwner(o, 'mA') === Object.getPrototypeOf(Object.getPrototypeOf(o)));
