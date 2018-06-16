function solve() {
    class Post {
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let comments = '';
            if(this.comments.length !== 0){
                comments = '\nComments:\n *';
                comments += this.comments.join('\n *');
            }
            return `Post: ${this.title}\nContent: ${this.content}` +
                `\nRating: ${this.likes - this.dislikes}${comments}`;
        }
    }

    return {
        Post,
        SocialMediaPost
    }
}

let Post = solve().Post;
let SocialMediaPost = solve().SocialMediaPost;
let post = new Post('Hi', 'my name is Petko');
console.log(post.toString());
let scm = new SocialMediaPost('Hello', 'First Post', 20, 25);
scm.addComment('Very good :)');
scm.addComment('Don\'t like it!');
scm.addComment('wow');
console.log('' + scm);