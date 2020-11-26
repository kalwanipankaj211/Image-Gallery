import { Component, OnInit,ViewChild , Output ,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import { PersistenceService } from '../../../../core/services/persistence.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() logOutEvent = new EventEmitter();
  constructor(private _router : Router,private _persistenceService: PersistenceService) { }


  ngOnInit(): void {

  }
  logOut()
  {
    this.logOutEvent.emit()
    // this._persistenceService.removeFromStorage('TOKEN');
    // this._router.navigate(['/auth/login']);
  }



}
