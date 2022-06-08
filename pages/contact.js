import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xzboweaj");
  const [name, setName] = useState("");
  if (state.succeeded) {
      return <p>Merci {name} 😊</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Ton adresse email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="text">
        Ton prénom
      </label>
      <input
        id="name"
        type="text" 
        name="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ValidationError 
        prefix="Text" 
        field="text"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;