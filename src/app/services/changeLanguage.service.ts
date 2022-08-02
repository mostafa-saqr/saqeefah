import { EventEmitter, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class changeLanguageService  {
    changeLanguageStatus = new EventEmitter<string>()
    constructor(public translate: TranslateService, @Inject(DOCUMENT) private document: Document) {


    }
    changeLanguge(lang: string) {
        let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
        htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
        htmlTag.lang = lang === "ar" ? "ar" : "en";
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        this.changeCssFile(lang);
        this.changeLanguageStatus.emit(this.getLanguageID())
    }
    getLanguageID(){
        let htmlTag = document.getElementsByTagName("html")[0] as HTMLHtmlElement;
       
        let LanguageID = htmlTag.lang === "ar" ? "1" : "2";
        return LanguageID
       
    }
    getCurrentLanguage(){
        let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
        let currentLang = htmlTag.getAttribute('lang')
        return currentLang
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