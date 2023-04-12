import Modal from "react-modal";
import style from "./contactFormModal.module.scss";
import { CloseButton } from "../CloseButton/CloseButton";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";

type ContactFormModalProps = {
  closeModal: () => void;
  modalIsOpen: boolean;
};

export const ContactFormModal = ({
  modalIsOpen,
  closeModal,
}: ContactFormModalProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("dh");

    console.log(process.env.NEXT_PUBLIC_SERVICE_ID, formRef.current);

    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      formRef.current &&
      process.env.NEXT_PUBLIC_USER_ID
    ) {
      console.log("sdmkf");

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.currentTarget.reset();
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Contact Modal"
      onRequestClose={closeModal}
      bodyOpenClassName={style["modal__body--open"]}
      overlayClassName={style["modal__overlay"]}
      className={style["modal__content"]}
    >
      <div className={style.contactFormContainer}>
        <div className={style.contactFormContainer__headingContainer}>
          <h2 className={style.contactFormContainer__heading}>Contact us</h2>
          <CloseButton close={closeModal} />
        </div>
        <form
          className={style.contactFormContainer__form}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <div className={`${style.form__group} `}>
            <input
              className={style.form__field}
              name="user_name"
              placeholder="Name"
              required
            ></input>
            <label className={style.form__label} htmlFor="name">
              Name
            </label>
          </div>
          <div className={style.form__group}>
            <input
              className={style.form__field}
              placeholder="Email"
              name="user_email"
              type="email"
              required
            ></input>
            <label className={style.form__label} htmlFor="email">
              Email
            </label>
          </div>
          <div className={`${style.form__group} `}>
            <textarea
              className={style.form__field}
              name="message"
              placeholder="Message"
              required
              rows={5}
              cols={40}
            ></textarea>
            <label className={style.form__label} htmlFor="message">
              Message
            </label>
          </div>
          <button
            className={style.contactFormContainer__button}
            type="submit"
            value="send"
          >
            Send
          </button>
        </form>
      </div>
      {/* {process.env.NEXT_PUBLIC_SITE_KEY && (
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
      )} */}
    </Modal>
  );
};
