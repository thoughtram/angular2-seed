import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ContactDetailComponent} from '../contact-detail/contact-detail-component';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'contact-detail-state-component'
})
@View({
  template: `
    <contact-detail-component
      [data]="contact">
    </contact-detail-component>`,
  directives: [CORE_DIRECTIVES, ContactDetailComponent]
})
export class ContactDetailStateComponent {
  contact:Contact;
  constructor (contactsService: ContactsService, params:RouteParams) {
    this.contact = contactsService.getContact(params.get('id'));
  }
}
