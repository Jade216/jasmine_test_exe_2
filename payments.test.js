describe('test the payment', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should add a new payment info each time', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments[ 'payment1' ].billAmt).toEqual('100');
    });

    it('should create curpayment', function () {
        let newPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(newPayment);
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[ 0 ].innerHTML = '';
        summaryTds[ 1 ].innerHTML = '';
        summaryTds[ 2 ].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
});