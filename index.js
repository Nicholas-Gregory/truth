const one = (prop, test, cases) => cases.reduce((truth, present) => truth ? true : test(present, prop), false);

const all = (prop, test, cases) => cases.reduce((truth, present) => truth ? test(present, prop) : false, true);

const none= (prop, test, cases) => cases.reduce((truth, present) => truth ? false : test(present, prop), false);