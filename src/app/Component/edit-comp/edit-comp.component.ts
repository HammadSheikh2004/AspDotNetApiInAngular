import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { HeadingCompComponent } from '../heading-comp/heading-comp.component';
import { ButtonComComponent } from '../button-com/button-com.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-comp',
  imports: [
    HttpClientModule,
    FormsModule,
    HeadingCompComponent,
    ButtonComComponent,
    CommonModule,
  ],
  providers: [UsersService],
  standalone: true,
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css'],
})
export class EditCompComponent implements OnInit {
  userData: any;
  userid: string = '';
  message: string = '';
  errorMessage:string = '';
  constructor(
    private route: ActivatedRoute,
    private myService: UsersService,
    private navigateRoute: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userid = params['id'];
      this.myService.getEditData(this.userid).subscribe((res) => {
        this.userData = res;
        console.log(this.userData);
      });
    });
  }

  editData(form: NgForm) {
    const formData = new FormData();
    formData.append('Id', form.value.id);
    formData.append('UserName', form.value.UserName);
    formData.append('UserEmail', form.value.UserEmail);
    formData.append('UserPhone', form.value.UserPhone);
    formData.append('UserAge', form.value.UserAge);
    formData.append('Image', form.value.Image);
    const ImageId = document.getElementById('imageId') as HTMLInputElement;

    if (ImageId.files && ImageId.files.length > 0) {
      formData.append('file', ImageId.files[0]);
    }

    this.myService.updateData(formData, this.userid).subscribe(
      (res) => {
        this.message = res.message;
        Swal.fire({
          title: 'Success!',
          text: this.message,
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          this.navigateRoute.navigate(['/showData']);
        });
      },
      (err) => {
        this.errorMessage = err.error.errorMessage;
        Swal.fire({
          title: 'Error!',
          text: this.errorMessage,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    );
  }
}
