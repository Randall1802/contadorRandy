import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CounterComponent } from "./counter.component"
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonDisComponent } from './button-dis/button-dis.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';


describe("CounterComponent Unit", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [CounterComponent],
        }).compileComponents();
      });

    it("se debe crear el componente counter", () =>{
        const fixture = TestBed.createComponent(CounterComponent);

        expect(fixture.componentInstance).toBeTruthy(true);
    });

    it("Valor inicial del contador es 20", ()=>
    {
        const counter = new CounterComponent();
        expect(counter.contador).toBe(20);
    });

    it("Se debe crear el texto Counter: 0 ", () => {
        const fixture = TestBed.createComponent(CounterComponent);
        fixture.detectChanges();  //pa detectar cambios
        const compiled: HTMLElement = fixture.nativeElement;
        expect(compiled.querySelector("h2")?.textContent).toEqual("Contador: 20");  //el signo es para que pueda o no existir. con nums es el tobe
    });
});

describe("Integration testing", () =>{

    let component : CounterComponent;
    let fixture : ComponentFixture<CounterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [CounterComponent, ButtonAddComponent, ButtonDisComponent],
          providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true }
          ]
        }).compileComponents();
      });

    beforeEach(() =>{
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("evento clic ADD", () => {
        const compiled : HTMLElement = fixture.nativeElement;
        //console.log(compiled);

        const counterValue = compiled.querySelector("h2");
        const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector("#add");
        btnAdd.click();

        fixture.detectChanges();

        expect(counterValue?.textContent).toEqual("Contador: 21");
    });

    it("evento clic DIS", () => {
        const compiled : HTMLElement = fixture.nativeElement;
        console.log(compiled);

        const counterValue = compiled.querySelector("h2")!;
        const btnDis: HTMLElement = fixture.debugElement.nativeElement.querySelector("#dis");
        btnDis.click();

        fixture.detectChanges();

        expect(counterValue.textContent).toEqual("Contador: 19");
    });
});
    