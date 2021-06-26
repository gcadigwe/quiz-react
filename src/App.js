import React, { useState } from 'react';
import './css/handoff.css';
import './css/styles.css';
import './css/variables.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getBlockchain from './functions/connect';

function App() {
  const [contractInstance, setContractInstance] = useState(null);

  const connectBlockchain = async () => {
    const { poll } = await getBlockchain();
    setContractInstance(poll);
    toast.success('Wallet connected successfully');
  };

  return (
    <>
      <ToastContainer />
      <main className="chemboat">
        <h1 className="chemboat__heading">Chemboat</h1>
        <section className="section">
          <div className="columns">
            <div className="chemboat__column">
              <div className="chemboat__text">Score</div>
            </div>
            <div className="chemboat__column">
              <div className="text-2">My balance</div>
            </div>
            <div className="chemboat__column">
              <button
                onClick={() => connectBlockchain()}
                className="lined-button"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </section>
        <section className="chemboat__section-5">
          <div className="chemboat__text-3">Question 1</div>
          <div className="chemboat__radio-fields">
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option A
              </label>
            </div>
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option B
              </label>
            </div>
          </div>
          <div className="chemboat__radio-fields">
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option C
              </label>
            </div>
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option D
              </label>
            </div>
          </div>
        </section>
        <section className="chemboat__section-5">
          <div className="chemboat__text-3">Question 2</div>
          <div className="chemboat__radio-fields">
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option A
              </label>
            </div>
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option B
              </label>
            </div>
          </div>
          <div className="chemboat__radio-fields">
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option C
              </label>
            </div>
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option D
              </label>
            </div>
          </div>
        </section>
        <section className="chemboat__section-5">
          <div className="chemboat__text-3">Question 3</div>
          <div className="chemboat__radio-fields">
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option A
              </label>
            </div>
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option B
              </label>
            </div>
          </div>
          <div className="chemboat__radio-fields">
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option C
              </label>
            </div>
            <div className="chemboat__radio-item">
              <input
                className="chemboat__radio-field"
                type="radio"
                name="Radio name"
              />
              <label className="chemboat__label" htmlFor="Label Input">
                Option D
              </label>
            </div>
          </div>
          <section className="footer">
            <div className="container-large">
              <div className="footer-rows">
                <div className="footer-row">
                  <h4 className="footer-heading">Resources</h4>
                  <a
                    className="chemboat__footer-link"
                    href="https://www.handoff.design"
                  >
                    Litepaper
                  </a>
                  <a
                    className="chemboat__footer-link"
                    href="https://www.handoff.design"
                  >
                    Blog
                  </a>
                </div>
              </div>
              <hr className="divider" />
              <div className="footer-copyright-text">@2021 Chemboat</div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
