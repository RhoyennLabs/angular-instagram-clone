import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosRecomendadosComponent } from './usuarios-recomendados.component';

describe('UsuariosRecomendadosComponent', () => {
  let component: UsuariosRecomendadosComponent;
  let fixture: ComponentFixture<UsuariosRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosRecomendadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuariosRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
