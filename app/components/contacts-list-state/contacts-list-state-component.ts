import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ContactsListComponent} from '../contacts-list/contacts-list-component';
import {Router} from 'angular2/router';

@Component({
  selector: 'contacts-list-state-component'
})
@View({
  template: `
    <contacts-list-component
      [data]="contacts"
      (contact-opened)="onContactOpened($event)">
    </contacts-list-component>`,
  directives: [CORE_DIRECTIVES, ContactsListComponent]
})
export class ContactsListStateComponent {
  contacts: Array<Contact>;
  router: Router;
  constructor (contactsService: ContactsService, router: Router) {
    this.contacts = contactsService.getContacts();
    this.router = router;
  }

  onContactOpened (contact) {
    this.router.navigate('/contact/' + contact.id);
  }
}
