This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Uses node version `16.10.0`

Install packages

```bash

npm install

or 

yarn install
```

### Setting up Environment Variables

Create a `.env.local` file more information about Next.js ENVs can be found [here](https://nextjs.org/docs/basic-features/environment-variables).

Go to [Test Wyre](https://www.testwyre.com/sign-up) to get an AC(Account ID), API KEY, and SK (SECRET KEY) and add them to your env file as so:

```javascript
NEXT_PUBLIC_AC_ID=AC_...
NEXT_PUBLIC_API_KEY=AK-...
NEXT_PUBLIC_SECRET_KEY=SK-...
```

### Starting the development server

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing info

#### Payment Widget

To test the payment widget, maximum amount is $100USD. This is a limitation set by us. But a limitation by Wyze is:

More than $1,000 USD and payment will not go through, explained [here](https://docs.sendwyre.com/docs/wyre-checkout-1#transaction-processing-limits)

Test Wyre has testing credentials clients can use. When testing the payment widget, use cards:

| Card Type         | Card Number       | Expiration    | CVV   |
| ----------------- | ----------------- | ------------- | ----- |
| Visa (US)         | 4111111111111111  | 10/23         | 123   |
| Mastercard (US)   | 5454545454545454  | 10/23         | 123   |
| Visa (Int'l)      | 4111111111111111  | 10/23         | 123   |
| Mastercard (Int'l)| 5555555555554444  | 10/23         | 123   |

Bank Statement Authorization and SMS Code

You'll be required to enter two codes to validate the bank account and phone number for the test transactions. You can enter `000000` for both to complete this verification.

#### KYC Widget

To Test KYC widget, enter an amount over $100 USD, and tester will be asked to go through KYC process.

If the tester has metamask, they'll be asked to go through KYC with their metamask account. If not, a generated key will be used for the tester's brower.

Dummy data can be used, but when the tester arrives at the Plaid Bank login, the following credentials need to be used for username and password:

| Username          | Password   |
| ----------------- | ---------- |
| user_good         | pass_good  |

## TODO

- Add backend to save transaction records
- Refactor to be consistent with current Etherland's codebase
- Validation for input fields (email, amount, publicKey).
- Discuss and styling for after successful purchase
