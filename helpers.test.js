describe('test sum percentage and append funcs', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should calculate the total bill amount', function () {

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should calculate the tip percentage', function () {
        expect(calculateTipPercent(100, 12)).toEqual(12);
    });

    it('should generate new td and append to tr', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'TESTING');
        expect(newTr.firstChild.innerText).toEqual('TESTING');

    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
        summaryTds[ 0 ].innerText = '';
        summaryTds[ 1 ].innerText = '';
        summaryTds[ 2 ].innerText = '';
    })
})