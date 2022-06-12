import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from "../assets/css/contact.module.css";
import { motion } from "framer-motion";

import Navbar from "./navbar";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzboweaj");
  const [name, setName] = useState("");
  if (state.succeeded) {
      return <div>
        <Navbar />
        <div className={styles.response}>
          <div className={styles.titleResponse}>Thank you {name} 😊</div>
          <div className={styles.titleResponse}>We'll get back to you soon</div>
        </div>
      </div>;
  }
  return (
      <div>
        <Navbar />
        <div className={styles.title}>
          Let's get in touch
        </div>
        <div className={styles.subtitle}>
          Une question ou une remarque ? Nous t'écoutons! 
        </div>
          <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.form}>
              <div className={styles.name}>
                <input
                  id="name_input"
                  type="text" 
                  name="text"
                  value={name}
                  placeholder="Mon prénom est"
                  onChange={(e) => setName(e.target.value)}
                />
                <ValidationError 
                  prefix="Text" 
                  field="text"
                  errors={state.errors}
                />
              </div>
              <div className={styles.email}>
                <input
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="Mon email est"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className={styles.message}>
              <textarea
              id="message"
              name="message"
              placeholder="J'aimerais vous parler de"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <button type="submit" disabled={state.submitting} className={styles.submit}>
                Envoyer mon message
              </button>
            </motion.div>

        </form>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;