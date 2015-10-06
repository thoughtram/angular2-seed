import {Component, EventEmitter, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'contact-detail-component',
  properties: ['data'],
  events: ['backClicked', 'editClicked']
})
@View({
  templateUrl: './components/contact-detail/contact-detail-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactDetailComponent {
  editClicked = new EventEmitter();
  backClicked = new EventEmitter();

  goBack () {
    this.backClicked.next(null);
  }

  edit (contact) {
    this.editClicked.next(contact);
  }
}
