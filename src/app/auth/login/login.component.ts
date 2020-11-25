import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {AuthService} from '../../core/services/auth.service';
import { PersistenceService } from '../../core/services/persistence.service';
import { AuthService } from '../services/auth.service';

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
    private storageService: PersistenceService) {
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
    this.authService.login(this.loginForm.value).subscribe((data: any) => {
      if (data) {
        console.log("token: " + data.access_token);
        this.storageService.setInSession('5d-solutions.TOKEN', data.access_token);
        this.router.navigate(['dashboard/project']);
      } else {
        // console.log("data Not Found");
      }
    }, error => {
      // console.log('error in Project Service',error);
    });

  }
}
