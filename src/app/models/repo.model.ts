export class Repo {

    constructor(
        public $key:string,
        public description: string,
        public thumbnail_url: string,
        public detail: string,
        public diameter: number,
        public price: string,
        public product_category: string) {

    }

    static fromJsonList(array): Repo[] {
        return array.map(Repo.fromJson);
    }

    static fromJson({
        $key,
        description,
        thumbnail_url,
        detail,
        diameter,
        price,
        product_category}):Repo {

        return new Repo($key,
        description,
        thumbnail_url,
        detail,
        diameter,
        price,
        product_category);
    }

}
