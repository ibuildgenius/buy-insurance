import mycoverai from '@mycoverai/mca-javascript-sdk';

const config = {
  action: 'purchase',
  pid: ['<product-id>'], // Replace with your product ID(s)
  pk: 'MCAPUBK_TEST|..............', // ENTER YOUR PUBLIC API KEY
  payment_option: 'gateway', // 'gateway' or 'wallet'
  // reference: 'BUY-<unique-reference-id>', // Required if using wallet payment option
  onClose: (close_url) => {
    console.log('SDK closed', close_url);
  },
  callback: (success_url, data) => {
    console.log('Operation successful', success_url, data);
  },
};

export function buyInsurance(buyBtn) {
  buyBtn.addEventListener('click', function () {
    mycoverai(config);
  });
}
