import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = true;
  count: number;
  profiles: Array<Model> = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }
  changeData(event) {
    this.count++;
    console.log(this.count);
  }

  loadData() {
    this.count = 0;
    // const data = [
    //   { name: 'dip', email: 'dip@gmail.com', phone: '01676501078', age: 24 },
    //   { name: 'akash', email: 'akash@gmail.com', phone: '01676501078', age: 25 },
    //   { name: 'tango', email: 'tango@gmail.com', phone: '01676501078', age: 27 },
    //   { name: 'foo', email: 'foo@gmail.com', phone: '01676501078', age: 30 },
    //   { name: 'voo', email: 'voo@gmail.com', phone: '01676501078', age: 30 },
    //   { name: 'dooo', email: 'dooo@gmail.com', phone: '01676501078', age: 30 },
    //   { name: 'hagoos', email: 'hagoos@gmail.com', phone: '01676501078', age: 30 }
    // ];

    this.httpClient.get(`http://dummy.restapiexample.com/api/v1/employees`).subscribe(
      success => {
        const data = success as any;
        data.forEach(element => {
          this.profiles.push(element);
        });
        this.loading = false;
      },
      error => {}
    );
  }
}

export class Model {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  employee_age: string;
  employee_salary: string;
  employee_name: string;
}
