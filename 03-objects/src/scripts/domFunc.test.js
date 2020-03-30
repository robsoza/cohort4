import domFunc from './domFunc.js'
import { Account, AccountController } from './account.js'

test('does that isAnum function work?', () => {
    expect(domFunc.isAnum(1)).toEqual(1);
    expect(domFunc.isAnum('a')).toEqual('error');
    expect(domFunc.isAnum('')).toEqual('error');
});
