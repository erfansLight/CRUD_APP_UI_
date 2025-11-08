import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TokenService } from './shared/services/token.service';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD_APP_UI';

  private tokenService : TokenService = inject(TokenService);
  private router: Router = inject(Router);

  ngOnInit(): void {
    const token = this.tokenService.getToken();

    if (token && !this.tokenService.isTokenExpired(token)) {
      const role = this.tokenService.getUserRole(token);

      if (role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/main-page']);
      }
    } else {
      this.router.navigate(['/main-page']);
    }
  }
}

