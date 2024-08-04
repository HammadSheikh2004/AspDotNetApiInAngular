import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeadingCompComponent } from '../heading-comp/heading-comp.component';
import { ButtonComComponent } from '../button-com/button-com.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  imports: [
    FormsModule,
    HeadingCompComponent,
    ButtonComComponent,
    HttpClientModule,
    CommonModule,
  ],
  providers: [UsersService],
  standalone: true,
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent {
  message: string = '';
  constructor(private myService: UsersService, private Route: Router) {}

  saveData(form: NgForm) {
    const formData = new FormData();
    formData.append('UserName', form.value.UserName);
    formData.append('UserEmail', form.value.UserEmail);
    formData.append('UserPhone', form.value.UserPhone);
    formData.append('UserAge', form.value.UserAge);
    const ImageId = document.getElementById('imageId') as HTMLInputElement;

    if (ImageId.files && ImageId.files.length > 0) {
      formData.append('file', ImageId.files[0]);
    }
    form.reset();
    this.myService.addData(formData).subscribe(
      (res) => {
        this.message = res.message;
        Swal.fire({
          title: 'Success!',
          text: this.message,
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          this.Route.navigate(['/']);
        });
      },
      (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'There was a problem saving your data. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    );
  }
}
