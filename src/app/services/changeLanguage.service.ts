import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class changeLanguageService  {
    
    constructor(public translate: TranslateService, @Inject(DOCUMENT) private document: Document) {


    }
    changeLanguge(lang: string) {
        let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
        htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
        htmlTag.lang = lang === "ar" ? "ar" : "en";
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        this.changeCssFile(lang);
    }
    changeCssFile(lang: string) {
        let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
        let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
        let bundleName = lang === "ar" ? "arStyle.css" : "enStyle.css";
        if (existingLink) {
            existingLink.href = bundleName;
        } else {
            let newLink = this.document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.type = "text/css";
            newLink.id = "langCss";
            newLink.href = bundleName;
            headTag.appendChild(newLink);
        }
    }
}