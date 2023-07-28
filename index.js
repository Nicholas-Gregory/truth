const one = (prop, test, cases) => cases.reduce((truth, present) => truth ? true : test(present, prop), false);

const all = (prop, test, cases) => cases.reduce((truth, present) => truth ? test(present, prop) : false, true);

const none= (prop, test, cases) => cases.reduce((truth, present) => truth ? false : test(present, prop), false);

/*
                                                                    truth ? true : test(present, prop), true
                                                                        always true - not a test
                                                                    truth ? test(present, prop) : false, false
                                                                        always false- not a test
                                                                    truth ? test(present, prop) : true, true
                                                                        doesn't preserve truth value - not useful
                                                                    truth ? test(present, prop) : true, false
                                                                        if ever false immediatly turns to true - not useful
                                                                    truth ? false : test(present, prop), true
                                                                        skips the first test - not exhastive
*/