import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from '../shared.service';

import { SeasonComponent } from './season.component';

describe('SeasonComponent', () => {
  let component: SeasonComponent;
  let fixture: ComponentFixture<SeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonComponent],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [SharedService]
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch races list', () => {
    fixture = TestBed.createComponent(SeasonComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    
    const service = jest.spyOn(SharedService.prototype, 'getRaces');
    fixture.detectChanges();
    expect(service).toHaveBeenCalled();
  });
});
