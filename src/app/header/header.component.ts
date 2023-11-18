import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  peliculas!: any;
  peliculasMostrar!: any;
  page: number = 1;
  @Input() filtro!: string;
  constructor(
    private data: DataService
  ) { }
  ngOnInit(): void {
    this.data.getData().subscribe(
      (data: any) => {
        this.peliculas = data.entries;
        this.peliculasMostrar = this.peliculas;
      }
    )
  }
  //que detecte los cambios de la variable de filtro
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtro'] && this.filtro !== undefined) {
      this.peliculasMostrar = this.peliculas.filter(
        (item: any) =>
          item.title.toLowerCase()
            .includes(this.filtro.toLowerCase()));
    }
  }
}
