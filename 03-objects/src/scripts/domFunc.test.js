import domFunc from './domFunc.js'
import { Account, AccountController } from './account.js'

test('does that isAnum function work?', () => {
    expect(domFunc.isAnum(1)).toEqual(1);
    expect(domFunc.isAnum('a')).toEqual('The input is not a valid number');
    expect(domFunc.isAnum('')).toEqual('The input is not a valid number');
});

test('does that isNewAcc function work?', () => {
    let accs = { 'CHECKINGS': 25, 'SAVINGS': 20 };
    expect(domFunc.isNewAcc(accs, 'Checkings')).toEqual('CHECKINGS already exists');
    expect(domFunc.isNewAcc(accs, 'Savings')).toEqual('SAVINGS already exists');
    expect(domFunc.isNewAcc(accs, 'Bonds')).toEqual('BONDS');
    expect(domFunc.isNewAcc(accs, 'travel')).toEqual('TRAVEL');
});