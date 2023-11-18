import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent{
  form: FormGroup;
  valor!: string;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      search: ['']
    })
  }

  filtro(){
    let valor = this.form.value.search;
    this.valor = valor;
  }
}
