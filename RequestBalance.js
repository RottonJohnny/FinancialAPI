function RequestBalance(sortCode, bankAccount, authCode, keyCode) {
if (Authorize(authCode,keyCode)) return sortCode.bankAccount.balance;
return 'request unauthorized';
}
