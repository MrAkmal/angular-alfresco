import {Component, TemplateRef} from '@angular/core';
import {ToastService} from '../_services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toast.component.html',
  host: {'[class.ngb-toasts]': 'true'},
  styleUrls:['./toast.component.css']
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: { textOrTpl: any; }) { return toast.textOrTpl instanceof TemplateRef; }
}
