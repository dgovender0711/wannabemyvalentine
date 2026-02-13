import Envelope from './components/Envelope';
import './Yes.css';

const Yes = () => {
  // Gifts inside the envelopes
  const messages = [
    'Dessert Run (Sweet Treat Trip)',
    '574 Cuddles for each day we have been dating',
    'Movie Night of your Choice',
    'Picnic Date of your Choosing'
  ];

  const labels = ['For your random chocolate cravings', 'No phones allowed', 'Even if its a chick flick', 'How cute'];

  const envelopes = messages.map((message, index) => (
    <div key={index} className="flex flex-col items-center">
      <Envelope id={index}>{message}</Envelope>
      <p className="yes-label mt-3 mb-2 text-lg md:text-xl">{labels[index]}</p>
    </div>
  ));

  return (
    <div className="min-h-screen w-screen yes-page flex flex-col items-center justify-center px-4 py-10">
      <div className="yes-card w-full max-w-5xl rounded-3xl px-6 md:px-12 py-10 md:py-14 shadow-2xl">
        <div className="text-center">
          <h1 className="yes-title text-3xl md:text-5xl">Happy Valentine’s Day!</h1>
          <p className="yes-subtitle mt-5 text-base md:text-lg">
            You get a few “coupons” you can use whenever you want — so choose wisely.
          </p>
        </div>

        <div className="envelopes-container flex justify-center flex-col xl:flex-row gap-8 md:gap-10 mt-10">
          {envelopes}
        </div>
      </div>
    </div>
  );
};

export default Yes;
