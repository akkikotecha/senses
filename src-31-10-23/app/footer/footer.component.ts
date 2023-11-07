import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from './footer.service';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  netImage: any = './assets/SENSES LOGO.svg';
  getScreenWidth: any;
  isMobile: any;
  Data: any;
  resourceData: any;
  isLaptop: any;
  subscribe: boolean = false;
  constructor(private router: Router, private footerService: FooterService) {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);

    if (this.getScreenWidth <= 780) {
      this.isMobile = true;
      this.isLaptop = false;
      //   console.log("AK ")
    } else {
      this.isLaptop = true;
      this.isMobile = false;
    }
  }


  homePageSustainability(): void {
    this.router.navigate(['/']).then(() => {
      // window.location.reload();
      localStorage.setItem('Sustainability', 'Sustainability');
      if (localStorage.getItem('Sustainability') == 'Sustainability') {
        setTimeout(() => {
          this.scroll();
        }, 1000);
      }
    });
  }
  handleMap(...args: []): void {
    const baseUrl = '/locate-us';
    localStorage.setItem("mapClick", "whoWeAre");
    const url = baseUrl + '/';
    window.open(url, '_blank');
  }

  scroll() {
    const element = document.getElementById('Sustainability');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('Sustainability', '');
    }
  }

  logosscroll() {
    const element = document.getElementById('logos');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('logos', '');
    }
  }

  blogsscroll() {
    const element = document.getElementById('blogs');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('blogs', '');
    }
  }

  project_casescroll() {
    const element = document.getElementById('project_case');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('project_case', '');
    }
  }
  ngOnInit(): void { }
  handleSubmit() {
    console.log($('#newsLetter').val());
    let newsLetter = {
      email: $('#newsLetter').val(),
    };
    // console.log($('#newsLetter').val());
    console.log('I am call or not');
    this.footerService.addNewsLetter(newsLetter).subscribe((res) => {
      console.log('Result ', res);
      const ra = JSON.stringify(res);
      const Authdata = JSON.parse(ra);

      if (Authdata.message == 'Data Uplodaded SuccessFully') {
        this.subscribe = true;
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  }
}
