import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { HeadingCompComponent } from '../heading-comp/heading-comp.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SearchCompComponent } from '../search-comp/search-comp.component';
import { SearchPipe } from 'src/app/search.pipe';

@Component({
  selector: 'app-display-data',
  imports: [
    CommonModule,
    HttpClientModule,
    HeadingCompComponent,
    RouterLink,
    SearchCompComponent,
    SearchPipe
  ],
  standalone: true,
  providers: [UsersService],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent {
  data: any;
  userId: number = 0;
  length:number = 0;
  searchText:string = "";
  constructor(
    private myService: UsersService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.myService.fetchData().subscribe((res) => {
      this.data = res;
      this.sortDataByIdDesc();
    });
  }
  sortDataByIdDesc(): void {
    this.data.sort((a: any, b: any) => b.id - a.id);
  }

  deleteData(id: number): void {
    this.myService.deleteData(id).subscribe((res) => {
      this.data = this.data.filter((item: any) => item.id !== id);
      this.route.navigate(['/showData']);
    }, (error) => {
      console.error('Error deleting data:', error);
    });
  }
}
