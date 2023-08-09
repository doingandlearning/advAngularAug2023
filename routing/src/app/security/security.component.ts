import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SensitiveDataService } from '../sensitive-data.service';
import { RogueService } from '../rogue.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
  providers: [
    {
      provide: SensitiveDataService,
      useClass: RogueService,
    },
  ],
})
export class SecurityComponent {
  imgTag = '';
  maliciousContent: SafeHtml;
  safeUrl = '/weather';
  unsafeUrl = 'javascript:alert("You`ve been hacked")';
  data = '';

  constructor(
    private sanitizer: DomSanitizer,
    private dataService: SensitiveDataService
  ) {
    this.maliciousContent = this.sanitizer.bypassSecurityTrustHtml(this.imgTag);
    this.data = this.dataService.getData();
  }

  updateElement() {
    this.maliciousContent = this.sanitizer.bypassSecurityTrustHtml(this.imgTag);
  }

  ngOnInit() {
    // service fetch the data
    // content: ""  - html string
  }
}
