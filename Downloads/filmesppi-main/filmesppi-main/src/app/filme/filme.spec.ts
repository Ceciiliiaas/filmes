import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Filmecompo } from './filmecompo';

describe('Filmecompo', () => {
    let component: Filmecompo; 
    let fixture: ComponentFixture<Filmecompo>; 
    beforeEach(async () => {
        await TestBed.configureTestingModule({

            declarations: [Filmecompo]

        })
        .compileComponents();
        fixture = TestBed.createComponent(Filmecompo); 
        component = fixture.componentInstance; 
        
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});