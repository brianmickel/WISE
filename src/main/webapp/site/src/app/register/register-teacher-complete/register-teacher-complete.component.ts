import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-register-teacher-complete',
  templateUrl: './register-teacher-complete.component.html',
  styleUrls: ['./register-teacher-complete.component.scss']
})
export class RegisterTeacherCompleteComponent implements OnInit {
  username: string;
  isUsingGoogleId: boolean;
  googleLogInURL = `${this.configService.getContextPath()}/google-login`;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.isUsingGoogleId = params['isUsingGoogleId'] == 'true';
    });
  }

  login() {
    this.router.navigate(['/login', { username: this.username }]);
  }
}
