function RequestBalance(sortCode, accountNumber, authCode, keyCode) {
if (Authorize(authCode,keyCode)) return sortCode.accountNumber.balance;
return 'request unauthorized';
}
