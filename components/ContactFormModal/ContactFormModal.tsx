import Modal from "react-modal";
import style from "./contactFormModal.module.scss";
import { CloseButton } from "../CloseButton/CloseButton";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "next-i18next";

// import ReCAPTCHA from "react-google-recaptcha";

type ContactFormModalProps = {
  closeModal: () => void;
  modalIsOpen: boolean;
};

export const ContactFormModal = ({
  modalIsOpen,
  closeModal,
}: ContactFormModalProps) => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  // const captchaRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      formRef.current &&
      process.env.NEXT_PUBLIC_USER_ID
    ) {
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
          <h2 className={style.contactFormContainer__heading}>
            {t("contactForm.contactUs")}
          </h2>
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
              {t("contactForm.name")}
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
              {t("contactForm.message")}
            </label>
          </div>
          {/* {process.env.NEXT_PUBLIC_SITE_KEY && (
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
              ref={captchaRef}
            />
          )} */}
          <button
            className={style.contactFormContainer__button}
            type="submit"
            value="send"
          >
            {t("contactForm.send")}
          </button>
        </form>
      </div>
    </Modal>
  );
};

//  NIE DZIAŁAJĄCA WERSJA Z RECAPTCHA

// import Modal from "react-modal";
// import style from "./contactFormModal.module.scss";
// import { CloseButton } from "../CloseButton/CloseButton";
// import { useState, useReducer } from "react";
// import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "name":
//       return { ...state, name: action.value };
//     case "email":
//       return { ...state, email: action.value };
//     case "message":
//       return { ...state, message: action.value };
//     default:
//       throw new Error();
//   }
// }

// type ContactFormModalProps = {
//   closeModal: () => void;
//   modalIsOpen: boolean;
// };

// export const ContactFormModal = ({
//   modalIsOpen,
//   closeModal,
// }: ContactFormModalProps) => {
//   const [formState, dispatch] = useReducer(reducer, initialState);
//   const [showFormErr, setShowFormErr] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState({
//     title: "",
//     paragraph: "",
//   });
//   const [showCaptcha, setShowCaptcha] = useState(false);
//   const { name, email, message } = formState;

//   const submitFormAndShowCaptcha = (e) => {
//     e.preventDefault();
//     setShowCaptcha(true);
//     console.log("jksdnvk");
//   };

//   const sendEmail = (captchaValue) => {
//     if (name === "" || email === "" || message === "") {
//       setShowFormErr(true);
//       return;
//     }

//     const params = {
//       ...formState,
//       "g-recaptcha-response": captchaValue,
//     };

//     setFormSubmitted({ title: "Sending message...", paragraph: "" });
//     if (
//       process.env.NEXT_PUBLIC_SERVICE_ID &&
//       process.env.NEXT_PUBLIC_TEMPLATE_ID &&
//       params &&
//       process.env.NEXT_PUBLIC_USER_ID
//     ) {
//       console.log("sdmkf");

//       emailjs
//         .send(
//           process.env.NEXT_PUBLIC_SERVICE_ID,
//           process.env.NEXT_PUBLIC_TEMPLATE_ID,
//           params,
//           process.env.NEXT_PUBLIC_USER_ID
//         )
//         .then(
//           ({ status }) => {
//             if (status === 200) {
//               setFormSubmitted({
//                 title: "Message has been sent",
//                 paragraph: "We will be in contact with you soon.",
//               });
//             } else {
//               setFormSubmitted({
//                 title:
//                   "Unexpected status code returned from EmailJS, try again later",
//                 paragraph: "Please contact us by email.",
//               });
//             }
//           },
//           (err) => {
//             // eslint-disable-next-line no-console
//             console.log(err);
//             setFormSubmitted({
//               title: "Error sending message, try again later",
//               paragraph: "Please contact us by email.",
//             });
//           }
//         );
//     }
//   };

//   return (
//     <Modal
//       isOpen={modalIsOpen}
//       contentLabel="Contact Modal"
//       onRequestClose={closeModal}
//       bodyOpenClassName={style["modal__body--open"]}
//       overlayClassName={style["modal__overlay"]}
//       className={style["modal__content"]}
//     >
//       {formSubmitted.title === "" ? (
//         <div>
//           <div className={style.contactFormContainer__headingContainer}>
//             <h2 className={style.contactFormContainer__heading}>Contact us</h2>
//             <CloseButton close={closeModal} />
//           </div>
//           {!showCaptcha ? (
//             <form onSubmit={submitFormAndShowCaptcha}>
//               <div className={style.contactFormContainer__form}>
//                 <div className={`${style.form__group} `}>
//                   <input
//                     className={style.form__field}
//                     id="contact-form-name"
//                     name="user_name"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) =>
//                       dispatch({ type: "name", value: e.target.value })
//                     }
//                     required
//                   ></input>
//                   <label className={style.form__label} htmlFor="name">
//                     Name
//                   </label>
//                 </div>
//                 <div className={style.form__group}>
//                   <input
//                     className={style.form__field}
//                     id="contact-form-email"
//                     placeholder="Email"
//                     name="user_email"
//                     type="email"
//                     value={email}
//                     onChange={(e) =>
//                       dispatch({ type: "email", value: e.target.value })
//                     }
//                     required
//                   ></input>
//                   <label className={style.form__label} htmlFor="email">
//                     Email
//                   </label>
//                 </div>
//                 <div className={`${style.form__group} `}>
//                   <textarea
//                     className={style.form__field}
//                     id="contact-form-message"
//                     name="message"
//                     placeholder="Message"
//                     value={message}
//                     onChange={(e) =>
//                       dispatch({ type: "message", value: e.target.value })
//                     }
//                     required
//                     rows={5}
//                     cols={40}
//                   ></textarea>
//                   <label className={style.form__label} htmlFor="message">
//                     Message
//                   </label>
//                 </div>
//                 <div>
//                   {showFormErr ? (
//                     <p>
//                       Please fill in all three input boxes to send a message
//                     </p>
//                   ) : null}
//                   <button
//                     className={style.contactFormContainer__button}
//                     type="submit"
//                     // value="send"
//                   >
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </form>
//           ) : (
//             process.env.NEXT_PUBLIC_SITE_KEY && (
//               <ReCAPTCHA
//                 sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
//                 onChange={sendEmail}
//               />
//             )
//           )}
//         </div>
//       ) : (
//         <div>
//           <h3>{formSubmitted.title}</h3>
//           <p>{formSubmitted.paragraph}</p>
//         </div>
//       )}
//     </Modal>
//   );
// };
