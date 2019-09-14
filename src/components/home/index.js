import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const displayText = [
  {
    id: 1,
    text: '- No collateral',
  },
  {
    id: 2,
    text: '- Cash loans quickly',
  },
  {
    id: 3,
    text: '- Flexible repayments',
  }
]

const Span = ({ text }) => {
  const spanList = text.map(span => {
  return <span key={span.id} className="mt-2 span-text" style={{ display: 'block' }}>{span.text}</span>;
  });
  
  return (
    <div className="mb-5 mt-5">
        {spanList}
    </div>
  )
}

export const Home = () => {
    return (
      <section className="container">
        <div className="row mt-10">
          <div className="col">
            <img src="../public/assets/images/logo.svg" alt="QuickCredit Logo" className="mt-10__logo mb-5" />
            <p className="primary-text-color"> Get a short term loan in less than </p>
            <p className="five-hours"> 5 hours</p>
            <Link to="/signup" className="get-started">Get started</Link>
            <Span text={displayText} />
            <p className="primary-text-color">Already a user?
              <Link to="/signin" className="apply-link ml-2">Apply</Link>
            </p>
          </div>
            <div className="col">
              <img src="../public/assets/images/heroIllustration.svg" alt="QuickCredit Hero Illustration" className="hero-background" />
            </div>
          </div>
      </section>
    );
}

export default Home;
