import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IAJq6Gut9AHI0iNwInaJPrECahjY6lsYlz55OdhHiOMLSxVxujrrWqKjMc5P9Ec0bpu8k8dVm6gqXtpB6tcSL0p00yNcjt4Qi'
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
    
      return (
        <StripeCheckout
          label='Pay Now'
          name="Mika's Clothing Ltd."
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
    };
    
    export default StripeCheckoutButton;