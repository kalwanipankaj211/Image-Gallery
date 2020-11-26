import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {NotificationService} from '../../core/services/notification.service';
import {PersistenceService} from  '../../core/services/persistence.service'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  public submitted: boolean;
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService : NotificationService,
    private persistenceService : PersistenceService
  ) {
  }

  ngOnInit(): void {
    this._createForm();
  }
  _createForm()
  {
    this.signupForm = new FormGroup({
			username: new FormControl('', {
				validators: [Validators.required],
				updateOn: 'blur'
			}),
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
			}),
			city: new FormControl('', {
        validators:[Validators.required]
			})
		});
  }
  signUp() {
    if(!this.signupForm.valid)
    {
      return;
    }
    const formData = this.signupForm.getRawValue();
      this.authService.signUp(formData).subscribe((data: any) => {
        if (data) {
          console.log("token: " + data.token);
          this.notificationService.displayToast('success', 'SUCCESS','User Registered Successfully');
          this.router.navigate(['/auth/login']);
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

  signIn()
  {
    this.router.navigate(['/auth/login']);
  }

}
