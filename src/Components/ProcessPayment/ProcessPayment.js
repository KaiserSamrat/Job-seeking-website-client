import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm'
const stripePromise = loadStripe('pk_test_51IhFjgDir1KsyyMNQsvKURveekiMiUE5HOYtKtdw8gNwHFSPlKaNO4gyBJ0zHe47O3IKzrkBFor4JRp3eV3hXBH500FtYsHhrz');
const ProcessPayment = () => {
    return (
        <div className='container'>
            <Elements stripe={stripePromise}>
                <CardForm/>
            
            </Elements>

        </div>
    );
};

export default ProcessPayment;