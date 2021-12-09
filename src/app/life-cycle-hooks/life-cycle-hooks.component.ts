import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit, AfterViewInit, OnChanges, AfterContentInit, AfterViewChecked, AfterContentChecked, DoCheck, OnDestroy {

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
   * AfterContentInit eshte nje life cycle hook
   * Per ta perdorur ne duhet te implementojme interface AfterContentInit
   * Ky interface na imponon te perdorim metoden ngAfterContentInit(): void
   * Kjo metode thirret pasi ne kemi perdorur ne html tag-un <ng-content>
   * Ky tag na projekton kodin html qe ndodhet jasht html-se se komponentit por qe eshte perdorur midis tag-eve te
   * selektorit te ketij komponenti.
   * Ne rastin konkret ne kemi perdorur @Component({selector: app-life-cycle-hooks, ...})
   * Ne app component ne kemi thirrur kete komponent ne html duke perdorur tag-un <app-life-cycle-hooks></app-life-cycle-hooks>
   * <app-life-cycle-hooks>
   *   cfare ndodhet midis tag-ut quhet content dhe mund te projektohet ne html-ne e ketij komponenti duke perdorur
   *   ng-content
   * </app-life-cycle-hooks>
   */
  ngAfterContentInit(): void {
    console.log('[AfterContentInit]: called when content is rendered between ng-content tags');
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

  /**
   * AfterContentChecked eshte nje life cycle hook
   * Per ta perdorur ne duhet te implementojme interface AfterContentChecked
   * Ky interface na imponon te perdorim metoden ngAfterContentChecked(): void
   * Kjo metode thirret sa here content i vendosur midis tag-eve te ketij komponenti ndryshon state(vlere)
   */
  ngAfterContentChecked(): void {
    console.log('[AfterContentChecked]: called after the content between this component tags changes state(value)');
  }

  /**
   * DoCheck eshte nje life cycle hook
   * Per ta perdorur ne duhet te implementojme interface DoCheck
   * Ky interface na imponon te perdorim metoden ngDoCheck(): void
   * Kjo metode thirret sa here komponenti duhet te ndryshoj state
   */
  ngDoCheck(): void {
    console.log('[DoCheck]: called every time when component need to change state that is detected by angular change detection');
  }

  /**
   * OnDestroy eshte nje life cycle hook
   * Per ta perdorur ne duhet te implementojme interface OnDestroy
   * Ky interface na imponon te perdorim metoden ngOnDestroy(): void
   * Kjo metode thirret ne momentin kur komponenti shkaterohet dhe hiqet nga browser (DOM)
   */
  ngOnDestroy(): void {
    console.log('[OnDestroy]: called when component is destroyed and removed from DOM');
  }
}
