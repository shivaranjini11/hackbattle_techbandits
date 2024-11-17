import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { HttpClient, } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  data: any;
  constructor(private apiService: ServiceService, private http: HttpClient){
    console.log('constructor ---------->')
  }

  ngOnInit(){
    this.fetchAPIData()
  }

  fetchAPIData(){
    this.apiService.apiFetch('http://localhost:3000/api/get_users').subscribe(
      response => {
        this.data  = response;
        console.log(this.data);
      },
      error => {
        console.log('Error...')
      }
    );
  }
}
