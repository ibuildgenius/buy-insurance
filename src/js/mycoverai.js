import mycoverai from '@mycoverai/mca-javascript-sdk';

const config = {
  action: 'purchase',
  productId: [],
  publicKey: 'YOUR_API_KEY', // ENTER YOUR PUBLIC API KEY
  paymentOption: 'gateway',
  onClose: () => {
    console.log('Do something when the user drops off');
  },
  callback: () => {
    console.log('Do something when the user completes a purchase');
  },
  landingUrls: ['https://www.example1.com/', 'https://www.example2.org/'],
};

export function buyInsurance(buyBtn) {
  buyBtn.addEventListener('click', function () {
    mycoverai(config);
  });
}
