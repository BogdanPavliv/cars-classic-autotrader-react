import React, { useEffect, useState } from "react";
import { CustomModal } from "../../components/CustomModal/CustomModal";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Contacts = () => {
  const [modalFormIsOpen, setModalFormOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [emptyName, setEmptyName] = useState('');
  const [emptySurname, setEmptySurname] = useState('');

  const [emailDirty, setEmailDirty] = useState(false);
  const [emptyNameDirty, setEmptyNameDirty] = useState(false);
  const [emptySurnameDirty, setEmptySurnameDirty] = useState(false);

  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [emptyNameError, setEmptyNameError] = useState('The field cannot be empty');
  const [emptySurnameError, setEmptySurnameError] = useState('The field cannot be empty');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || emptyNameError || emptySurnameError) {
        setFormValid(false);
    } else {
        setFormValid(true);
    }
  }, [emailError, emptyNameError, emptySurnameError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Incorrect email!');
        setEmailDirty(true);
    } else {
        setEmailError('');
        setEmailDirty(false);
    }
  }

  const emptyNameHandler = (e) => {
    setEmptyName(e.target.value)
    if (!e.target.value) {
        setEmptyNameError('The field cannot be empty');
        setEmptyNameDirty(true);
    } else {
        setEmptyNameError('');
        setEmptyNameDirty(false);
    }
  }

  const emptySurnameHandler = (e) => {
    setEmptySurname(e.target.value)
    if (!e.target.value) {
        setEmptySurnameError('The field cannot be empty');
        setEmptySurnameDirty(true);
    } else {
        setEmptySurnameError('');
        setEmptySurnameDirty(false)
    }
 }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
          setEmailDirty(true)
          break
      case 'name':
          setEmptyNameDirty(true)
          break
      case 'surname':
        setEmptySurnameDirty(true)
            break
      // no default
    }
  }

  const [value, setValue] = useState();

  // Checkbox validation

  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setHasError(false); // Clear any previous error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setHasError(true);
      // Handle the error (e.g., display a message or add the error class)
    } else {
      // Proceed with form submission
    }
  };

  return (
    <>
      <section className="section-map page-contacts">
        <div className="container-md">
          <div className="section-map--wrapper">
            <div className="section-map__top">
              <h3 className="title-left">
                Where <br /> to find us
              </h3>
              <div className="section-map__top--actions">
                <a className="section-map__top--phone" href="tel:+17015811331">
                  +1 (701) 581-1331
                </a>
                <a
                  className="section-map__top--address"
                  href="https://www.google.com/maps/place/Чикаґо,+Іллінойс,+Сполучені+Штати+Америки/@41.8336152,-87.8967695,11z/data=!3m1!4b1!4m6!3m5!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!8m2!3d41.8781136!4d-87.6297982!16zL20vMDFfZDQ?authuser=0&entry=ttu"
                >
                  161 Trumpeter Ave, Soldotna, Alaska
                </a>
                <div className="badge-container">
                  <button
                    className="badge-transparent"
                    onClick={() => setModalFormOpen(true)}
                    type="submit"
                  >
                    Submit your application
                  </button>
                </div>
              </div>
            </div>
            <div className="section-map__bottom">
              <div className="section-map__map-wrapper">
                <div style={{ width: "100%" }}>
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=Chicago%20Illinois+(Cars%20Classic%20Autotrader)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="google map"
                    width={"100%"}
                    height={"700"}
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CustomModal
        isOpen={modalFormIsOpen}
        onClose={() => setModalFormOpen(false)}
        className="modal"
      >
        <h4 className="modal__title">
          Connect<br />with us
        </h4>
        <form action="#!" id="form" className="form" onSubmit={handleSubmit}>
        <div className="form__top">
          <input onChange={e => emptyNameHandler(e)} value={emptyName} onBlur={e => blurHandler(e)} className={(emptyNameDirty && emptyNameError) ? "form__input form__input--error" : "form__input"} id="formName" type="text" name="name" placeholder="Name"/>

          <input onChange={e => emptySurnameHandler(e)} value={emptySurname} onBlur={e => blurHandler(e)} className={(emptySurnameDirty && emptySurnameError) ? "form__input form__input--error" : "form__input"} id="formSurname" type="text" name="surname" placeholder="Surame"/>
        </div>
        <div className="form__middle">
          <PhoneInput value={value} onChange={setValue} className="form__input" id="formPhone" type="text" name="phone"/>

          <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className={(emailDirty && emailError) ? "form__input form__input--error" : "form__input"} id="formEmail" type="text" name="email" placeholder="Email"/>
        </div>
        <textarea className="form__textarea" id="formMessage" name="message" placeholder="Comment"></textarea>
        <div className="form__bottom">
          <button disabled={!formValid} className="form__btn" type="submit">Contact me</button>
          <div className={`checkbox ${hasError ? 'checkbox--error' : ''}`}>
            <input className="checkbox__input" type="checkbox" name="agreement" id="formAgreement" checked={isChecked}  onChange={handleCheckboxChange}/>
             <label className={hasError ? "checkbox__label checkbox__label--error" : "checkbox__label"} htmlFor="formAgreement">
              <a href="#!">I agree with the privacy policy</a>
             </label>
          </div>
        </div>
      </form>
      </CustomModal>
    </>
  );
};

export default Contacts;
