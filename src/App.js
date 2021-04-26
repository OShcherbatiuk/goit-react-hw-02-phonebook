import { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data =>
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
