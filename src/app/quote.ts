export class Quote {
  showDetails: boolean;
  constructor(public id: number, public name: string, public author: string, public publisher: string,public completeDate:Date , public upvotes: number,public downvotes: number){
      this.showDetails=false;
  }
}

