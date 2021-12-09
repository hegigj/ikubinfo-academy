import {AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked {

  /**
   * Nje komponent eshte thjesht nje class qe ne momentin kur projekti kerkon te shfaqet, krijon nje instance te kesaj
   * klase.
   * const lifeCycleHooksComponent = new LifeCycleHooksComponent()
   * Ne momentin e inicializimit thirret construktori i klases.
   */
  constructor() {
    console.log('New instance of LifeCycleHooksComponent');
  }

  /**
   * OnInit eshte nje life cycle hook.
   * Per ta perdorur ne duhet te implementojme interface OnInit
   * Ky interface na imponon qe te perdorim metoden ngOnInit(): void
   * Kjo metode thirret direkt pasi komponenti(klasa) inicializohet
   */
  ngOnInit(): void {
    console.log('[OnInit]: called first');
  }

  /**
   * AfterViewInit eshte nje life cycle hook.
   * Per ta perdorur ne duhet te implementojme interface AfterViewInit
   * Ky interface na imponon te perdorim metoden ngAfterViewInit(): void
   * Kjo metode thirret pasi template-i apo html-ja komponentit behet load ne browser (DOM)
   * Template deklarohet ne decorator @Component({ template ``, ...})
   * Html deklarohet ne decorator @Component({ templateHtml: './url', ...})
   * Kujdes, vetem nje konfigurim eshte i lejueshem
   */
  ngAfterViewInit(): void {
    console.log('[AfterViewInit]: called after template or html is rendered in DOM');
  }

  /**
   * OnChanges eshte nje life cycle hook.
   * Per ta perdorur ne duhet te implementojme interface OnChanges
   * Ky interface na imponon te perdorim metoden ngOnChanges(changes: SimpleChanges): void
   * Ky life cycle hook perdoret sebashku me decorator @Input() i cili duhet te dekoroj nje property te komponentit
   * Ne rastin konkret kemi propery "input" te dekoruar me decorator @Input
   * Metoda ngOnChanges ka si argument "changes" te tipit SimpleChanges
   * Ky argument eshte nje objekt json { input: SimpleChange }
   * Nese do kishim disa property te dekoruar me decorator @Input, psh: input, prop1, prop2, prop3
   * do kishim changes { input: SimpleChange, prop1: SimpleChange, prop2: SimpleChange, prop3: SimpleChange }
   * Ky input e merr vleren nga jasht komponentit
   * Metoda ngOnChanges behet trigger sa here nje nga input-et ndryshon state(vleren)
   */
  @Input()
  input: string | number = 'I\'m from outside this component';

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChange]: called every time that the input decorated with @Input changes state(value)');
    console.log('[OnChange]: changes', changes);
  }

  /**
   * AfterViewChecked eshte nje life cycle hook.
   * Per ta perdorur ne duhet te implementojme interface AfterViewChecked
   * Ky interface na imponon qe te perdorim metoden ngAfterViewChecked(): void
   * Kjo metode thirret pasi komponenti ndryshon state dhe ky state eshte perdorur ne template-in apo html-n e
   * komponentit
   */
  ngAfterViewChecked(): void {
    console.log('[AfterViewChecked]: called every time that state that is used on template or html is changed');
  }
}
