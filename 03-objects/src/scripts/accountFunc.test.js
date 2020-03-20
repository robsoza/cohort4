import {Account} from "./accountFunc.js"

test("does the Account function work?", () => {
    let blockChain = new Account("Crypto", 50000000.00);
    expect(blockChain.name).toBe("Crypto");
    expect(blockChain.balance).toBe(50000000.00);
});