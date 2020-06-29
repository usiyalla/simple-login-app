import {action, computed, observable, flow} from "mobx";
import {Image} from "./image";


export class ImageList {
    @observable
    public imageList: Image[] = [
        new Image('q','r')
    ];
    @observable
    state = 'pending';

    constructor() {
    }

    fetchImages = flow(function*() {
        this.imageList = [];
        try {
            const imagesResponse = yield fetch('https://dog.ceo/api/breed/hound/images')
              .then( response => {
                  return response.json()
              })
              .then(data => {
                this.imageList = data.message.map((m,i)=> {
                    return new Image('title ' + i , m)
                });
              });
            
            this.state = 'done';
        } catch (error) {
            this.state = 'error';
        }
    })
    
    
    // {
    //     this.imageList = [...this.imageList, new Image('eee','eeeeeee')]
    // }

    @action
    public addImage(title, url) {
        this.imageList = [...this.imageList, new Image(title, url)];
    }

    @computed
    public get images() {
        console.log('ssssssss');
        return this.imageList;
    }
}