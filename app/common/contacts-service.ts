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
      image: 'http://www.gravatar.com/avatar/447b70556cb99e6dfcfea71942a3e68e?s=50'
    },
    {
      id: 2,
      firstname: 'Christoph',
      lastname: 'Burgdorf',
      street: 'thoughtram road 2',
      zip: '30629',
      city: 'Hannover',
      image: 'http://gravatar.com/avatar/1bb69b75c5e73a7c9f4ebbc4835d622f?s=50'
    },
    {
      id: 3,
      firstname: 'Nicole',
      lastname: 'Hansen',
      street: '2058 high street',
      zip: '65222',
      city: 'Athlone',
      image: 'https://randomuser.me/api/portraits/med/women/94.jpg'
    },
    {
      id: 4,
      firstname: 'Zoe',
      lastname: 'Moore',
      street: '3745 denny street',
      zip: '86337',
      city: 'Ballinasloe',
      image: 'https://randomuser.me/api/portraits/med/women/29.jpg'
    },
    {
      id: 5,
      firstname: 'Diane',
      lastname: 'Hale',
      street: '1459 tara street',
      zip: '18371',
      city: 'Bray',
      image: 'https://randomuser.me/api/portraits/med/women/27.jpg'
    },
    {
      id: 6,
      firstname: 'Barry',
      lastname: 'Ford',
      street: '6503 tara street',
      zip: '43378',
      city: 'Dungarvan',
      image: 'https://randomuser.me/api/portraits/med/men/44.jpg'
    },
    {
      id: 7,
      firstname: 'Diana',
      lastname: 'Ellis',
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      image: 'https://randomuser.me/api/portraits/med/women/92.jpg'
    },
    {
      id: 7,
      firstname: 'Ella',
      lastname: 'Grant',
      street: '2749 church road',
      zip: '87125',
      city: 'Clonakilty',
      image: 'https://randomuser.me/api/portraits/med/women/37.jpg'
    }

  ];

  getContacts () {
    return this.contacts;
  }

  getContact (id) {
    return this.contacts.find((contact) => contact.id == id);
  }
}
