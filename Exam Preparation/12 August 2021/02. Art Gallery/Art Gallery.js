class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {'picture': 200, 'photo': 50, 'item': 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let isInTheArray = false;
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }
        for (const el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += Number(quantity);
                isInTheArray = true;
            }
        }
        if (!isInTheArray) {
            this.listOfArticles.push({articleModel, articleName, quantity});
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };

    inviteGuest(guestName, personality) {
        for (let guest of this.guests) {
            if (guest === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }
        let obj = {
            guestName,
            points: 0,
            purchasedArticle: 0
        }
        switch (personality) {
            case'Vip':
                obj.points = 500;
                break;
            case'Middle':
                obj.points = 250;
                break;
            default:
                obj.points = 50;
                break;
        }
        this.guests.push(obj);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article;
        let guest;

        let isArticleInTheArray = false;
        for (let element of this.listOfArticles) {
            if (element.articleName !== articleName || element.articleModel !== articleModel) {
                isArticleInTheArray = false;
            } else {
                article = element;
                isArticleInTheArray = true;
                break;
            }
        }
        if (!isArticleInTheArray) {
            throw new Error('This article is not found.');
        }
        if (article.quantity === 0) {
            throw  new Error(`The ${articleName} is not available.`);
        }
        let isGuestInArray = false;
        for (let element of this.guests) {
            if (element.guestName !== guestName) {
                isGuestInArray = false;
            } else {
                isGuestInArray = true;
                guest = element;
                break;
            }
        }
        if (!isGuestInArray) {
            return 'This guest is not invited.';
        }
        if (guest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.'
        } else {
            article.quantity--;
            guest.points -= this.possibleArticles[articleModel];
            guest.purchasedArticle++;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));