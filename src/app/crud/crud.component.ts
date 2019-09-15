import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  students: [] = [];
  addStatus = false;
  deleteStatus = false;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.http.get('https://desolate-cove-18577.herokuapp.com/student').subscribe((res) => {
      this.students = res['students'];
    }, (err) => {

    }, () => {


    })
  }
  registerStudent(studentForm: NgForm) {
    var student = studentForm.value;

    this.http.post('https://desolate-cove-18577.herokuapp.com/student', student).toPromise().then(() => {
      this.addStatus = true;
      studentForm.resetForm();
      var me = this;
      this.getStudents();
      setTimeout(() => {
        me.addStatus = false;
      }, 3000);
    }).catch(() => {

    }).finally(() => {

    
    })
  }
    deleteStudent(id){
      this.http.delete('https://desolate-cove-18577.herokuapp.com/student/' + id).toPromise().then((res) => {

        this.deleteStatus = true;
        this.getStudents();
        var me = this;
        setTimeout(() => {
          me.deleteStatus = false;
        }, 3000)
      }).catch().finally()
    

  }
}
