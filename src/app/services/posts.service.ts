import {Injectable} from '@angular/core';
import {Post} from '../models/pots';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject<any[]>();

  private posts = [
    {
      index: 0,
      title: 'Mon premier post',
      content: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.`,
      created_at: new Date(),
      loveIts: 0
    },
    {
      index: 1,
      title: 'Mon deuxième post',
      content: `On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte pa`,
      created_at: new Date(),
      loveIts: 0
    },
    {
      index: 2,
      title: 'Mon troisième post',
      content: `Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum `,
      created_at: new Date(),
      loveIts: 0
    }
  ];

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addNewPost(post: Post) {
    this.posts.push(post);
    this.emitPostsSubject();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPostsSubject();
  }

  loveIt(index: number) {
    this.posts[index].loveIts++;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${this.posts[index].loveIts}`);
    this.emitPostsSubject();
  }

  dontLoveIt(index: number) {
    this.posts[index].loveIts--;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${this.posts[index].loveIts}`);
    this.emitPostsSubject();
  }
}
