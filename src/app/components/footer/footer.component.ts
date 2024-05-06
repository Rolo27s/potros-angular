import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ClubComponent } from './club/club.component';
import { EquiposComponent }  from './equipos/equipos.component';
import { FefaComponent }    from './fefa/fefa.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ClubComponent, EquiposComponent, FefaComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('footerDynamic', { static: true }) footerDynamic!: ElementRef;

  currentComponent: any; // Track the currently loaded component

  ngOnInit() { }

  loadComponent(componentName: string) {
    // Clear existing component if present
    if (this.currentComponent) {
      this.footerDynamic.nativeElement.innerHTML = '';
    }

    let componentType: any;
    switch (componentName) {
      case 'club':
        componentType = ClubComponent;
        break;
      case 'equipos':
        componentType = EquiposComponent;
        break;
      case 'fefa':
        componentType = FefaComponent;
        break;
      default:
        // Handle default or error case (optional)
        break;
    }

    if (componentType) {
      // Use Angular's ViewContainerRef for dynamic component creation (optional)

      // Simpler approach: directly append HTML content
      this.footerDynamic.nativeElement.innerHTML = `<${componentName}></${componentName}>`;
    }
  }

  ngAfterViewInit(): void {
    // Now you can safely access footerDynamic.nativeElement
    this.loadComponent('club'); // Assuming you want to load the club component initially
  }
}