'use strict';


// window into the DOM
// let HTMLlocation = document.getElementById('salmon-cookies');
let HTMLlocation = document.getElementById('sales-table');
// ********** GLOBALS **************
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ********** HELPER FUNCTIONS/UTILITES *********

function randomCustomers(min, max) {
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function header(){
  // tr
  let trElem = document.createElement('tr');
  HTMLlocation.appendChild(trElem);
  // th
  let thElem = document.createElement('th');
  trElem.appendChild(thElem);
  // td
  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = hours[i];
    trElem.appendChild(tdElem);
  }
  // td - total
  let tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trElem.appendChild(tdElem);
};


// ********** CONSTRUCTOR FUNCTION *********

function Store(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookieSoldPerHour = [];
  this.cookiesCustomerPerHour = [];
  this.dailySoldTotal = 0;
}

// ******** PROTOTYPE METHODS **********

Store.prototype.setCookiesTotal = function () {
  for (let i = 0; i < hours.length; i++) {
    this.dailySoldTotal += this.cookieSoldPerHour[i];
  };
}
Store.prototype.setCustomersPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
  };
}
Store.prototype.setCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
  };
}
Store.prototype.render = function () {
  this.setCustomersPerHour();
  this.setCookiesPerHour();
  this.setCookiesTotal();

  // tr
  let trElem = document.createElement('tr');
  HTMLlocation.appendChild(trElem);
  // th
  let thElem = document.createElement('th');
  thElem.textContent = this.name;
  trElem.appendChild(thElem);
  // td
  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookieSoldPerHour[i];
    trElem.appendChild(tdElem);
  }
  // td - total
  let tdElem = document.createElement('td');
  tdElem.textContent = this.dailySoldTotal;
  trElem.appendChild(tdElem);
};

// ********** EXECUTABLE CODE **********
header()
let seattle = new Store('Seattle', 23, 65, 6.3);
console.log(seattle)
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);
seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()

      // ********** OBJECT LITERAL **********

      // let seattle = {
      //   name: 'Seattle',
      //   minCust: 23,
      //   maxCust: 65,
      //   avgCookieBought: 6.3,
      //   cookieSoldPerHour: [],
      //   cookiesCustomerPerHour: [],
      //   dailySoldTotal: 0,
      //   setCookiesTotal() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.dailySoldTotal += this.cookieSoldPerHour[i];
      //     }
      //   },
      //   setCustomersPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
      //     }
      //   },
      //   setCookiesPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
      //     }
      //   },
      //   render() {
      //     this.setCustomersPerHour();
      //     this.setCookiesPerHour();
      //     this.setCookiesTotal();

      //     // tr
      //     let trElem = document.createElement('tr');
      //     articleElem.appendChild(trElem);
      //     // th
      //     let thElem = document.createElement('th');
      //     thElem.textContent = this.name;
      //     articleElem.appendChild(thElem);
      //     // td
      //     for (let i = 0; i < hours.length; i++) {
      //       let tdElem = document.createElement('td');
      //       tdElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      //       trElem.appendChild(tdElem);
      //     }
      //     // td - total
      //     let tdElem = document.createElement('td');
      //     tdElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
      //     articleElem.appendChild(tdElem);
      //   },
      // }

      // let tokyo = {
      //   name: 'Tokyo',
      //   minCust: 3,
      //   maxCust: 24,
      //   avgCookieBought: 1.2,
      //   cookieSoldPerHour: [],
      //   cookiesCustomerPerHour: [],
      //   dailySoldTotal: 0,
      //   setCookiesTotal() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.dailySoldTotal += this.cookieSoldPerHour[i];
      //     }
      //   },
      //   setCustomersPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
      //     }
      //   },
      //   setCookiesPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
      //     }
      //   },
      //   render() {
      //     this.setCustomersPerHour();
      //     this.setCookiesPerHour();
      //     this.setCookiesTotal();
      //     let articleElem = document.createElement('article');
      //     HTMLlocation.appendChild(articleElem);
      //     // h2
      //     let h2Elem = document.createElement('h2');
      //     h2Elem.textContent = this.name;
      //     articleElem.appendChild(h2Elem);
      //     // ul
      //     let ulElem = document.createElement('ul');
      //     articleElem.appendChild(ulElem);
      //     // li
      //     for (let i = 0; i < hours.length; i++) {
      //       let liElem = document.createElement('li');
      //       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      //       ulElem.appendChild(liElem);
      //     }
      //     // li - total
      //     let liElem = document.createElement('li');
      //     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
      //     articleElem.appendChild(liElem);
      //   }
      // }

      // let dubai = {
      //   name: 'Dubai',
      //   minCust: 11,
      //   maxCust: 38,
      //   avgCookieBought: 3.7,
      //   cookieSoldPerHour: [],
      //   cookiesCustomerPerHour: [],
      //   dailySoldTotal: 0,
      //   setCookiesTotal() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.dailySoldTotal += this.cookieSoldPerHour[i];
      //     }
      //   },
      //   setCustomersPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
      //     }
      //   },
      //   setCookiesPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
      //     }
      //   },
      //   render() {
      //     this.setCustomersPerHour();
      //     this.setCookiesPerHour();
      //     this.setCookiesTotal();
      //     let articleElem = document.createElement('article');
      //     HTMLlocation.appendChild(articleElem);
      //     // h2
      //     let h2Elem = document.createElement('h2');
      //     h2Elem.textContent = this.name;
      //     articleElem.appendChild(h2Elem);
      //     // ul
      //     let ulElem = document.createElement('ul');
      //     articleElem.appendChild(ulElem);
      //     // li
      //     for (let i = 0; i < hours.length; i++) {
      //       let liElem = document.createElement('li');
      //       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      //       ulElem.appendChild(liElem);
      //     }
      //     // li - total
      //     let liElem = document.createElement('li');
      //     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
      //     articleElem.appendChild(liElem);
      //   }
      // }

      // let paris = {
      //   name: 'Paris',
      //   minCust: 20,
      //   maxCust: 38,
      //   avgCookieBought: 2.3,
      //   cookieSoldPerHour: [],
      //   cookiesCustomerPerHour: [],
      //   dailySoldTotal: 0,
      //   setCookiesTotal() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.dailySoldTotal += this.cookieSoldPerHour[i];
      //     }
      //   },
      //   setCustomersPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
      //     }
      //   },
      //   setCookiesPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
      //     }
      //   },
      //   render() {
      //     this.setCustomersPerHour();
      //     this.setCookiesPerHour();
      //     this.setCookiesTotal();
      //     let articleElem = document.createElement('article');
      //     HTMLlocation.appendChild(articleElem);
      //     // h2
      //     let h2Elem = document.createElement('h2');
      //     h2Elem.textContent = this.name;
      //     articleElem.appendChild(h2Elem);
      //     // ul
      //     let ulElem = document.createElement('ul');
      //     articleElem.appendChild(ulElem);
      //     // li
      //     for (let i = 0; i < hours.length; i++) {
      //       let liElem = document.createElement('li');
      //       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      //       ulElem.appendChild(liElem);
      //     }
      //     // li - total
      //     let liElem = document.createElement('li');
      //     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
      //     articleElem.appendChild(liElem);
      //   }
      // }

      // let lima = {
      //   name: 'Lima',
      //   minCust: 2,
      //   maxCust: 16,
      //   avgCookieBought: 4.6,
      //   cookieSoldPerHour: [],
      //   cookiesCustomerPerHour: [],
      //   dailySoldTotal: 0,
      //   setCookiesTotal() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.dailySoldTotal += this.cookieSoldPerHour[i];
      //     }
      //   },
      //   setCustomersPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
      //     }
      //   },
      //   setCookiesPerHour() {
      //     for (let i = 0; i < hours.length; i++) {
      //       this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
      //     }
      //   },
      //   render() {
      //     this.setCustomersPerHour();
      //     this.setCookiesPerHour();
      //     this.setCookiesTotal();
      //     let articleElem = document.createElement('article');
      //     HTMLlocation.appendChild(articleElem);
      //     // h2
      //     let h2Elem = document.createElement('h2');
      //     h2Elem.textContent = this.name;
      //     articleElem.appendChild(h2Elem);
      //     // ul
      //     let ulElem = document.createElement('ul');
      //     articleElem.appendChild(ulElem);
      //     // li
      //     for (let i = 0; i < hours.length; i++) {
      //       let liElem = document.createElement('li');
      //       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      //       ulElem.appendChild(liElem);
      //     }
      //     // li - total
      //     let liElem = document.createElement('li');
      //     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
      //     articleElem.appendChild(liElem);
      //   }
      // }

      // seattle.render()
      // tokyo.render()
      // dubai.render()
      // paris.render()
      // lima.render()