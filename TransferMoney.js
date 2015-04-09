function TransferMoney(sortCodeSrc, bankAccountSrc, sortCodeDst, bankAccountDst, amount) {
sortCodeSrc.bankAccountSrc.balance-=amount;
sortCodeDst.bankAccountDst.balance+=amount;
return true;
}
