const amountToPay = document.querySelector('#price');
const numOfPeople = document.querySelector('#people');
const tip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const errorMsg = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const checkBill = () => {
	if (amountToPay.value === '' || numOfPeople.value === '' || tip.value == 0) {
		errorMsg.textContent = 'Musisz podać wszystkie dane!';
		costInfo.textContent = '';
	} else billSplitter();
};

const billSplitter = () => {
	const newAmountToPay = parseFloat(amountToPay.value);
	const newNumOfPeople = parseInt(numOfPeople.value);
	const newTip = parseFloat(tip.value);
	console.log(typeof newTip);

	const bill = (newAmountToPay + newAmountToPay * newTip) / newNumOfPeople;
	errorMsg.textContent = '';
	costInfo.style.display = 'block';
	cost.textContent = bill.toFixed(2);
};

countBtn.addEventListener('click', checkBill);
