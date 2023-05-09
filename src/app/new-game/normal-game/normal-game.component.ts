import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Menu} from "primeng/menu";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-normal-game',
  templateUrl: './normal-game.component.html',
  styleUrls: ['./normal-game.component.css']
})
export class NormalGameComponent implements OnInit {

  legOptions: MenuItem[] = []
  formGroup: any

  constructor(private fb: FormBuilder,) {
  }


  onSubmit(inputValue: string | number) {
    console.log('inputValue--->', inputValue);
  }

  ngOnInit(): void {
    this.legOptions = [
      {label: '501'},
      {label: '401'},
      {label: '301'},
      {label: '201'},
      {label: '101'}
    ];
    this.formGroup = this.fb.group({
      name: this.fb.control(''),
      numLegs: this.fb.control(''),
      playerOne: this.fb.control(''),
      playerTwo: this.fb.control(''),
      legOptions: this.fb.array([
        this.fb.group({label: this.fb.control(undefined)})
      ]),
    })
  }

}
