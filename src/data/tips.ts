export interface Tips {
    readonly id: string
    readonly title: string
    readonly link: string
    readonly image_url: string
    readonly alt: string
    readonly content: string
}

export const TipsList: readonly Tips[] = [
    {
        id: "0",
        title: "25 Cooking Terms Every Home Cook Should Know",
        content:
            "If you're an enthusiastic home cook — you read the latest food magazines, watch television shows centered on culinary endeavors, and peruse cookbooks for fun — you've likely picked up oodles of basic cooking terms and are nearly conversant in all the techniques. But there may still be some terminology that you're not quite sure about.",
        alt: "Ingredients on a cutting board",
        link: "https://www.allrecipes.com/article/cooking-terms-explained/",
        image_url:
            "https://www.allrecipes.com/thmb/MLJvAQ4Vcy4g4Pg_UmUQrPZ3xS4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-641274307-2000-17eca0de372c422f8b199c5273d0ac84.jpg",
    },
    {
        id: "1",
        title: "Here's How To Eat Healthy For A Week With Just $50",
        content:
            "Join writers Wendy and Jess in a challenge to eat healthy for an entire week for under $50.",
        alt: "A gallery of finished recipes (apples, salad, etc)",
        link: "https://tasty.co/article/jessicamjones/eat-healthy-all-week-for-50-bucks",
        image_url:
            "https://img.buzzfeed.com/buzzfeed-static/static/2016-07/7/16/asset/buzzfeed-prod-fastlane03/sub-buzz-16736-1467924099-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    },
    {
        id: "2",
        title: "How to Hold a Knife",
        content:
            "Just like the first step to fighting crime is learning how to put on a cape, the first step to perfect knife skills is learning how to hold a knife.",
        alt: "Hand holding knife",
        link: "https://www.seriouseats.com/knife-skills-how-to-hold-a-knife",
        image_url:
            "https://www.seriouseats.com/thmb/ff_rC0s9cgEA4bQ2PHTGKVqCinw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230821-SEA-HowtoHoldAKnife-AmandaSuarez-00-c9c3058f5f21473f9c20a37699fbce27.jpg",
    },
    {
        id: "3",
        title: "School Packed Lunch Ideas",
        content:
            "Thinking of healthy and exciting packed lunches can be a daily challenge - especially if you can't envisage your child happily trotting to school with a box of sprouting mung beans. Here are some simple, fast, and scrumptious ideas to bring new life to the dreaded lunchbox.",
        alt: "Meat wraps in a tray with strawberries",
        link: "https://www.bbcgoodfood.com/howto/guide/school-packed-lunch-inspiration",
        image_url:
            "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Hero-image-0943d18.jpg?quality=90&webp=true&resize=600,545",
    },
    {
        id: "4",
        title: "50 Date Night Dinner Ideas",
        content:
            "Do you have a romantic date night dinner coming up that you want to make extra special? It all starts with the perfect dinner main course — something that is delicious, fancy, and comforting.",
        alt: "Meat wraps in a tray with strawberries",
        link: "https://www.aheadofthyme.com/50-date-night-dinner-ideas/",
        image_url: "https://www.aheadofthyme.com/wp-content/uploads/2021/08/50-date-night-dinner-ideas.jpg",
    },
]
