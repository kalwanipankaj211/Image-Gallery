import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   ErrorTimeOut : number = 12000;
  constructor(
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.limit = 1;
  }
  clearToasty() {
    this.toastyService.clearAll();
  }

displayToast(type: string, title: string, msg: string = '', timeout?: number) {
    const actualTimeout = (timeout && timeout > 0) ? timeout : this.ErrorTimeOut;
    const toastOptions: ToastOptions = this._createToastyOptions(null, msg, actualTimeout);
    this.toastyService[type](toastOptions);
}

private _createToastyOptions(title: string, msg: string, timeout: number) {
    let toastOptions: ToastOptions;
    return toastOptions = {
        title,
        msg,
        showClose: true,
        timeout,
        theme: 'material'
    };
}
}
