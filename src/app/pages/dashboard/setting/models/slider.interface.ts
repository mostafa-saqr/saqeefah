
export interface ISliderResponses {
    succeeded: boolean;
    message: string;
    errors: string;
    data: Array<ISlider>
}
export interface ISlider {
    Id?: number;
    TitleEn: string;
    TitleAr: string;
    DescriptionAr: string;
    DescriptionEn: string;
    IsActive?:boolean; 
}
export interface ISliderAttachment {
    attachmentId: number;
    path: string;
}


