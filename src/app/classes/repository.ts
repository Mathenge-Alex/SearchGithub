export class Repository {
    constructor(
        public repos_url:string, public public_repos:number, public description:string, public language:string, public created_at:Date, public login: string
    ){}
}
