function RequestBalance(sortCode, accountNumber, authCode, keyCode) {
if (authorize(authCode,keyCode)) return sortCode.accountNumber.balance;
return 'request unauthorized';
}
