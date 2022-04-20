export class User {
  constructor(
    public avatar_url:string, public repos_url:string, public name:string, public html_url:string, bio:string, login:string, public following:number, public followers:number, public public_repos:number, public created_at:Date
  ){}
}
