import { Component, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {

    @Input() title;
    @Input() body;
    @Input() buttonMessage;



    constructor(public activeModal: NgbActiveModal) {}

}
