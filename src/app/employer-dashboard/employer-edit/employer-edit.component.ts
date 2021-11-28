import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { AuthService } from 'src/app/services/auth.service';
import { EmployerService } from 'src/app/services/employer.service';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-employer-edit',
  templateUrl: './employer-edit.component.html',
  styleUrls: ['./employer-edit.component.css']
})
export class EmployerEditComponent implements OnInit {
  model: any = {};
  constructor( public authService: AuthService,
    public progressBar: ProgressBarService,
    private alertService: AlertService,
    private employerService: EmployerService) { }

    ngOnInit() {}

    onFileChange(e: { target: { files: any[]; }; }) {
      this.model.file = e.target.files[0];
    }
  
    onSubmit() {
      this.alertService.info("Updating Account");
      this.progressBar.startLoading();
      const updateEmployerObserver = {
        next: (x: any) => {
          this.progressBar.setSuccess();
          console.log("Account Updated");
          this.alertService.success("Account Updated");
          this.progressBar.completeLoading();
        },
        error: (err: any) => {
          this.progressBar.setError();
          console.log(err);
          this.alertService.danger("Unable to Update Account");
          this.progressBar.completeLoading();
        }
      };
      this.employerService
        .updateEmployer(this.model)
        .subscribe(updateEmployerObserver);
    }
  }
