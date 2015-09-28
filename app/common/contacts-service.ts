import {Contact} from '../models/contact';

export class ContactsService {
  private contacts: Array<Contact> = [
    {
      id: 1,
      firstname: 'Pascal',
      lastname: 'Precht',
      street: 'thoughtram road 1',
      zip: '30165',
      city: 'Hannover',
      image: 'http://gravatar.com/avatar/1bb69b75c5e73a7c9f4ebbc4835d622f?s=50'
    },
    {
      id: 2,
      firstname: 'Christoph',
      lastname: 'Burgdorf',
      street: 'thoughtram road 2',
      zip: '30629',
      city: 'Hannover',
      image: 'http://www.gravatar.com/avatar/447b70556cb99e6dfcfea71942a3e68e?s=50'
    }
  ];

  getContacts () {
    return this.contacts;
  }
}
