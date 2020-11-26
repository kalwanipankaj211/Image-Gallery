import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {AuthService} from '../../core/services/auth.service';
import { PersistenceService } from '../../core/services/persistence.service';
import { AuthService } from '../services/auth.service';
import {NotificationService} from '../../core/services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public submitted: boolean;
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

  constructor(
    private router: Router,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private notificationService : NotificationService) {
  }

  ngOnInit(): void {
    this._createForm();
  }
  _createForm()
  {
    this.loginForm = new FormGroup({
			email: new FormControl('', {
        validators : [Validators.required,
          Validators.pattern(this.emailPattern),
          Validators.minLength(5),
          Validators.maxLength(50)],
				updateOn: 'blur'
			}),
			password: new FormControl('', {
        validators:[Validators.required],
				updateOn: 'blur'
			})
		});
  }

  continue() {
    if(!this.loginForm.valid)
    {
      return;
    }
      const formData = this.loginForm.getRawValue();
      this.authService.login(formData).subscribe((data: any) => {
        if (data) {
          console.log("token: " + data.token);
          this.persistenceService.setInStorage('TOKEN',data.token)
          this.notificationService.displayToast('success', 'SUCCESS','User Logged In Successfully');
          this.router.navigate(['/gallery/add-gallery']);
        } else {
        }
      }, error => {
        if(error.error.message)
        {
        this.notificationService.displayToast('error', 'ERROR',error.error.message);

        }
        else{
        this.notificationService.displayToast('error', 'ERROR',error.message);

        }
      });

  }
  signUp()
  {
    this.router.navigate(['auth/sign-up'])
  }
}
