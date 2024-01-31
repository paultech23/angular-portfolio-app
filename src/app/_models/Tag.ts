export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly CSS = new Tag('CSS', 'orange');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly HTML = new Tag('HTML5', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'darkorange');
    static readonly MYSQL = new Tag('MySQL', 'blue');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }

}