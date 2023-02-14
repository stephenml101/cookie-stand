'use strict';


// window into the DOM
let HTMLlocation = document.getElementById('salmon-cookies');

// ********** GLOBALS **************
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ********** HELPER FUNCTIONS/UTILITES *********

function randomCustomers(min, max) {
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ********** OBJECT LITERAL **********

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookieSoldPerHour: [],
  cookiesCustomerPerHour: [],
  dailySoldTotal: 0,
  setCookiesTotal() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySoldTotal += this.cookieSoldPerHour[i];
    }
  },
  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },
  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
    }
  },
  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    // li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    // li - total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);
  },
}

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookieSoldPerHour: [],
  cookiesCustomerPerHour: [],
  dailySoldTotal: 0,
  setCookiesTotal() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySoldTotal += this.cookieSoldPerHour[i];
    }
  },
  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },
  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
    }
  },
  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    // li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    // li - total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);
  }
}

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookieSoldPerHour: [],
  cookiesCustomerPerHour: [],
  dailySoldTotal: 0,
  setCookiesTotal() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySoldTotal += this.cookieSoldPerHour[i];
    }
  },
  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },
  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
    }
  },
  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    // li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    // li - total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);
  }
}

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookieSoldPerHour: [],
  cookiesCustomerPerHour: [],
  dailySoldTotal: 0,
  setCookiesTotal() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySoldTotal += this.cookieSoldPerHour[i];
    }
  },
  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },
  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
    }
  },
  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    // li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    // li - total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);
  }
}

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookieSoldPerHour: [],
  cookiesCustomerPerHour: [],
  dailySoldTotal: 0,
  setCookiesTotal() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySoldTotal += this.cookieSoldPerHour[i];
    }
  },
  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustomerPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },
  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
    }
  },
  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    // li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    // li - total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);
  }
}


seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()