import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'contact-detail-component',
  properties: ['data']
})
@View({
  templateUrl: './components/contact-detail/contact-detail-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactDetailComponent {
}
