import {Account} from "./account.js"

test("does the Account function work?", () => {
    let rsBank = new Account("Checking", 25);
    expect(rsBank.name).toBe("Checking");
    expect(rsBank.balance).toBe(25);
});