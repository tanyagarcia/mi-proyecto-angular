import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Ingresaramemotest(): void{
    this.router.navigate(['/memotest']);
  }

  

}
