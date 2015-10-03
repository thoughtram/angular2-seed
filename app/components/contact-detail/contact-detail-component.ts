import {
  Component,
  EventEmitter,
  View,
  bootstrap,
  CORE_DIRECTIVES,
  Input,
  Output
} from 'angular2/angular2';

@Component({selector: 'contact-detail-component',})
@View({
  templateUrl: './components/contact-detail/contact-detail-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactDetailComponent {
  @Input() data:Contact;
  @Output() editClicked = new EventEmitter();
  @Output() backClicked = new EventEmitter();

  goBack () {
    this.backClicked.next(null);
  }

  edit (contact) {
    this.editClicked.next(contact);
  }
}
